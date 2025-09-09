// components/RatedMovies.js
import MovieRating from './MovieRating';

export default function RatedMovies({ movies = [] }) {
  const getMessage = (rating) => {
    if (rating <= 1) return 'Bad Movie 😟';
    if (rating <= 2) return 'Decent Movie 😐';
    if (rating <= 4) return 'Good Movie 🤗';
    return 'Great Movie 🥳';
  };

  return (
    <section>
      <h2 style={{ color: 'white', marginBottom: 12 }}>⭐ Rated Movies</h2>
      {movies.length === 0 ? (
        <p style={{ color: '#ddd' }}>No rated movies yet.</p>
      ) : (
        <div className="movie-container">
          {movies.map((m) => (
            <div className="movie-card" key={m.id}>
              <img src={m.poster} alt={m.title} className="movie-poster" />
              <div className="movie-info">
                <h2>{m.title}</h2>
                <p className="release-date">({m.year})</p>

                <MovieRating rating={m.rating} />

                <p style={{ marginTop: 8 }}>{getMessage(m.rating)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
