'use client';
import { useState } from 'react';

export default function AddRating({ initial = 0, onRate }) {
  const [selected, setSelected] = useState(initial);

  const handleClick = (n) => {
    setSelected(n);
    if (typeof onRate === 'function') onRate(n);
  };

  return (
    <div className="add-rating" role="group" aria-label="Rate this movie">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => handleClick(n)}
          className={`rating-btn ${n <= selected ? 'active' : ''}`}
          aria-pressed={n <= selected}
          title={`${n} star${n > 1 ? 's' : ''}`}
        >
          {n}★
        </button>
      ))}
    </div>
  );
}


