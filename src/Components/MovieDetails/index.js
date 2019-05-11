import React, {PureComponent} from 'react';
import { MovieWrapper, MovieInfo } from './style';
import Poster from '../MoviePoster/style'
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetails extends PureComponent{

  state =  {
    movie: {},
  }


  async componentDidMount(){
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=cae93ba737f076edbfeab569825c5d18&language=en-US`);
      const movie = await res.json();

      this.setState({
        movie,
      })

    } catch(e) {
      console.log(e);
    }
  }

    render(){

        const { movie } = this.state;

        return(
            <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
              <MovieInfo>
                <Overdrive id={movie.id}>
                  <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt=""/>
                </Overdrive>  
                <div>
                  <h1>{movie.title}</h1>
                  <h3>{movie.release_date}</h3>
                  <p>{movie.overview}</p>
                </div>
              </MovieInfo>
            </MovieWrapper>
        )
    }

}

export default MovieDetails;