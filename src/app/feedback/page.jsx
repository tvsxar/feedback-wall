"use client";
import FeedbacksList from "@/components/FeedbacksList";
import { useEffect } from "react";
import useFeedback from "@/lib/hooks/useFeedback";
import LoadingOverlay from "@/components/LoadingOverlay";
import ErrorOverlay from "@/components/ErrorOverlay";
import EmptyState from "@/components/EmptyState";

export default function FeedbacksPage() {
  const { feedbacks, listError, listLoading, fetchFeedbacks } = useFeedback();

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="p-4">
      {listLoading && <LoadingOverlay message="Loading feedbacks..." />}
      {listError && (
        <ErrorOverlay message={listError} onRetry={fetchFeedbacks} />
      )}

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight
          bg-linear-to-b from-white via-gray-300 to-gray-400
          bg-clip-text text-transparent"
        >
          Community Feedback
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Honest thoughts from real users
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {!listLoading &&
          !listError &&
          (feedbacks.length > 0 ? (
            <FeedbacksList feedbacks={feedbacks} />
          ) : (
            <EmptyState />
          ))}
      </div>
    </div>
  );
}
