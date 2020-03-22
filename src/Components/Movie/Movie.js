import React from 'react';
import './Movie.css';
import noImage from './no image.png'


class Movie extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imageSrc:this.props.results.poster_path

        }
        this.handleImage=this.handleImage.bind(this);
    }

    handleImage(src){
            if (this.state.imageSrc === null) {
                return noImage
            }else {
                return (`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.results.poster_path}`)
            }
    }
    render() {
        const {results}=this.props;
        return(
            <div className="movie">
                <div className="image-container">
                    <img src={this.handleImage()}
                         alt={`${results.title}`}/>
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