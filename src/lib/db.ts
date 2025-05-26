import { MongoClient } from 'mongodb';

// Extend the NodeJS.Global type to include _mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB!;
const client = new MongoClient(uri);

// Use the global object to store the client promise
const clientPromise: Promise<MongoClient> = global._mongoClientPromise || client.connect();
global._mongoClientPromise = clientPromise;

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db(dbName);
}