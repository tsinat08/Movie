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
            let a = i+1;
            page.push(<li className='current' key={a} value={a} onClick={this.handleClick}>{a}</li>)
        }
        return page
    }

    handleClick(e){
        const pages=e.target.value;
        this.props.chooseMoviesPage(pages);
        //console.log('e', pages)
    }
    render() {
        console.log(this.props)
        return(
            <div className='paginations'>
                <ul className='pages' >
                    <li className='previous'><a href="#">←Previous</a></li>
                    {this.handlePages(this.props.moviesTotalPage)}
                    <li className='next'><a href="#">Next→</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
