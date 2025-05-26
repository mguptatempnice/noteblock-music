import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;
const client = new MongoClient(uri);

const clientPromise: Promise<MongoClient> = global._mongoClientPromise || client.connect();
global._mongoClientPromise = clientPromise;

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db(dbName);
}