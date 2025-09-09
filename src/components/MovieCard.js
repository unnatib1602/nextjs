// components/MovieCard.js
'use client';
import { useState } from 'react';
import MovieRating from './MovieRating';
import AddRating from './AddRating';

export default function MovieCard({ poster, title, rating = 0, date, year }) {
  const [movieRating, setMovieRating] = useState(rating);

  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h2>{title}</h2>

        {/* Display rating stars */}
        <MovieRating rating={movieRating} />

        {/* Buttons to change rating */}
        <AddRating initial={movieRating} onRate={(r) => setMovieRating(r)} />

        <p className="release-date">
          {date} <span className="year">({year})</span>
        </p>
      </div>
    </div>
  );
}
