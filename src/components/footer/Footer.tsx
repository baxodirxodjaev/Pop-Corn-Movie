

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* About API Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">About the Movie API</h2>
          <p className="text-sm text-gray-400">
            This website uses data from the <a href="https://www.themoviedb.org/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">TMDB API</a> to fetch movie details like title, poster, ratings, and plot. TMDB (Open Movie Database) is a free API to get movie and TV series data from various sources including IMDb.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github w-6 h-6 text-gray-400 hover:text-white">
          </i>
           
          </a>
          <a href="https://www.linkedin.com/in/bakhadir-khojaev-012823215" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin w-6 h-6 text-gray-400 hover:text-white"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">&copy; 2025 Have a fun with PopCorn. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer