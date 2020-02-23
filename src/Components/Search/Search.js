import React from 'react';
import './Search.css';

class Search extends React.Component{
    render() {
        return(
            <div className="Search">
                <input placeholder="Search for movie or tv show" />
            </div>
        )
    }
}

export default Search;