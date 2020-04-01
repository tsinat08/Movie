import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
            sortBy: 'movies'
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);

        this.sortBy={
            'Movies': 'movie',
            'TV Shows': 'tvShows'
        };
    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }

    handleSearch(){
        this.props.searchDatabase(this.state.term);

    }
    handleKey = (e) => {
        if(e.which === 13) {
            this.handleSearch();
            e.preventDefault();
        }
    }


    render() {
        return(
            <div className='search'>
                <div className='sortBy'>

                </div>
                <div className="search_fields">
                         <input onKeyPress={this.handleKey} placeholder="Search for movie or tv show" onChange={this.handleTermChange}/>
                         <button onClick={this.handleSearch} >SEARCH</button>
                </div>
            </div>
        )
    }
}

export default Search;

