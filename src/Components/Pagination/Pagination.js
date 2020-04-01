import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    render() {
        return(
            <div className='paginations'>
                <ul className='pages'>
                    <li><a href="#">Previous</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">Next</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
