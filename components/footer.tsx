import GridBackground from './ui/grid-background';

export function Footer() {
  return (
    <GridBackground className="min-h-[300px]">
      <footer className="border-t border-gray-800 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </GridBackground>
  );
}
