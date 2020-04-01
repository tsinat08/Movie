import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    current='current'
    render() {
        return(
            <div className='paginations'>
                <ul className='pages'>
                    <li className='previous'><a href="#">←Previous</a></li>
                    <li><a className={this.current} href="#">1</a></li>
                    <li><a className={this.current} href="#">2</a></li>
                    <li><a className={this.current} href="#">3</a></li>
                    <li><a className={this.current} href="#">4</a></li>
                    <li><a className={this.current} href="#">5</a></li>
                    <li classname='next'><a href="#">Next→</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
