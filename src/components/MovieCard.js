// components/MovieCard.js
export default function MovieCard({ poster, title, rating, date, year }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-info">
        <h2>{title}</h2>
        <div className="stars">{rating}</div>
        <p className="release-date">{date} <span className="year">({year})</span></p>
      </div>
    </div>
  );
}
