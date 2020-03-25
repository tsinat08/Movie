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

    render() {
        const {results}=this.props;
        console.log(this.props)
        if (results === null){
            console.log("at render")
            this.handleResult();
        }
        return(
            <div className="movie">
                <div className="image-container" >
                    <img src={this.handleImage()}
                         alt={`${this.props.results.title}`}/>
                </div>
                <div className="movie-overview">
                    <h2>{this.props.tv === 'true' ? this.props.results.name : this.props.results.title} </h2>
                    <h3>{this.handleOverview()}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;