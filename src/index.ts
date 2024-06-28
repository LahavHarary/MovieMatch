import express from 'express';
import bodyParser from 'body-parser';
import movieGenresRoutes from './routes/movie-genres-routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', movieGenresRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
