"use client";
import { useEffect, useState } from "react";
import AllMovies from "../components/AllMovies"; // adjust path if needed

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from Django API
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies/`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  // Function to submit review to Django API
  const handleSubmitReview = (movieId, comment) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies/${movieId}/review/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reviewer: "FrontendUser", // hardcoded for now
        rating: 5, // can pass real rating later
        comment,
      }),
    })
      .then((res) => res.json())
      .then((newReview) => {
        console.log("Review submitted:", newReview);

        // Optionally update state so UI refreshes without reloading
        setMovies((prevMovies) =>
          prevMovies.map((m) =>
            m.id === movieId
              ? { ...m, reviews: [...(m.reviews || []), newReview] }
              : m
          )
        );
      })
      .catch((err) => console.error("Error submitting review:", err));
  };

  return (
    <AllMovies
      movies={movies}
      onRate={() => {}}
      onSubmitReview={handleSubmitReview}
    />
  );
}
