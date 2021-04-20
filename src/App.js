import "./App.css";
import React, { Component } from "react";
import { getMoviesByName, getMoviesByID } from "./Utils/API";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "batman",
      isLoading: false,
      error: null,
      showModal: false,
      selectedMovieId: null,
      selectedMovie: null,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}
