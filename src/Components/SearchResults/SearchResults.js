import React from 'react';
import './SearchResults.css';



class SearchResults extends React.Component {
    results = [{resultsType: 'Movies', resultsCount: this.props.moviesCount, id: 1},
        {resultsType: 'TV Shows', resultsCount: this.props.tvCount, id: 2}]

    // handleType(){
    //     this.state.map(type=>{
    //         return(this.state.resultsType)
    //  })}
    // handleCount(){
    //     this.state.map(counts=> {
    //            return (this.state.resultsCount)
    // })}
    render() {
        return (
            !this.props.loading && !(this.props.movies && this.props.movies.length) && !(this.props.tv && this.props.tv.length) ?
                <div className="SearchResults">
                    <h3>Search Results</h3>
                    {Object.keys(this.results).map((type) => {
                        return(
                        <li className="select">
                            <ul>{this.results[type].resultsType}</ul>
                            <span>{this.results[type].resultsCount}</span>
                            {/*<ul>TV Shows</ul>*/}
                            {/*<span>{this.props.tvCount}</span>*/}
                        </li>
                    )})}
                </div> : null
        )
    }
}



export default SearchResults;
