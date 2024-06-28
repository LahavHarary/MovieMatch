import { Router } from 'express';
import { getMovieGenres } from '../controllers/movie-genres-controller';

const router = Router();

router.get('/movie-genres', getMovieGenres);

export default router;