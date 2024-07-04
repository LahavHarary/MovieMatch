import { connect, disconnect } from '../db';

async function insertMovies() {
  const db = await connect();
  const collection = db.collection('movies');
  console.log("Starting to insert movies");
  await collection.insertMany(
    [
        { "movie_name": "The Great Adventure", "genres": ["Action", "Adventure"] },
        { "movie_name": "Love in the Time of Coffee", "genres": ["Romance", "Drama"] },
        { "movie_name": "Alien Invasion: Earth", "genres": ["Sci-Fi", "Thriller"] },
        { "movie_name": "Mystery of the Haunted House", "genres": ["Horror", "Mystery"] },
        { "movie_name": "The Comic Relief", "genres": ["Comedy"] },
        { "movie_name": "Space Explorers", "genres": ["Sci-Fi", "Adventure"] },
        { "movie_name": "Battle for the Kingdom", "genres": ["Action", "Fantasy"] },
        { "movie_name": "The Silent Whisper", "genres": ["Drama", "Mystery"] },
        { "movie_name": "Frosty Nights", "genres": ["Thriller", "Drama"] },
        { "movie_name": "Journey to the East", "genres": ["Adventure", "Drama"] },
        { "movie_name": "Funny Business", "genres": ["Comedy"] },
        { "movie_name": "The Last Stand", "genres": ["Action", "War"] },
        { "movie_name": "Dreams of Reality", "genres": ["Fantasy", "Romance"] },
        { "movie_name": "Urban Legends", "genres": ["Horror", "Thriller"] },
        { "movie_name": "High School Days", "genres": ["Comedy", "Drama"] },
        { "movie_name": "Pirates of the Dark Seas", "genres": ["Adventure", "Action"] },
        { "movie_name": "The Final Countdown", "genres": ["Sci-Fi", "Thriller"] },
        { "movie_name": "Tales of the Unexpected", "genres": ["Fantasy", "Mystery"] },
        { "movie_name": "Love Across the Universe", "genres": ["Romance", "Sci-Fi"] },
        { "movie_name": "Haunted by the Past", "genres": ["Horror", "Drama"] },
        { "movie_name": "Comedy Nights", "genres": ["Comedy"] },
        { "movie_name": "The Secret Agent", "genres": ["Thriller", "Mystery"] },
        { "movie_name": "Warriors of the Future", "genres": ["Action", "Sci-Fi"] },
        { "movie_name": "A Walk to Remember", "genres": ["Drama", "Romance"] },
        { "movie_name": "The Lost World", "genres": ["Adventure", "Fantasy"] },
        { "movie_name": "Laughter Therapy", "genres": ["Comedy"] },
        { "movie_name": "The Edge of Darkness", "genres": ["Thriller", "Horror"] },
        { "movie_name": "The Kingdom's End", "genres": ["Fantasy", "Action"] },
        { "movie_name": "Whispers in the Wind", "genres": ["Drama", "Mystery"] },
        { "movie_name": "Tropical Paradise", "genres": ["Romance", "Comedy"] },
        { "movie_name": "Alien Contact", "genres": ["Sci-Fi", "Thriller"] },
        { "movie_name": "Treasure Hunt", "genres": ["Adventure", "Family"] },
        { "movie_name": "The Comedic Duo", "genres": ["Comedy"] },
        { "movie_name": "Legends of the Hidden Temple", "genres": ["Fantasy", "Adventure"] },
        { "movie_name": "The Last Horizon", "genres": ["Drama", "Sci-Fi"] },
        { "movie_name": "Midnight Hauntings", "genres": ["Horror", "Mystery"] },
        { "movie_name": "Action Heroes", "genres": ["Action", "Comedy"] },
        { "movie_name": "Epic Battles", "genres": ["War", "Action"] },
        { "movie_name": "Starry Nights", "genres": ["Romance", "Drama"] }
      ]    
  );
  console.log('Movie genres inserted');
  disconnect();
}

insertMovies().catch(console.error);
