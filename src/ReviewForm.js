import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
