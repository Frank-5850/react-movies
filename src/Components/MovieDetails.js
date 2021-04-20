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
    >
      <img src={posterUrl} alt="" />
      <p>{title}</p>
      <p>{rated}</p>
      <p>{runtime}</p>
      <p>{genre}</p>
      <p>{plot}</p>
      <p>{actors}</p>
      <p>{rating}</p>
    </div>
  );
};

export default MovieDetails;
