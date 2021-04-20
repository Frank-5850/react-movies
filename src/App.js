import "./App.css";
import React, { Component } from "react";
import { getMoviesByName, getMoviesByID } from "./Utils/API";
import MovieCard from "./Components/MovieCard";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieCard
          title="batman"
          type="movie"
          posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
        />
      </div>
    );
  }
}
