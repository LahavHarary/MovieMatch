import { connect } from '../db';

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
    { genre: 'Western' }
  ]);
  console.log('Movie genres inserted');
}

insertMovieGenres().catch(console.error);
