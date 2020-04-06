import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }

    handlePages=(term) => {
        let page=[]
        for(let i=0; i<(term); i++) {
            page.push(<li className='current' key={i+1}><a href="#">{i+1}</a></li>)
        }
        return page
    }

    handleClick(e){
        const pages=e.target.value;
        this.props.moviesPage(pages);
    }
    render() {
        return(
            <div className='paginations'>
                <ul className='pages' onClick={this.handleClick}>
                    <li className='previous'><a href="#">←Previous</a></li>
                    {this.handlePages(this.props.moviesPage)}
                    <li className='next'><a href="#">Next→</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
