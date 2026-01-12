import { useState } from "react";

function useFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  const [listLoading, setListLoading] = useState(false);
  const [listError, setListError] = useState(null);

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  async function fetchFeedbacks() {
    setListLoading(true);
    setListError(null);

    try {
      const res = await fetch("/api/feedback");
      if (res.status !== 200) throw new Error("Failed to fetch feedbacks");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      setListError(err.message);
    } finally {
      setListLoading(false);
    }
  }

  async function addFeedback(feedbackData) {
    setFormLoading(true);
    setFormError(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...feedbackData,
          name: feedbackData.name?.trim(),
        }),
      });
      if (res.status !== 201) throw new Error("Failed to create feedback");
      const savedFeedback = await res.json();
      setFeedbacks((prev) => [savedFeedback, ...prev]);
      return true;
    } catch (err) {
      setFormError(err.message);
      return false;
    } finally {
      setFormLoading(false);
    }
  }

  return {
    feedbacks,
    listLoading,
    listError,
    formLoading,
    formError,
    fetchFeedbacks,
    addFeedback,
  };
}

export default useFeedback;
