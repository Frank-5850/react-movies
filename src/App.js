import "./App.css";
import React, { Component } from "react";
import { getMoviesByName, getMoviesByID } from "./Utils/API";
import MovieContainer from "./Components/MovieContainer";
import MovieDetailModal from "./Components/MovieDetailModal";
import MovieDetails from "./Components/MovieDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "batman",
      isLoading: false,
      movies: [],
      error: null,
      movieID: null,
      movieDetails: null,
      isModalActive: false,
    };
    this.getMovieID = this.getMovieID.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
        this.setState({
          movieDetails: newMovieDetails,
          isModalActive: true,
        });
        // console.log(this.state.movieDetails);
      } catch (error) {
        this.setState({
          error,
          isModalActive: false,
        });
      }
    }
  }

  getMovieID(id) {
    this.setState({
      movieID: id,
    });
  }

  toggleModal(toggle) {
    this.setState({
      isModalActive: toggle,
    });
  }

  render() {
    const { movieDetails } = this.state;
    console.log(movieDetails);
    return (
      <div className="App">
        {this.state.isModalActive ? (
          <MovieDetailModal onClose={() => this.toggleModal(false)}>
            <MovieDetails
              posterUrl={movieDetails.Poster}
              title={movieDetails.Title}
              rated={movieDetails.Rated}
              runtime={movieDetails.Runtime}
              genre={movieDetails.Genre}
              plot={movieDetails.Plot}
              actors={movieDetails.Actors}
              rating={movieDetails.Ratings[1].value}
            />
          </MovieDetailModal>
        ) : (
          <MovieContainer
            movies={this.state.movies}
            movieClicked={this.getMovieID}
          />
        )}
      </div>
    );
  }
}
