'use client';
import { useState, useEffect } from 'react';
import RatedMovies from '@/components/RatedMovies';

export default function RatedMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('movies');
    if (saved) {
      const parsed = JSON.parse(saved);
      // only show rated or reviewed movies
      setMovies(parsed.filter((m) => m.rating !== null || m.review));
    }
  }, []);

  return (
    <section className="pt-10">
      <h1 className="text-2xl text-center mb-6">⭐ Rated Movies</h1>
      <RatedMovies movies={movies} />
    </section>
  );
}
