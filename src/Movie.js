import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, movieRatings, onRateMovie }) => {
    const [reviews, setReviews] = useState([]);
    const rating = movieRatings[movie.id] || 0;
  
    const addReview = (review) => {
      setReviews([...reviews, review]);
    };
  
    const handleRate = (newRating) => {
      onRateMovie(movie.id, newRating); 
    };

  return (
    <div>
      <h2>{movie.title}</h2>
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

export default Movie;
