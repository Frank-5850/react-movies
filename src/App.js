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
        <MovieCard
          title="batman"
          type="movie"
          posterUrl="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"
        />
      </div>
    );
  }
}
