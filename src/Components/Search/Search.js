import React from 'react';
import './Search.css';

class Search extends React.Component{
    constructor(props){
        super(props);

    }


    render() {
        return(
            <div className="Search">
                <div className="input">
                     <input  placeholder="Search for movie or tv show" onChange={this.handleChange}/>
                </div>
                <div className="SearchButton">
                       <button >SEARCH</button>
                </div>
            </div>
        )
    }
}

export default Search;

