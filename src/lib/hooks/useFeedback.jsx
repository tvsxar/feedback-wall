"use client";
import { useState } from "react";

function useFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchFeedbacks() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/feedback");
      if (res.status !== 200) throw new Error("Failed to fetch feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addFeedback(feedbackData) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      if (res.status !== 201) throw new Error("Failed to create feedback");
      const savedFeedback = await res.json();
      setFeedbacks((prev) => [savedFeedback, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    feedbacks,
    loading,
    error,
    fetchFeedbacks,
    addFeedback,
  };
}

export default useFeedback;
