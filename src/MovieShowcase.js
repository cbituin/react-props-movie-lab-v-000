import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
<<<<<<< HEAD
    return movieData.map((movie, ind) => {
      <MovieCard key={ind} {...movie} />;
    });
  };
  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
=======
<<<<<<< HEAD
    movieData.forEach(movie => {
      title = movie.title,
      IMDBRating = movie.IMDBRating,
      genres = movie.genres,
      poster = movie.poster
    })
=======
    const movieInfo = movieData.map((movie) =>
    title = movie.title,
    IMDBRating = movie.IMDBRating,
    genres = movie.genres,
    poster = movie.poster
  )
  }
>>>>>>> fe8f2b8fcbd11ae86a24cc0e0c11ec9488102e0f

  render(){
    return (<div id="movie-showcase">{this.generateMovieCards()}</div>;)
>>>>>>> e8935347cfc5bf7f0ca44f311b8802af69edd7f8
  }
}
