import React from 'react';
import './Movie.css';
import noImage from './no image.png'


class Movie extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imageSrc:this.props.results.poster_path,
            overview:this.props.results.overview

        }
        this.handleImage=this.handleImage.bind(this);
    }

    handleImage(){
            if (this.state.imageSrc === null) {
                return noImage
            }else {
                return (`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.results.poster_path}`)
            }
    }

    handleOverview(){
        if(this.state.overview === ""){
            return 'We do not have an overview for this movie'
        }else{
            return this.state.overview;
        }
    }
    render() {
        return(
            <div className="movie">
                <div className="image-container">
                    <img src={this.handleImage()}
                         alt={`${this.props.results.title}`}/>
                </div>
                <div className="movie-overview">
                    <h2>{this.props.results.title}</h2>
                    <h3>{this.handleOverview()}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;