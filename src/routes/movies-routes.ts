import { Router } from 'express';
import { getMoviesAccordingToGenre } from '../controllers/movies-controller';

const router = Router();

router.get('/movies/:genre', getMoviesAccordingToGenre);

export default router;