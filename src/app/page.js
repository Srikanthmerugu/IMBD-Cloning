"use client"; // Ensure this is correctly spelled
import Head from 'next/head';

import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [latestMovies, setLatestMovies] = useState([]);

  // Fetch latest movies
  const fetchLatestMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=Batman&apikey=c3cb5693`);
      const data = await response.json();
      if (data && data.Response === "True") {
        setLatestMovies(data.Search);
      } else {
        console.error("No valid data found for latest movies");
      }
    } catch (error) {
      console.error("Error fetching latest movies:", error);
    }
  };

  // Fetch movies based on search term
  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=c3cb5693`);
      const data = await response.json();
      if (data && data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        console.error("No valid data found for search term");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies(searchTerm);
  };

  // Fetch latest movies on component mount
  useEffect(() => {
    fetchLatestMovies();
  }, []);

  return (
    <div className=' dark:bg-gray-600'>
       <Head>
        {/* Add the Font Awesome CDN link */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
    <div className="container mx-auto p-4 min-h-screen  dark:bg-gray-600">
      {/* Header */}
      <div className="flex  flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
  {/* Logo */}
  <h1 className="text-3xl md:text-4xl font-bold  tracking-wide text-center md:text-left">
    Movie Explorer
  </h1>

  {/* Search Bar */}
  <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row md:space-x-2 w-full md:w-auto">
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search for movies..."
      className="border p-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded-b-lg md:rounded-r-lg md:rounded-b-none hover:bg-blue-600 transition-colors duration-300 w-full md:w-auto"
    >
      Search
    </button>
  </form>
</div>


      {/* Movie Grid */}
      <div className="grid  dark:bg-gray-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {(searchTerm === '' ? latestMovies : movies).map((movie) => (
          <div
            key={movie.imdbID}
            className="group relative max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Movie Poster */}
            {movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-90"
              />
            ) : (
              <div className="w-full h-64 bg-gray-400 flex items-center justify-center text-gray-700">
                No Image Available
              </div>
            )}

            {/* Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Movie Title */}
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="text-lg font-bold truncate">{movie.Title}</h2>
              <p className="text-sm">{movie.Year}</p>
            </div>

            {/* Hidden on hover for more info */}
            <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500">
              <p className="text-sm font-light">{movie.Plot || 'No plot available'}</p>
              <div className="mt-4">
                <span className="bg-blue-500 px-3 py-1 rounded-full text-sm mr-2">{movie.Year}</span>
                {movie.Genre && (
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm">{movie.Genre}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {!movies.length && searchTerm && (
        <div className="text-center mt-8 text-gray-500">
          <p>No results found for "{searchTerm}". Try another search term.</p>
        </div>
      )}



    </div>

    <Footer />
    </div>
  );
};

export default Movies;
