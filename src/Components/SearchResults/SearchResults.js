import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component{
    render() {
        return(
            <div className="SearchResults">
                <h3>Search Results</h3>
                <li className="select">
                    <ul>Movies</ul>
                    <span>0</span>
                </li>
            </div>
        )
    }
}

export default SearchResults;
