import React, {PureComponent} from 'react';
import Movie from '../MoviePoster';
import MoviesGrid from './style.js';


export default class MoviesList extends PureComponent{

  state = {
    movies: []
  }

  async componentDidMount(){
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cae93ba737f076edbfeab569825c5d18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState({
        movies: movies.results
      })

    } catch(e) {
      console.log(e);
    }
  }

    render(){
        return(
            <MoviesGrid>
                {this.state.movies.map( movie => <Movie key={movie.id} movie={movie}/> )}
            </MoviesGrid>
        )
    }

}