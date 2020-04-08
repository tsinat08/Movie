import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Search from '../src/Components/Search/Search';
import MovieList from "./Components/MovieList/MovieList";
import Pagination from "./Components/Pagination/Pagination";
import {Movies} from './util/movies';
import {TV} from './util/movies';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            tv:[],
            loading: true,
            chooseMoviesPage: '',
            tvPage: '',
            moviesTotalPage: '',
            moviesPage: ''
        }
        this.searchDatabase=this.searchDatabase.bind(this);
        this.chooseMoviePage=this.chooseMoviePage.bind(this);
    }

    searchDatabase(term, pages) {
        Movies.searchMovies(term, pages).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({movies: data, moviesTotalPage: data.total_pages, loading: false});
                };
            });
        TV.searchTV(term, pages).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({tv: data, tvPage: data.total_pages, loading: false});
                }
            });
    }
    searchDatabase(term){

    }

    render() {
        return (
            <div className="App">
                <div className="headers">
                    <Header/>
                    <Search searchDatabase={this.searchDatabase}/>
                </div>
                <div className='list'>
                    <MovieList movies={this.state.movies} tv={this.state.tv} loading={this.state.loading}/>
                </div>
                <div className='pagination'>
                    <Pagination moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviePage} tvPage={this.state.tvPage}/>
                </div>
            </div>
        );
    }
}

export default App;
