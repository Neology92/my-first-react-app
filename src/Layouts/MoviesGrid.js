import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Movie } from 'Components';

export default class MoviesGrid extends PureComponent {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				'https://api.themoviedb.org/3/discover/movie?api_key=cae93ba737f076edbfeab569825c5d18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
			);
			const movies = await res.json();

			this.setState({
				movies: movies.results,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<MoviesGridWrapper>
				{this.state.movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MoviesGridWrapper>
		);
	}
}

const MoviesGridWrapper = styled.div`
	margin: 20px;

	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 30px;

	@media (max-width: 930px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 736px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 562px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 388px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
