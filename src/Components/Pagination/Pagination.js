import React from 'react';
import './Pagination.css';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            term: 1,
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
        if(this.props.resultType === "Movies"){
            term= this.props.moviesTotalPage;
        }else if (this.props.resultType === "TV Shows"){
            term=this.props.tvTotalPage;
        }
        return {term: this.handlePages(term), count: term};
    }

    handleNext=()=>{
        let page=this.props.resultType === "Movies" ? parseInt(this.props.currentPageMovie) + 1 : parseInt(this.props.currentPageTV) + 1;
        this.setState({term:page})
        this.props.chooseMoviesPage(page, this.props.resultType);
    }
    handlePrevious=()=>{
        let page=this.props.resultType === "Movies" ? parseInt(this.props.currentPageMovie) - 1 : parseInt(this.props.currentPageTV) - 1;
            this.setState({term:page})
            this.props.chooseMoviesPage(page, this.props.resultType);
    }
    handleClick(e){
        let page=parseInt(e.target.value);
        this.setState({term:page})
        this.props.chooseMoviesPage(page, this.props.resultType);
    }
    componentDidUpdate(prevProps) {
        if(prevProps.resultsType !== this.props.resultType && this.state.term !== 1) this.setState({term: 1})
    }


    render() {

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
