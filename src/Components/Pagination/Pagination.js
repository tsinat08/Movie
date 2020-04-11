import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage: 1
        }

        this.handleClick=this.handleClick.bind(this)
    }
    handleCurrentPage(){

    }

    handlePages=(term) => {
        let page=[]
        for(let i=1; i<=(term); i++) {
            page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
        }
        return page
    }
    handleNext(page){
         page = parseInt(this.state.currentPage) + 1;
        console.log('next', typeof(page), page)
        return page;

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
        let page=e.target.value;
        this.setState({currentPage: page})
        this.props.chooseMoviesPage(page);
    }

    render() {
        return(
            this.props.moviesTotalPage || this.props.tvTotalPage ?
            <div className='paginations'>
                <ul className='pages' >
                    <button className='previous'>←Previous</button>
                    {this.handleAllPages()}
                    <button className='next' value={this.handleNext()} onClick={this.handleClick}>Next→</button>
                </ul>
            </div>:null
        )
    }
}

export default Pagination;
