import FeedbackCard from "@/components/FeedbackCard";
import { mockFeedbacks } from "@/lib/mockFeedbacks";

export default function FeedbacksList() {
  return (
    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {mockFeedbacks.map((feedback, idx) => (
        <FeedbackCard key={idx + feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
}
