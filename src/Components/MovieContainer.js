import React from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movies, movieClicked }) => {
  return (
    <div>
      {movies.map((movies) => (
        <MovieCard
          key={movies.imdbID}
          title={movies.Title}
          type={movies.Type}
          posterUrl={movies.Poster}
          year={movies.Year}
          movieSelection={() => movieClicked(movies.imdbID)}
        />
      ))}
    </div>
  );
};

export default MovieContainer;
