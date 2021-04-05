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
        let type= e.target.getAttribute('value'),
            divs= document.querySelectorAll('.select');
        divs.forEach(div=>{
            if (div.classList.contains('selected')) div.classList.remove('selected')
        })
        e.target.classList.add('selected');
        if((type ==='Movies' && this.props.moviesCount > 0) || (type==='TV Shows' && this.props.tvCount > 0)){
            this.props.chooseResultType(type);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.moviesCount === 0 && prevProps.moviesCount !== this.props.moviesCount){
            this.props.chooseResultType('TV Shows')
        }
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
