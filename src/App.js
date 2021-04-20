import "./App.css";
import React, { Component } from "react";
import { getMoviesByName, getMoviesByID } from "./Utils/API";
import MovieCard from "./Components/MovieCard";
import MovieContainer from "./Components/MovieContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "batman",
      isLoading: false,
      movies: [],
      error: null,
      movieID: null,
    };
    this.getMovieID = this.getMovieID.bind(this);
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

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.movieID !== this.state.movieID) {
      try {
        const newMovieDetails = await getMoviesByID(this.state.movieID);
        console.log(newMovieDetails);
      } catch (error) {
        this.setState({
          error,
        });
      }
    }
  }

  getMovieID(id) {
    this.setState({
      movieID: id,
    });
  }

  render() {
    return (
      <div className="App">
        <MovieContainer
          movies={this.state.movies}
          movieClicked={this.getMovieID}
        />
      </div>
    );
  }
}
