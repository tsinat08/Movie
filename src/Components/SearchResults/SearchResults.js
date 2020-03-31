import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component{
    render() {
        return(
            <div className="SearchResults">
                <h3>Search Results</h3>
                <li className="select">
                    <ul>Movies</ul>
                    <span>{this.props.moviesCount}</span>
                    <ul>TV Shows</ul>
                    <span>{this.props.tvCount}</span>
                </li>
            </div>
        )
    }
}

export default SearchResults;
