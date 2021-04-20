import React from "react";

const MovieCard = ({ title, type, posterUrl }) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        margin: "15px",
      }}
    >
      <img src={posterUrl} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{type}</p>
    </div>
  );
};

export default MovieCard;
