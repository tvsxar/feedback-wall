import FeedbackHeader from "@/components/FeedbackHeader";
import FeedbackForm from "@/components/FeedbackForm";

export default function NewFeedbackPage() {
  return (
    <div
      className="flex flex-col justify-center 
    items-center px-4 py-12 h-full"
    >
      <div className="w-full max-w-lg space-y-10">
        <FeedbackHeader />
        <FeedbackForm />
      </div>
    </div>
  );
}
