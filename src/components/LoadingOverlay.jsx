"use client";

export default function LoadingOverlay({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gray-950/80 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mb-4"></div>

      <p className="text-gray-200 text-lg font-medium">{message}</p>
    </div>
  );
}
