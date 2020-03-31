import React from 'react';
import './SearchResults.css';

class SearchResults extends React.Component {
        results=[{resultsType: 'Movies', resultsCount: this.props.moviesCount, id: 1},
            {resultsType: 'TV Shows', resultsCount: this.props.tvCount, id: 2}]
    render() {
        return (
            !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length) ?
                <div className="SearchResults">
                    <h3>Search Results</h3>
                    {this.results.map((result) => {
                        return(
                        <li className="select" key={result.id}>
                            <ul>{result.resultsType}</ul>
                            <span>{result.resultsType === 'Movies' ? this.props.moviesCount : this.props.tvCount}</span>
                        </li>
                    )})}
                </div> : null
        )
    }
}



export default SearchResults;
