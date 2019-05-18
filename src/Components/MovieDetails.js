import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { fontColor } from 'Utils';
import { MoviePoster } from 'Elements';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetails extends PureComponent {
	state = {
		movie: {},
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${
					this.props.match.params.id
				}?api_key=cae93ba737f076edbfeab569825c5d18&language=en-US`
			);
			const movie = await res.json();

			this.setState({
				movie,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movie } = this.state;

		return (
			<MovieWrapper
				backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
			>
				<MovieInfo>
					<MoviePoster
						src={`${POSTER_PATH}${movie.poster_path}`}
						alt=''
					/>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

const MovieWrapper = styled.div`
	padding-top: 50vh;
	margin-bottom: 20vh;
	position: relative;
	background: url(${props => props.backdrop}) no-repeat;
	background-size: cover;
	background-position-x: center;

	@media (max-width: 545px) {
		padding: 0;
		margin-top: 10vh;
		background: transparent;
	}
`;

const MovieInfo = styled.div`
	position: absolute;
	text-align: left;
	color: ${fontColor};
	padding: 2rem 10%;
	display: flex;

	> div {
		margin-left: 20px;
	}

	> img {
		margin-top: -5rem;
	}

	@media (max-width: 545px) {
		position: static;
		flex-direction: column;
		text-align: center;
		> img {
			margin-top: 0.2rem;
			align-self: center;
		}
	}
`;
export default MovieDetails;
