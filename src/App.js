import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Search from '../src/Components/Search/Search';
import MovieList from "./Components/MovieList/MovieList";
import SearchResults from '../src/Components/SearchResults/SearchResults';
import Pagination from "./Components/Pagination/Pagination";
import {Movies, TV} from './util/movies';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: '',
            pageMovie: 1,
            pageTV:1,
            movies:[],
            tv:[],
            loading: true,
            tvTotalPage: '',
            moviesTotalPage: '',
            moviesCount: 0,
            tvCount: 0,
            resultsType: 'Movies'
        }
        this.searchDatabase=this.searchDatabase.bind(this);
        this.chooseMoviesPage=this.chooseMoviesPage.bind(this);
        this.chooseResultType=this.chooseResultType.bind(this);
    }

    searchDatabase(term, page, newType) {
        if(newType === "Movies") {
            this.getMovies(term, page)
        }else if(newType === "TV"){
            this.getTV(term,page)
        }else{
            this.getMovies(term, page);
            this.getTV(term, page);
        }
    }
    getMovies(term, page){
        Movies.search(term, page).then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        movies: data,
                        moviesTotalPage: data.total_pages,
                        loading: false,
                        moviesCount: data.total_results,
                        term: term
                    });
                }
                ;
            });
    }
    getTV(term, page){
        TV.search(term, page).then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        tv: data,
                        tvTotalPage: data.total_pages,
                        loading: false,
                        tvCount: data.total_results,
                        term: term
                    });
                }
            });
    }
    chooseMoviesPage(newPage, newType){
        if(newType === "Movies") {
            this.setState({
                pageMovie: newPage
            })
        }else if (newType === "TV Shows"){
            this.setState({
                pageTV: newPage
            })
        }
        this.searchDatabase(this.state.term, newPage, newType);

    }

    chooseResultType(type){
        this.setState({resultsType: type})
            }

    render() {
        return (
            <div className="App">
                <div className="headers">
                    <Header/>
                    <Search searchDatabase={this.searchDatabase}/>
                </div>
                <div className='list'>
                    <SearchResults moviesCount={this.state.moviesCount} tvCount={this.state.tvCount}
                                   loading={this.state.loading} chooseResultType={this.chooseResultType}
                                   currentPage={this.state.page}/>
                    <MovieList movies={this.state.movies} tv={this.state.tv} resultType={this.state.resultsType}
                               loading={this.state.loading}/>
                </div>
                <div className='pagination'>
                    <Pagination currentPageMovie={this.state.pageMovie} currentPageTV={this.state.pageTV} moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviesPage} tvTotalPage={this.state.tvTotalPage} resultsType={this.state.resultsType}/>
                </div>
            </div>
        );
    }
}

export default App;
/*
currentPageMovie={this.state.pageMovie}
                                   currentPageTV={this.state.pageTV} moviesTotalPage={this.state.moviesTotalPage}
                                   chooseMoviesPage={this.chooseMoviesPage} tvTotalPage={this.state.tvTotalPage}
                                   resultsType={this.state.resultsType}
 */