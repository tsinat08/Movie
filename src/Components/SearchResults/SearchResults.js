import React from 'react';
import './SearchResults.css';
import MovieList from "../MovieList/MovieList";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    results=[{resultsType: 'Movies', resultsCount: this.props.moviesCount, id: 1},
        {resultsType: 'TV Shows', resultsCount: this.props.tvCount, id: 2}]

    handleResults(){

    }


    render() {
        return (
            !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length) ?
                <div className="SearchResults">
                    <h3>Search Results</h3>
                    {this.results.map((result) => {
                        return(
                        <ul className="select" key={result.id}>
                            <li onClick={this.handleResults}>{result.resultsType}</li>
                            <span>{result.resultsType === 'Movies' ? this.props.moviesCount : this.props.tvCount}</span>
                        </ul>
                    )})}
                </div> : null
        )
    }
}



export default SearchResults;
