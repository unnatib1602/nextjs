'use client';

export default function RatedMovies({ movies = [] }) {
  return (
    <section>
      <h2 style={{ color: 'white', marginBottom: 12 }}>Rated Movies</h2>
      <div className="movie-container">
        {movies.length === 0 && <p style={{ color: '#ccc' }}>No rated movies yet</p>}
        {movies.map(m => (
          <div key={m.id} className="movie-card" style={{ marginBottom: 20, background: '#222', padding: 12, borderRadius: 8 }}>
            <img src={m.poster} alt={m.title} style={{ width: '100%', borderRadius: 6 }} />
            <div style={{ marginTop: 8 }}>
              <h2 style={{ color: '#fff' }}>{m.title}</h2>
              <p style={{ color: '#ccc' }}>({m.year})</p>
              <p>Rating: {m.rating}</p>
              <p style={{ fontStyle: 'italic', color: '#ccc' }}>"{m.review}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

