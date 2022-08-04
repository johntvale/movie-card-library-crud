import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import '../App.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.LoadingAndGettingMovies = this.LoadingAndGettingMovies.bind(this);

    this.state = {
      rendered: true,
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const prom = await getMovies();
    this.LoadingAndGettingMovies(prom);
  }

  LoadingAndGettingMovies(prom) {
    this.setState((prevState) => (
      { movies: [...prom],
        rendered: !prevState.rendered,
      }
    ));
  }

  render() {
    const { movies, rendered } = this.state;

    // Render Loading here if the request is still happening
    if (rendered) {
      return (<Loading />);
    }
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          {
            movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </div>
        <div className="movie-list-add-card-btn">
          <Link to="/movies/new">ADICIONAR FILME</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
