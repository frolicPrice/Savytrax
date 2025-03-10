"use client";

import { FC, useState, useEffect } from "react";

interface Review {
  _id?: string;
  user: string;
  rating: number;
  review: string;
}

const sampleReviews: Review[] = [
  {
    user: "John Doe",
    rating: 4,
    review: "Great website! Very easy to use and navigate.",
  },
  {
    user: "Sarah Lee",
    rating: 4,
    review: "Nice UI, but it loads a bit slow sometimes.",
  },
];

const ReviewsPage: FC = () => {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [newReview, setNewReview] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch("app/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.length ? data : sampleReviews));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview || !name) return;

    const newReviewEntry: Review = { user: name, rating, review: newReview };
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewEntry),
    });

    if (response.ok) {
      const savedReview = await response.json();
      setReviews([savedReview, ...reviews]);
      setNewReview("");
      setName("");
      setRating(5);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">💬 Website Reviews</h1>
      <p className="text-center text-gray-600 mb-6">
        Tell us how your experience was using our website! Your feedback helps us improve.
      </p>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={review._id || index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-lg font-semibold">{review.user}</h2>
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex">
                {Array.from({ length: 5 }, (_, idx) => (
                  <span key={idx} className={`text-yellow-500 text-xl ${idx < review.rating ? "★" : "☆"}`}></span>
                ))}
              </div>
              <span className="text-gray-500">({review.rating} ⭐)</span>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">📝 Leave a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={4}
            placeholder="How was your experience with our website?"
            className="w-full p-3 border rounded-lg"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <label className="font-medium">Rating:</label>
            <select
              className="p-2 border rounded-lg"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {star} Stars
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsPage;
