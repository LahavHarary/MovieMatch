import { connect, disconnect } from '../db';

async function insertMovieGenres() {
  const db = await connect();
  const collection = db.collection('movie_genres');
  await collection.insertMany([
    { genre: 'Action' },
    { genre: 'Comedy' },
    { genre: 'Drama' },
    { genre: 'Fantasy' },
    { genre: 'Horror' },
    { genre: 'Mystery' },
    { genre: 'Romance' },
    { genre: 'Thriller' },
    { genre: 'Western' },
    { genre: 'Anime' }
  ]);
  console.log('Movie genres inserted');
  disconnect();
}

insertMovieGenres().catch(console.error);
