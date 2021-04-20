import React from "react";

const MovieCard = ({ title, type, posterUrl, year, movieSelection }) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        margin: "15px",
      }}
      onClick={movieSelection}
    >
      <img src={posterUrl} alt={`${title} poster`} />
      <h3>
        {title} ({year})
      </h3>
      <p>{type}</p>
    </div>
  );
};

export default MovieCard;
