import formatDate from "@/lib/utils";

export default function FeedbackCard({ feedback }) {
  const avatarLetter = feedback.name?.[0]?.toUpperCase() || "A";

  return (
    <li
      className="flex flex-col gap-4 border border-gray-600 
      rounded-lg p-6 w-full bg-gray-800 
      hover:scale-101 transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 text-gray-100 font-semibold text-sm">
            {avatarLetter}
          </div>

          <h3 className="font-semibold text-gray-100">
            {feedback.name || "Anonymous"}
          </h3>
        </div>

        <div
          className={`py-1 px-3 rounded-full text-sm font-medium transition-all duration-200 cursor-default
  ${
    feedback.type === "Idea"
      ? "bg-linear-to-r from-violet-400/40 to-violet-500/30 text-violet-300"
      : feedback.type === "Bug"
      ? "bg-linear-to-r from-pink-400/40 to-pink-500/30 text-pink-300"
      : "bg-linear-to-r from-blue-400/40 to-blue-500/30 text-blue-300"
  }`}
        >
          {feedback.type}
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg py-2">
        <p className="text-gray-200">{feedback.text}</p>
      </div>

      <div className="flex justify-end">
        <p className="text-sm text-gray-500">
          {formatDate(feedback.createdAt)}
        </p>
      </div>
    </li>
  );
}
