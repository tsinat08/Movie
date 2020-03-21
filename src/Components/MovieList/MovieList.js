import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

class MovieList extends React.Component{
    render() {
        return(
            <div className='MovieList'>
                {
                    this.props.movies.map(movie=>{
                        return <Movie movie={movie}/>
                    })
                }
            </div>
        )
    }
}

export default MovieList;