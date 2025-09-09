// components/MovieRating.js
export default function MovieRating({ rating = 0 }) {
  const safe = Math.max(0, Math.min(5, Math.floor(rating)));
  return (
    <div className="stars" aria-label={`Rating: ${safe} out of 5`}>
      {'★'.repeat(safe) + '☆'.repeat(5 - safe)}
    </div>
  );
}