import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      movie: {},
      rendered: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((response) => {
      this.setState({
        movie: response,
        rendered: false,
      });
    });
  }

  handleClick() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({
          backToMain: true,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, rendered, backToMain } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (rendered) {
      return (<Loading />);
    }
    return (
      <div data-testid="movie-details" className="movie-details-content">
        {backToMain && <Redirect to="/" />}
        <div className="movie-details-card">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <div className="movie-details-card-info">
            <p className="movie-details-card-title">{ title }</p>
            <p className="movie-details-card-info-item">{ `Subtitle: ${subtitle}` }</p>
            <p className="movie-details-card-info-item">{ `Storyline: ${storyline}` }</p>
            <p className="movie-details-card-info-item">{ `Genre: ${genre}` }</p>
            <p className="movie-details-card-info-item">{ `Rating: ${rating}` }</p>
          </div>
          <div className="movie-details-card-btn">
            <Link to="https://johntvale.github.io/movie-card-library-crud/">VOLTAR</Link>
            <Link to={ `https://johntvale.github.io/movie-card-library-crud/movies/${id}/edit` }>EDITAR</Link>
            <Link to="https://johntvale.github.io/movie-card-library-crud/" onClick={ this.handleClick }>DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

// Eu e Guilherme Rodrigues estudamos juntos e recebemos ajuda do Gabriel Lenz gabriellenz-projectMovieCardsCrud.

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
