import React from 'react';
import './Movie.css';


class Movie extends React.Component{
    render() {
        const {results}=this.props;
        console.log(results);
        return(
            <div className="movie">
                <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${results.poster_path}`} alt=''/>
                </div>
                <div className="movie-overview">
                    <h2>{results.title}</h2>
                    <h3>{results.overview}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;