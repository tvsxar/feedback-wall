"use client";

export default function ErrorOverlay({ message, onRetry }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gray-900/95 text-center p-4">
      <h2 className="text-2xl md:text-4xl font-bold text-red-400 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-300 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
