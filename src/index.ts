import express from 'express';
import bodyParser from 'body-parser';
import movieGenresRoutes from './routes/movie-genres-routes';
import moviesRoutes from './routes/movies-routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', moviesRoutes);
app.use('/api', movieGenresRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
