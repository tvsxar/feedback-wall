export default function NewFeedbackPage() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-12 h-full">
      <div className="w-full max-w-lg space-y-10">
        <div className="text-center space-y-3">
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-b from-white 
          to-gray-400 bg-clip-text text-transparent"
          >
            Leave your feedback
          </h1>
          <p className="text-gray-400 text-lg">
            Your opinion helps us improve the service
          </p>
        </div>

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
            <select
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 outline-none 
            cursor-pointer focus:border-violet-500 appearance-none"
            >
              <option>Idea</option>
              <option>Bug</option>
              <option>Praise</option>
            </select>

            <button
              type="submit"
              className="bg-violet-500 text-white rounded-2xl py-4 font-bold hover:bg-violet-400 hover:scale-101 transition-all shadow-lg shadow-violet-500/20 cursor-pointer"
            >
              Send feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
