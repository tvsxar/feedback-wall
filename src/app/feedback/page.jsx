import FeedbacksList from "@/components/FeedbacksList";

export default function FeedbacksPage() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight 
      bg-linear-to-b from-white via-gray-300 to-gray-400
      bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        >
          Read what people think about the service
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Honest feedback from the community
        </p>
      </div>

      <div className="flex flex-col items-center">
        <FeedbacksList />
      </div>
    </div>
  );
}
