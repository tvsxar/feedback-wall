"use client";
import { useState } from "react";

export default function DropdownButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Idea");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const options = ["Idea", "Bug", "Praise"];

  return (
    <div className="relative w-full sm:flex-1">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between gap-2 px-4 py-4 bg-gray-900/50 border border-gray-800 rounded-2xl 
                hover:border-gray-700 transition-all shadow-sm cursor-pointer focus:ring-2 focus:ring-violet-500/50 outline-none"
      >
        <span className="font-medium text-gray-100 text-sm md:text-base">
          {selected}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-gray-500 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 bottom-[calc(100%+8px)] sm:bottom-auto sm:top-[calc(100%+8px)] w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
          {options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                toggleDropdown();
                setSelected(opt);
              }}
              className={`block w-full text-left px-4 py-3 text-sm md:text-base transition-colors hover:bg-violet-500/10 ${
                idx == 0
                  ? "hover:rounded-t-lg"
                  : idx == options.length - 1
                  ? "hover:rounded-b-lg"
                  : ""
              } ${
                true ? "text-gray-100 font-bold bg-violet-500/5" : "text-gray-300 hover:text-white"
              } cursor-pointer`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
