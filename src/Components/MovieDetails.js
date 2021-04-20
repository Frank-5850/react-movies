import React from "react";

const MovieDetails = ({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        margin: "15px",
      }}
    ></div>
  );
};

export default MovieDetails;
