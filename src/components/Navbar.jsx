"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  const isAll = pathname === "/feedback";
  const isNew = pathname === "/feedback/new";

  return (
    <header className="py-4 px-4 sm:px-12 lg:px-25 bg-gray-950 border-b border-gray-200/30">
      <div className="flex justify-between items-center text-gray-100">
        <h1 className="text-2xl font-bold">
          Flow
          <span className="text-violet-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]">
            ly
          </span>
        </h1>

        <div className="inline-flex bg-gray-800 rounded-full p-1">
          <Link href="/feedback">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer hover:bg-violet-400 hover:scale-101 transform duration-200 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] ${
                isAll
                  ? "bg-violet-400 text-gray-900 shadow-md drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] hover:brightness-110"
                  : "bg-gray-800 text-gray-100 hover:bg-gray-700"
              }`}
            >
              All Feedbacks
            </button>
          </Link>

          <span className="border-l h-6 mx-1 self-center opacity-10"></span>

          <Link href="/feedback/new">
            <button
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer hover:bg-violet-400 hover:scale-101 transform duration-200 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] ${
                isNew
                  ? "bg-violet-400 text-gray-900 shadow-md drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] hover:brightness-110"
                  : "bg-gray-800 text-gray-100 hover:bg-gray-700"
              }`}
            >
              Leave Feedback
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
