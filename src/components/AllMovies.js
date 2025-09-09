// components/AllMovies.js
import AddRating from './AddRating';

export default function AllMovies({ movies = [], onRate }) {
  return (
    <section>
      <h2 style={{ color: 'white', marginBottom: 12 }}>All Movies (to rate)</h2>
      {movies.length === 0 ? (
        <p style={{ color: '#ddd' }}>No movies to rate.</p>
      ) : (
        <div className="movie-container">
          {movies.map((m) => (
            <div className="movie-card" key={m.id}>
              <img src={m.poster} alt={m.title} className="movie-poster" />
              <div className="movie-info">
                <h2>{m.title}</h2>
                <p className="release-date">({m.year})</p>

                {/* AddRating calls onRate(movieId, rating) */}
                <AddRating initial={0} onRate={(rating) => onRate(m.id, rating)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
