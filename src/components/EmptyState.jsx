export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <div className="text-5xl mb-6">💬</div>
      <h2 className="text-2xl font-semibold text-gray-100">No feedback yet</h2>
      <p className="text-gray-400 mt-2 max-w-md">
        Be the first to leave your thoughts and help improve the service.
      </p>
    </div>
  );
}
