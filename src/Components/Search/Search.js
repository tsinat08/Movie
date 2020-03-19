import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);

    }

    handleTermChange(event){
        this.setState({term: event.target.value})
    }

    handleSearch(event){
        this.props.searchDatabase(this.state.term);
        event.preventDefault();
    }

    render() {
        return(
            <div className="search">
                     <input  placeholder="Search for movie or tv show" onChange={this.handleTermChange}/>
                     <button onClick={this.handleSearch}>SEARCH</button>
            </div>
        )
    }
}

export default Search;

