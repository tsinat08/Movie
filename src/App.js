import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import MovieList from "./Components/MovieList/MovieList";
import Movies from './util/movies'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
           movies: []
        }

    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Search searchMovies={this.searchMovies}/>
                <MovieList/>
            </div>
        );
    }
}

export default App;
