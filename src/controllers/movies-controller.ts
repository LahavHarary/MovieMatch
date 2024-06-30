import { Request, Response } from 'express';
import { connect } from '../database/db';

export const getMoviesAccordingToGenre = async (req: Request, res: Response) => {
    try {
        const genre : string = req.params.genre;
        // Validate genre
        if (!genre) {
            return res.status(400).send('Genre is required');
        }
        console.log(genre);

        const db = await connect();
        const collection = db.collection('movies');
        const movies = await collection.find(
            { genres: { $in: [genre] } },
             { projection: { _id: 0, movie_name: 1, genres: 1 } }
             ).toArray();

        return res.status(200).json(movies);
    }
    catch(err)
    {
        console.error('Error fetching movie genres:', err);
        return res.status(500).send('Error fetching movie genres');
    }
}