import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';
import noImage from '../Movie/noImage.png'

class MovieList extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div className='MovieList'>
                <div className='Movie_wrap'>
                    {   !this.props.loading  && this.props.movies.results  && this.props.resultType ==='Movies' ?
                        this.props.movies.results.map(movie=>{
                            return <Movie key={movie.id} results={movie} tv='false'/>
                        }): null
                    }
                    {   !this.props.loading  && this.props.tv.results  && this.props.resultType === 'TV Shows'  ?
                        this.props.tv.results.map(movie=>{
                            return <Movie key={movie.id} results={movie} tv='true'/>
                        }): null
                    }

                </div>
            </div>
        )
    }
}

export default MovieList;

/*&& this.props.movies.results.length
&& this.props.tv.results.length

*/