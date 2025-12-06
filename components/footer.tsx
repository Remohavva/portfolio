export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 bg-black/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
