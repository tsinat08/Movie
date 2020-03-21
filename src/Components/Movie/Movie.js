import React from 'react';
import './Movie.css';


class Movie extends React.Component{
    render() {
        const {movie}=this.props;
        return(
            <div className="movie">
                <div className="image-container">
                    <img src={movie.imageSrc} alt=''/>
                </div>
                <div className="movie-overview">
                    <h2>{movie.title}</h2>
                    <h3>{movie.overview}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;