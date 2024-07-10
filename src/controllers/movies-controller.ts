import { Request, Response } from 'express';
import { connect } from '../database/db';

// Endpoint to get movies according to genre
export const getMoviesAccordingToGenre = async (req: Request, res: Response) => {
    try {
        let genres: string[] = req.body.movie_genres;
        console.log("genres - " +genres);
        
        // Validate genre
        if (!genres) {
            return res.status(400).send('Genre is required');
        }

        genres.forEach(genre => {
            // Capitalize the first letter of the genre
            genre = genre.charAt(0).toUpperCase() + genre.slice(1);    
        });
        
        // Fetch all movies
        const movies = await fetchAllMovies();
        
        // Filter movies by genre
        const moviesFiltered = movies.filter(movie => movie.genres.includes(genres));
        
        return res.status(200).json(moviesFiltered);
    } catch (err) {
        console.error('Error fetching movies by genre:', err);
        return res.status(500).send('Error fetching movies by genre');
    }
};

// Endpoint to get all movies
export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await fetchAllMovies();
        return res.status(200).json(movies);
    } catch (err) {
        console.error('Error fetching movies:', err);
        return res.status(500).send('Error fetching movies');
    }
};

// Function to fetch all movies from the database
const fetchAllMovies = async () => {
    const db = await connect();
    const collection = db.collection('movies');
    const movies = await collection.find({}).toArray();
    return movies.map(movieRow => ({
        movie_name: movieRow.movie_name,
        genres: movieRow.genres,
    }));
};