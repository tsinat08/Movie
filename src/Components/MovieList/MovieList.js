import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

class MovieList extends React.Component{
    render() {
        return(
            <div className='MovieList'>
                <Movie/>
            </div>
        )
    }
}

export default MovieList;