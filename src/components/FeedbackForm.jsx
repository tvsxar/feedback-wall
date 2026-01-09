import FeedbackTypeDropdown from "@/components/FeedbackTypeDropdown";

function FeedbackForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name (optional)"
        className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-4 outline-none 
                focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
      />

      <textarea
        rows="5"
        className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-4 resize-none 
                outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
        placeholder="Share your thoughts, ideas or report a bug..."
      ></textarea>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <FeedbackTypeDropdown />

        <button
          type="submit"
          className="bg-violet-500 text-white rounded-2xl py-4 font-bold hover:bg-violet-400 
          hover:scale-101 transition-all shadow-lg shadow-violet-500/20 cursor-pointer"
        >
          Send feedback
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
