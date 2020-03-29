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

    handleResult(){
        if (this.state.results === ""){
            console.log('1res')
            return 'There are no movies that matched your query'
        }else{
            console.log('2res')
            return this.state.results;
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
       return ((this.props.results.vote_average * 10) + "%");


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
                        <div className="bar"
                             style={{width: this.handleRating()}}>{`${this.handleRating()} Viewers Rating`}</div>
                        <a>{this.props.tv === 'true' ? this.props.results.name : this.props.results.title} </a>
                        <span>{this.handleDate()} </span>
                    </div>
                    <p>{this.handleOverview()}</p>
                </div>
            </div>
        );
    }
}

export default Movie;