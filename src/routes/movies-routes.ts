import { Router } from 'express';
import { getMoviesAccordingToGenre, getAllMovies } from '../controllers/movies-controller';

const router = Router();

router.get('/movies', getAllMovies);
router.get('/moviesAccordingToGenre', getMoviesAccordingToGenre);

export default router;