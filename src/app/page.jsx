import HomeButtons from "@/components/HomeButtons";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Flow
        <span className="text-violet-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]">
          ly
        </span>
      </h1>
      <p className="text-gray-300 text-lg mb-8">
        Leave anonymous feedback easily
      </p>
      
      <HomeButtons />
    </div>
  );
}
