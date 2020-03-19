import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);

    }


    render() {
        return(
            <div className="search">
                     <input  placeholder="Search for movie or tv show" onChange={this.handleChange}/>
                     <button >SEARCH</button>
            </div>
        )
    }
}

export default Search;

