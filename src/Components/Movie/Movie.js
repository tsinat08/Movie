import React from 'react';
import './Movie.css';
import noImage from './noImage.png'
import moment from 'moment'


class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imageSrc:this.props.results.poster_path,
            overview:this.props.results.overview
        }
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
    handleDate() {
        return this.props.results.release_date ? moment(this.props.results.release_date).format("LL"): null
    }
    handleRating(){
        return (this.props.results.vote_average).toFixed(1) * 10 + "%"
    }
    handleLeftRating(){
        return (10-this.props.results.vote_average).toFixed(1) * 10 + "%"
    }
    render() {
        return (
            <div className="movie">
                <div className="image-container">
                    <img src={this.handleImage()}
                         alt={`${this.props.results.title}`}/>
                </div>
                <div className="details">
                    <div className='title'>
                        <div className="bar" style={{width: this.handleRating()}}>
                            {this.props.results.vote_average > 0 ? `${this.handleRating()} Viewers Rating` : null}
                        </div>
                        <div className="bar-minus" style={{width: this.handleLeftRating()}}>{}</div>
                        <h6>{this.props.tv === 'true' ? this.props.results.name : this.props.results.title} </h6>
                        <span>{this.handleDate()} </span>
                    </div>
                    <p>{this.handleOverview()}</p>
                </div>
            </div>
        );
    }
}

export default Movie;