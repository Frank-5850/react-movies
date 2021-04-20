import "./App.css";
import React, { Component } from "react";
import { getMoviesByName, getMoviesByID } from "./Utils/API";
import MovieCard from "./Components/MovieCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "batman",
      isLoading: false,
      movies: [],
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const movieSearch = await getMoviesByName(this.state.search);
      this.setState({
        movies: movieSearch,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: error,
        movies: [],
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movies) => (
          <MovieCard
            title={movies.Title}
            type={movies.Type}
            posterUrl={movies.Poster}
          />
        ))}
      </div>
    );
  }
}
