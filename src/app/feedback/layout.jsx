import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export default function FeedbackLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />

      <main className="p-8 flex-1">{children}</main>

      <Footer />
    </div>
  );
}
