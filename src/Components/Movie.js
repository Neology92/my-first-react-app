import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviePoster } from 'Elements';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
	<Link to={`/${movie.id}`}>
		<MoviePoster
			src={`${POSTER_PATH}${movie.poster_path}`}
			alt={movie.title}
		/>
	</Link>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;
