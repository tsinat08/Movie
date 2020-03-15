import React from 'react';
import './Movie.css';

const movie={
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    title:'Batman',
    overview: 'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman'
}
class Movie extends React.Component{
    render() {
        return(
            <div className="Movie">
                <div className="image-container">
                    <img src={movie.imageSrc} alt=''/>
                </div>
                <h2>{movie.title}</h2>
                <div className="movie-overview">
                    <h3>{movie.overview}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;