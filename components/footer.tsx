export function Footer() {
  return (
    <footer className="border-t border-sky-200 mt-20 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sky-800">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-sky-700 hover:text-sky-900 transition-colors font-medium">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-sky-700 hover:text-sky-900 transition-colors font-medium">
              LinkedIn
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-sky-700 hover:text-sky-900 transition-colors font-medium">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
