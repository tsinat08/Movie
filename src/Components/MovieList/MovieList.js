import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

class MovieList extends React.Component{
    render() {

        return(
            <div className='MovieList'>

                {   this.props.movies && this.props.movies.length ?
                    this.props.movies.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='false'/>
                    }): null
                }
                {   this.props.tv && this.props.tv.length ?
                    this.props.tv.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='true'/>
                    }): null
                }

            </div>
        )
    }
}

export default MovieList;