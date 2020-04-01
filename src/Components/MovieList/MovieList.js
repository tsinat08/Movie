import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import SearchResults from "../SearchResults/SearchResults";
import noImage from '../Movie/noImage.png'

class MovieList extends React.Component{
    render() {
        return(
            <div className='MovieList'>
                <div className='SearchResults_wrap'>
                    {console.log(this.props.movies)}
                    {this.props.movies.results || this.props.tv.results ?
                        <SearchResults moviesCount={this.props.movies.total_results} tvCount={this.props.tv.total_results}/> : null
                    }
                </div>
                <div className='Movie_wrap'>
                {   this.props.movies.results && this.props.movies.results.length ?
                    this.props.movies.results.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='false'/>
                    }): null
                }
                {   this.props.tv.results && this.props.tv.results.length ?
                    this.props.tv.results.map(movie=>{
                        return <Movie key={movie.id} results={movie} tv='true'/>
                    }): null
                }
                {
                    !this.props.loading && !(this.props.movies.results && this.props.movies.results.length) && !(this.props.tv.results && this.props.tv.results.length)?
                             <div className="no_movie">
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

            </div>

        )
    }
}

export default MovieList;