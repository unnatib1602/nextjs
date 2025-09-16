'use client';
import { useState } from 'react';
import AddRating from './AddRating';

export default function AllMovies({ movies = [], onRate, onSubmitReview }) {
  const [localReviews, setLocalReviews] = useState({});

  const handleChangeReview = (id, value) => {
    setLocalReviews(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (id) => {
    const reviewText = localReviews[id] ?? '';
    if (reviewText && onSubmitReview) {
      onSubmitReview(id, reviewText);
      // Clear textarea after submit
      setLocalReviews(prev => ({ ...prev, [id]: '' }));
    }
  };

  return (
    <section>
      <h2 style={{ color: 'white', marginBottom: 12 }}>All Movies</h2>
      <div className="movie-container">
        {movies.map(m => (
          <div className="movie-card" key={m.id} style={{ marginBottom: 20, background: '#222', padding: 12, borderRadius: 8 }}>
            <img src={m.poster} alt={m.title} className="movie-poster" style={{ width: '100%', borderRadius: 6 }} />
            <div className="movie-info" style={{ marginTop: 8 }}>
              <h2 style={{ color: '#fff' }}>{m.title}</h2>
              <p className="release-date" style={{ color: '#ccc' }}>({m.year})</p>

              <AddRating initial={m.rating} onRate={(rating) => onRate(m.id, rating)} />

              <textarea
                placeholder="Write your review..."
                value={localReviews[m.id] ?? ''}
                onChange={(e) => handleChangeReview(m.id, e.target.value)}
                style={{ width: '100%', marginTop: 8, padding: 6, borderRadius: 6 }}
              />

              <button
                onClick={() => handleSubmit(m.id)}
                style={{
                  marginTop: 6,
                  padding: '6px 12px',
                  backgroundColor: 'orange',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  color: 'black',
                  fontWeight: 'bold'
                }}
              >
                Submit Review
              </button>

              {m.review && (
                <p style={{ marginTop: 8, fontStyle: 'italic', color: '#ccc' }}>
                  "{m.review}"
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
