"use client"; // Ensure this is correctly spelled

import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLatestMovies = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const fetchMovies = async (query) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies(searchTerm);
  };

  useEffect(() => {
    fetchLatestMovies();
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-wide">Movie Explorer</h1>
        <p className="text-gray-500">Discover movies and explore their details</p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-2xl mx-auto"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies..."
          className="border p-3 w-full sm:w-2/3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-lg overflow-hidden shadow-lg bg-gray-300 h-64"
            />
          ))}
        </div>
      )}

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!loading && (searchTerm === '' ? latestMovies : movies).map((movie) => (
          <div
            key={movie.imdbID}
            className="group relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Lazy Loading Poster */}
            {movie.Poster !== "N/A" ? (
              <img
                className="w-full h-64 object-cover object-center transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                src={movie.Poster}
                alt={movie.Title}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-64 bg-gray-400 flex items-center justify-center text-gray-700">
                No Image Available
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Movie Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="font-bold text-lg truncate">{movie.Title}</h2>
              <p className="text-sm">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {!loading && movies.length === 0 && searchTerm && (
        <div className="text-center text-gray-500 mt-8">
          <p>No results found for "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
