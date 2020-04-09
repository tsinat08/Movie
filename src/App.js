import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Search from '../src/Components/Search/Search';
import MovieList from "./Components/MovieList/MovieList";
import SearchResults from '../src/Components/SearchResults/SearchResults';
import Pagination from "./Components/Pagination/Pagination";
import {Movies} from './util/movies';
import {TV} from './util/movies';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: '',
            page: 1,
            movies:[],
            tv:[],
            loading: true,
            tvTotalPage: '',
            moviesTotalPage: '',
            moviesCount: '',
            tvCount: ''
        }
        this.searchDatabase=this.searchDatabase.bind(this);
        this.chooseMoviesPage=this.chooseMoviesPage.bind(this)
    }

    searchDatabase(term, page) {
        page = this.state.page;
        Movies.searchMovies(term, page).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({movies: data, moviesTotalPage: data.total_pages, loading: false, moviesCount: data.total_results, term: term });
                };
            });
        TV.searchTV(term, page).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({tv: data, tvTotalPage: data.total_pages, loading: false, tvCount: data.total_results, term: term});
                }
            });
    }
    chooseMoviesPage(newPage){
        this.setState({
            page: newPage})
        this.searchDatabase(this.state.term, newPage);
    }

    render() {
        return (
            <div className="App">
                <div className="headers">
                    <Header/>
                    <Search searchDatabase={this.searchDatabase}/>
                </div>
                <div className='list'>
                    <SearchResults moviesCount={this.state.moviesCount} tvCount={this.state.tvCount} loading={this.state.loading}/>
                    <MovieList movies={this.state.movies} tv={this.state.tv}/>
                </div>
                <div className='pagination'>
                    <Pagination moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviesPage} tvTotalPage={this.state.tvTotalPage}/>
                </div>
            </div>
        );
    }
}

export default App;
