export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-200/30 py-8 px-6 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg text-gray-200 tracking-wide">
            Flow
            <span className="text-violet-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]">
              ly
            </span>
          </h3>

          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/tvsxar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/poiatsyka/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition hover:drop-shadow-[0_0_4px_rgba(168,85,247,0.7)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
