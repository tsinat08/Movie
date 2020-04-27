import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick=this.handleClick.bind(this)
    }

    results=[{resultsType: 'Movies', resultsCount: this.props.moviesCount, id: 1},
        {resultsType: 'TV Shows', resultsCount: this.props.tvCount, id: 2}]

    handleClick(e) {
        let type= e.target.getAttribute('value');

        this.props.chooseResultType(type);
    }

    render() {
        return (
            !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length) ?
                <div className="SearchResults">
                    <h3>Search Results</h3>
                    {this.results.map((result) => {
                        return(
                        <ul className="select" key={result.id} onClick={this.handleClick} value={result.resultsType} >
                            <li>{result.resultsType}</li>
                            <span>{result.resultsType === 'Movies' ? this.props.moviesCount : this.props.tvCount}</span>
                        </ul>
                    )})}
                </div>: null
        )
    }
}



export default SearchResults;
