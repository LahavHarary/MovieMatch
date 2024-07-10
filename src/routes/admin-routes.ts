import { Router } from 'express';
import { AddMovie } from '../controllers/admin-controller';

const router = Router();

router.post('/add-movie', AddMovie);

export default router;