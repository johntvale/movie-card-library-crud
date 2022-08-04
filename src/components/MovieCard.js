import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-img" />
        <h2 className="movie-card-title">{title}</h2>
        <div className="movie-card-info">
          <p>{storyline}</p>
        </div>
        <div className="movie-card-details-btn">
          <Link to={ `/movie-card-library-crud/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

export default MovieCard;
