import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import Movie from "./Components/Movie/Movie";
import Movies from './util/movies'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
           movies: []
        }
        this.searchMovies=this.searchMovies.bind(this)
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Search searchMovies={this.searchMovies}/>
                <Movie/>
            </div>
        );
    }
}

export default App;
