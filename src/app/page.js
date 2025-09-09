'use client';

import { useState } from 'react';
import AllMovies from '../components/AllMovies';
import RatedMovies from '../components/RatedMovies';
import './globals.css';

const initialMovies = [
  {
    id: 1,
    poster: "https://i.etsystatic.com/10683147/r/il/d4a024/4900691314/il_1080xN.4900691314_fu21.jpg",
    title: "Oppenheimer",
    year: 2023,
    rating: null
  },
  {
    id: 2,
    poster: "https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg",
    title: "Inception",
    year: 2010,
    rating: null
  },
  {
    id: 3,
    poster: "https://cdn.kinocheck.com/i/m2s0jjjwgk.jpg",
    title: "Parasite",
    year: 2019,
    rating: null
  }
];

export default function Home() {
  const [movies, setMovies] = useState(initialMovies);

  // handler called when a movie receives a rating
  const handleAddRating = (id, rating) => {
    // get title for notification (current snapshot)
    const movie = movies.find((m) => m.id === id);
    const title = movie ? movie.title : 'movie';

    // update state (set rating)
    setMovies((prev) => prev.map((m) => (m.id === id ? { ...m, rating } : m)));

    // notify user
    alert(`Rating Added for ${title} 🥳`);
  };

  const allMovies = movies.filter((m) => m.rating === null);
  const ratedMovies = movies.filter((m) => m.rating !== null);

  return (
    <main>
      <h1 className="main-heading">🎬 Movie Review App</h1>

      <section style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: 12 }}>
        <AllMovies movies={allMovies} onRate={handleAddRating} />
      </section>

      <section style={{ width: '100%', maxWidth: 1200, margin: '22px auto', padding: 12 }}>
        <RatedMovies movies={ratedMovies} />
      </section>
    </main>
  );
}
