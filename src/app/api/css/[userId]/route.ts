// import { NextResponse } from 'next/server';
// import { connectToDatabase } from '@/lib/db';

// export async function GET(
//   req: Request,
//   { params }: { params: { userId: string } }
// ) {
//   const { userId } = params; // Extract the username from the route (e.g., /alice -> userId = "alice")

//   try {
//     // Connect to the database
//     const db = await connectToDatabase();

//     // Fetch the user's theme from the database using the username
//     const user = await db.collection('dynamic_css').findOne({ username: userId });

//     console.log(`Fetched theme for user: ${userId}`);

//     if (!user) {
//       // Return default theme if the user is not found
//       return NextResponse.json(
//         {
//           'primary-color': '#8e24aa',
//           'accent-color': '#ab47bc',
//           'bg-default': '#f8f9fa',
//           'bg-paper': '#ffffff',
//           'text-primary': '#212121',
//         },
//         { status: 404 }
//       );
//     }

//     // Return the user's theme
//     return NextResponse.json(user.theme, {
//       status: 200,
//       headers: {
//         'Cache-Control': 'no-store',
//       },
//     });
//   } catch (error) {
//     console.error('Error fetching user theme:', error);
//     return NextResponse.json(
//       { error: 'Internal server error.' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  // Ensure userId is valid
  if (!userId || typeof userId !== 'string') {
    console.error('Invalid or missing userId:', userId);
    return NextResponse.json(
      { error: 'Invalid or missing userId' },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Fetch the user's theme from the database using the username
    const user = await db.collection('dynamic_css').findOne({ username: userId });

    if (!user) {
      // Return default theme if the user is not found
      return NextResponse.json(
        {
          'primary-color': '#8e24aa',
          'accent-color': '#ab47bc',
          'bg-default': '#f8f9fa',
          'bg-paper': '#ffffff',
          'text-primary': '#212121',
        },
        { status: 404 }
      );
    }

    // Return the user's theme
    return NextResponse.json(user.theme, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error fetching user theme:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}