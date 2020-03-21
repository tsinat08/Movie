import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import MovieList from "./Components/MovieList/MovieList";
import Movies from './util/movies'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
        this.searchDatabase=this.searchDatabase.bind(this)
    }
    searchDatabase(term) {
        Movies.searchMovies(term).then((movies) => {
            this.setState({movies: movies})
        })
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Search searchDatabase={this.searchDatabase}/>
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;
