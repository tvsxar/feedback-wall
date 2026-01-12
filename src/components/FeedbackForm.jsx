"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useFeedback from "@/lib/hooks/useFeedback";
import FeedbackTypeDropdown from "@/components/FeedbackTypeDropdown";

function FeedbackForm() {
  const router = useRouter();
  const { formLoading, formError, addFeedback } = useFeedback();
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    text: "",
    type: "Idea",
  });

  function handleInput(e) {
    const { name, value } = e.target;

    setFeedbackData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const success = addFeedback(feedbackData);

    if (success) router.push("/feedback");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={feedbackData.name}
        onChange={handleInput}
        placeholder="Your name (optional)"
        className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-4 outline-none 
                focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
      />

      <textarea
        rows="5"
        name="text"
        value={feedbackData.text}
        onChange={handleInput}
        className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-4 resize-none 
                outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
        placeholder="Share your thoughts, ideas or report a bug..."
      ></textarea>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <FeedbackTypeDropdown
          type={feedbackData.type}
          setFeedbackData={setFeedbackData}
        />

        <button
          type="submit"
          disabled={formLoading}
          className="bg-violet-500 text-white rounded-2xl py-4 font-bold hover:bg-violet-400 
          hover:scale-101 transition-all shadow-lg shadow-violet-500/20 cursor-pointer"
        >
          {formLoading ? "Sending..." : "Send feedback"}
        </button>

        {formError && <p className="text-red-400">{formError}</p>}
      </div>
    </form>
  );
}

export default FeedbackForm;
