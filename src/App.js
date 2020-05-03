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
            page: '',
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

    searchDatabase(term, page) {
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
        // this.setState({
        //     page: newPage})
        this.searchDatabase(this.state.term, newPage);

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
                    <SearchResults moviesCount={this.state.moviesCount} tvCount={this.state.tvCount} loading={this.state.loading} chooseResultType={this.chooseResultType}/>
                    <MovieList movies={this.state.movies} tv={this.state.tv} resultType={this.state.resultsType} loading={this.state.loading}/>
                </div>
                <div className='pagination'>
                    <Pagination moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviesPage} tvTotalPage={this.state.tvTotalPage} resultType={this.state.resultsType}/>
                </div>
            </div>
        );
    }
}

export default App;
