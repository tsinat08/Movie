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

    handleAllPages(){
        let term
        if(this.props.moviesTotalPage && this.props.tvTotalPage) {
            term = this.props.moviesTotalPage + this.props.tvTotalPage;
        }else if (this.props.moviesTotalPage && !this.props.tvTotalPage){
            term= this.props.moviesTotalPage;
        }else if (!this.props.moviesTotalPage && this.props.tvTotalPage){
            term=this.props.tvTotalPage;
        }
        return this.handlePages(term);
    }

    handleClick(e){
        const pages=e.target.value;
        this.props.chooseMoviesPage(pages);
    }

    render() {
        return(
            <div className='paginations'>
                <ul className='pages' >
                    <li className='previous'><a href=" ">←Previous</a></li>
                    {this.handleAllPages()}
                    <li className='next'><a href=" ">Next→</a></li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
