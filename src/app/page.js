'use client';

import { useState, useEffect } from 'react';
import AllMovies from '../components/AllMovies';
import './globals.css';

const initialMovies = [
  { id: 1, poster: "https://i.etsystatic.com/10683147/r/il/d4a024/4900691314/il_1080xN.4900691314_fu21.jpg", title: "Oppenheimer", year: 2023, rating: 0, review: '' },
  { id: 2, poster: "https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg", title: "Inception", year: 2010, rating: 0, review: '' },
  { id: 3, poster: "https://cdn.kinocheck.com/i/m2s0jjjwgk.jpg", title: "Parasite", year: 2019, rating: 0, review: '' }
];

export default function Home() {
  const [movies, setMovies] = useState(initialMovies);

  // Load saved movies on mount
  useEffect(() => {
    const saved = localStorage.getItem('movies');
    if (saved) {
      setMovies(JSON.parse(saved));
    }
  }, []);

  // Helper: sync to localStorage
  const saveMovies = (updated) => {
    setMovies(updated);
    localStorage.setItem('movies', JSON.stringify(updated));
  };

  // Update rating
  const handleAddRating = (id, rating) => {
    const updated = movies.map(m => m.id === id ? { ...m, rating } : m);
    saveMovies(updated);
  };

  // Update review
  const handleSubmitReview = (id, review) => {
    const updated = movies.map(m => m.id === id ? { ...m, review } : m);
    saveMovies(updated);

    const movie = updated.find(m => m.id === id);
    if (movie) {
      alert(`Review Added 🥳 for "${movie.title}"`);
    }
  };

  return (
    <main>
      <h1 className="main-heading">🎬 Movie Review App</h1>

      <section style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: 12 }}>
        <AllMovies
          movies={movies}
          onRate={handleAddRating}
          onSubmitReview={handleSubmitReview}
        />
      </section>
    </main>
  );
}
