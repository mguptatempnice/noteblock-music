import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Extract user data from the request body
    const { username, theme } = body;

    // Validate input
    if (!username || !theme) {
      return NextResponse.json(
        { error: 'Username and theme are required.' },
        { status: 400 }
      );
    }

    // Connect to the database
    const db = await connectToDatabase();

    // Check if the user already exists
    const existingUser = await db.collection('dynamic_css').findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists.' },
        { status: 400 }
      );
    }

    // Insert the new user into the collection
    const result = await db.collection('dynamic_css').insertOne({
      username,
      theme,
    });

    return NextResponse.json(
      { message: 'User created successfully.', userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}