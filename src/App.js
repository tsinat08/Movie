import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Search from '../src/Components/Search/Search';
import MovieList from "./Components/MovieList/MovieList";
import SearchResults from '../src/Components/SearchResults/SearchResults';
import {Movies} from './util/movies';
import {TV} from './util/movies';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            moviesCount:'0',
            tvCount: '0',
            movies:[],
            tv:[],
            loading: true
        }
        this.searchDatabase=this.searchDatabase.bind(this)
    }

    searchDatabase(term) {
        Movies.searchMovies(term).then(data => data.json())
            .then(data => {
                if(data.results){
                    this.setState({movies: data.results, moviesCount: data.total_results, loading: false});
                }
            });
        TV.searchTV(term).then(data => data.json())
            .then(data => {
                if(data.results){
                    this.setState({tv: data.results, tvCount: data.total_results, loading: false});
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
                    <SearchResults moviesCount={this.state.moviesCount} tvCount={this.state.tvCount}/>
                    <MovieList movies={this.state.movies} tv={this.state.tv} loading={this.state.loading}/>
                </div>
            </div>
        );
    }
}

export default App;
