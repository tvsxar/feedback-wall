import FeedbackCard from "@/components/FeedbackCard";

export default function FeedbacksList({ feedbacks }) {
  return (
    <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {feedbacks.map((feedback, idx) => (
        <FeedbackCard key={feedback._id} feedback={feedback} />
      ))}
    </ul>
  );
}
