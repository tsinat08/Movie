import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            term: 0,
            type:'',
        }
        this.handleClick=this.handleClick.bind(this)
    }


    handlePages=(term) => {
        let page=[]
        for(let i=1; i<=(term); i++) {
            page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
        }
        return page
    }

    handleAllPages(){
        let term
        console.log('type',this.state.type)
        if(this.state.type === "Movies"){
            term= this.props.moviesTotalPage;
        }else if (this.state.type === "TV Shows"){
            term=this.props.tvTotalPage;
        }
        return {term: this.handlePages(term), count: term};
    }

    handleNext=()=>{
        let page=parseInt(this.props.currentPage) + 1;
        this.setState({term:page})
        this.props.chooseMoviesPage(page);
    }

    handlePrevious=()=>{
            let page=parseInt(this.props.currentPage) - 1;
            this.setState({term:page})
            this.props.chooseMoviesPage(page);

    }
    handleClick(e){
        let page=e.target.value;
        this.setState({term:page})
        this.props.chooseMoviesPage(page);
    }

    render() {

        console.log(this.props)
        return(
            this.props.moviesTotalPage || this.props.tvTotalPage ?
            <div className='paginations'>
                <ul className='pages' >
                    {this.state.term > 1 ?
                    <button className='previous' onClick={this.handlePrevious}>←Previous</button> :null}
                    {this.handleAllPages().term}
                    {this.handleAllPages().count > this.state.term && this.handleAllPages().count !==1?
                    <button className='next' onClick={this.handleNext}>Next→</button>: null}
                </ul>
            </div>:null
        )
    }
}

export default Pagination;

/*
if(this.props.moviesTotalPage && this.props.tvTotalPage) {
            term = this.props.moviesTotalPage + this.props.tvTotalPage;
        }else
        if (this.props.moviesTotalPage && !this.props.tvTotalPage){
            term= this.props.moviesTotalPage;
        }else if (!this.props.moviesTotalPage && this.props.tvTotalPage){
            term=this.props.tvTotalPage;
        }
 */
