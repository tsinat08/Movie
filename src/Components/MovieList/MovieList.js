import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import noImage from '../Movie/noImage.png'

class MovieList extends React.Component{


    render() {

        return(
            <div className='MovieList'>

                {   this.props.movies && this.props.movies.length ?
                    this.props.movies.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='false'/>
                    }): null
                }
                {   this.props.tv && this.props.tv.length ?
                    this.props.tv.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='true'/>
                    }): null
                }

                {

                    !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length)?
                             <div className="movie">
                                <div className="image-container" >
                                    <img src={noImage}/>
                                </div>
                                <div className="movie-overview">
                                    <h3>No results found </h3>
                                </div>
                             </div>
                         : null
                }

            </div>
        )
    }
}

export default MovieList;