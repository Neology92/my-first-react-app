import React from 'react';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import { MoviePoster } from 'Elements';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
	<Link to={`/${movie.id}`}>
		<Overdrive id={movie.id}>
			<MoviePoster
				src={`${POSTER_PATH}${movie.poster_path}`}
				alt={movie.title}
			/>
		</Overdrive>
	</Link>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;
