import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component{
    render() {
        return(
            !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length)?
                <div className="SearchResults">
                <h3>Search Results</h3>
                <li className="select">
                    <ul>Movies</ul>
                    <span>{this.props.moviesCount}</span>
                    <ul>TV Shows</ul>
                    <span>{this.props.tvCount}</span>
                </li>
            </div> : null
        )
    }
}

export default SearchResults;
