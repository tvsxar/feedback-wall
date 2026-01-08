import Link from "next/link";

function HomeButtons() {
  return (
    <div className="flex space-x-4">
      <Link href="/feedback">
        <button className="px-6 py-3 bg-gray-800 rounded-full text-lg font-semibold transition-all duration-200 cursor-pointer hover:bg-violet-400 hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]">
          All Feedbacks
        </button>
      </Link>
      <Link href="/feedback/new">
        <button className="px-6 py-3 bg-gray-800 rounded-full text-lg font-semibold transition-all duration-200 cursor-pointer hover:bg-violet-400 hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]">
          Leave Feedback
        </button>
      </Link>
    </div>
  );
}

export default HomeButtons;
