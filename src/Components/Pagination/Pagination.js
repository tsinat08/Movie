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
        if(term < 12) {
            for (let i = 1; i <= (term); i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
        }else if(this.state.term < 8 && term >=12){
            for (let i = 1; i <= (8); i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
            page.push(<li key={0}>...</li>);
            for (let i = term -1; i <=term; i++){
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
        } else if(this.state.term >=8 && term <= 12){
            for (let i = 1; i <= 2; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
            page.push(<li key={term+1}>...</li>);
            for (let i = term-8; i <= term; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
        }else if(this.state.term >= 8 && term-this.state.term > 4){
            for (let i = 1; i <= 2; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
            page.push(<li key={0}>...</li>);
            for (let i = (this.state.term-3); i <= (this.state.term+3); i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
            page.push(<li key={term+1}>...</li>);
            for (let i = term-1; i <= term; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
        }else if(this.state.term >= 8 && term-this.state.term <= 4){
            for (let i = 1; i <= 2; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
            page.push(<li key={0}>...</li>);
            for (let i = term-6; i <= term; i++) {
                page.push(<button className='current' key={i} value={i} onClick={this.handleClick}>{i}</button>)
            }
        }
        return page
    }

    handleAllPages(){
        let term
        if(this.props.resultsType === "Movies"){
            term= this.props.moviesTotalPage;
        }else if (this.props.resultsType === "TV Shows"){
            term=this.props.tvTotalPage;
        }
        term=12;
        return {term: this.handlePages(term), count: term};
    }

    handleNext=()=>{
        let page=this.props.resultsType === "Movies" ? parseInt(this.props.currentPageMovie) + 1 : parseInt(this.props.currentPageTV) + 1;
        this.setState({term:page})
        this.props.chooseMoviesPage(page, this.props.resultsType);
    }
    handlePrevious=()=>{
        let page=this.props.resultsType === "Movies" ? parseInt(this.props.currentPageMovie) - 1 : parseInt(this.props.currentPageTV) - 1;
            this.setState({term:page})
            this.props.chooseMoviesPage(page, this.props.resultsType);
    }
    handleClick(e){
        let page=parseInt(e.target.value);
        this.setState({term:page})
        this.props.chooseMoviesPage(page, this.props.resultsType);
    }
    componentDidUpdate(prevProps) {
        console.log('term', this.state.term);
        if((prevProps.resultsType !== this.props.resultsType) && this.state.term !== 1) this.setState({term: 1})
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
