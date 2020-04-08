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
            term: '',
            page: 1,
            movies:[],
            tv:[],
            loading: true,
            chooseMoviesPage: '',
            tvPage: '',
            moviesTotalPage: '',
            moviesPage: ''
        }
        this.searchDatabase=this.searchDatabase.bind(this);
        this.chooseMoviesPage=this.chooseMoviesPage.bind(this)
    }

    searchDatabase(term, page) {

        console.log('1st',page)
        Movies.searchMovies(term, this.state.page).then(data => data.json())
            .then(data => {
                console.log('apps', this.state.page)
                if(data){
                    this.setState({movies: data, moviesTotalPage: data.total_pages, loading: false, term: term});
                };
            });
        TV.searchTV(term, page).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({tv: data, tvPage: data.total_pages, loading: false});
                }
            });
    }
    chooseMoviesPage(props, newPage){
        this.setState({
            page: newPage})
        this.searchDatabase(term, newPage)
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
                    <Pagination moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviesPage} tvPage={this.state.tvPage}/>
                </div>
            </div>
        );
    }
}

export default App;
