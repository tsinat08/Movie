import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick=this.handleClick.bind(this)
    }
    handleCurrentPage(){

    }

    handlePages=(term) => {
        let page=[]
        console.log(page)
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
            this.props.moviesTotalPage || this.props.tvTotalPage ?
            <div className='paginations'>
                <ul className='pages' >
                    <li className='previous'>←Previous</li>
                    {this.handleAllPages()}
                    <li className='next'>Next→</li>
                </ul>
            </div>:null
        )
    }
}

export default Pagination;
