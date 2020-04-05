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
            loading: true
        }
        this.searchDatabase=this.searchDatabase.bind(this)
    }

    searchDatabase(term, page) {
        Movies.searchMovies(term, page).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({movies: data, loading: false});
                }
            });
        TV.searchTV(term, page).then(data => data.json())
            .then(data => {
                if(data){
                    this.setState({tv: data,  loading: false});
                }
            });
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
                    <Pagination moviesPage={this.state.moviesPage} tvPage={this.state.tvPage}/>
                </div>
            </div>
        );
    }
}

export default App;
