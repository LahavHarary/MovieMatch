import { Request, Response } from 'express';
import { connect, disconnect } from '../database/db';


export const AddMovie = async (req: Request, res: Response) => {
    const db = await connect();
    const collection = db.collection('movies');   
    const movie_name = req.body.movie_name;
    const movie_genre = req.body.movie_genre;

    try{
        console.log("Starting to insert movies");
        insertMovies(movie_name, movie_genre);
        return res.status(200).send(`Movie ${movie_name} inserted`);
    }catch(err)
    {
        console.error('Error adding movie:', err);
        return res.status(500).send('Error Adding movie');
    }
    
    
}

async function insertMovies(movie_name: string, movie_genre: string) {
    const db = await connect();
    const collection = db.collection('movies');
    
    await collection.insertOne({ "movie_name": movie_name, "genres": movie_genre });
    disconnect();
}