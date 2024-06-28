import { Request, Response } from 'express';
import { connect } from '../database/db';

export const getMovieGenres = async (req: Request, res: Response) => {
  try {
    const db = await connect();
    const collection = db.collection('movie_genres');
    const genres = await collection.find({}, { projection: { _id: 0, genre: 1 } }).toArray();    
    const genreNames = genres.map(doc => doc.genre);
    res.json(genreNames);
  } catch (err) {
    res.status(500).send('Error fetching movie genres');
  }
};