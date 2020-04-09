import React from 'react';
import './SearchResults.css';


class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.handleResults=this.handleResults.bind(this)
    }
    results=[{resultsType: 'Movies', resultsCount: this.props.moviesCount, id: 1},
        {resultsType: 'TV Shows', resultsCount: this.props.tvCount, id: 2}]

    handleResults(){
        if(this.results === 'Movie') {
        }else {
            }
        }


    render() {
        return (
                 <div className="SearchResults">
                    <h3>Search Results</h3>
                    {this.results.map((result) => {
                        return(
                        <ul className="select" key={result.id}>
                            <li >{result.resultsType}</li>
                            <span>{result.resultsType === 'Movies' ? this.props.moviesCount : this.props.tvCount}</span>
                        </ul>
                    )})}
                </div>
        )
    }
}



export default SearchResults;
