import { connect, disconnect} from '../db';

const collectionName = "movie_genres";

async function cleanCollection() {
    const db = await connect();
    const collection = db.collection(collectionName);

    const result = await collection.deleteMany({});
    console.log(`Deleted ${result.deletedCount} documents from ${collectionName}`);

    console.log(`Collection '${collectionName}' cleaned successfully`);
    disconnect();
}

cleanCollection().catch(console.error);
