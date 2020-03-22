import React from 'react';
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
             Movies.searchMovies(term).then(data => data.json())
                    .then(data => {
                        if(data.results){
                            this.setState({movies: data.results});
                        }
                    })
    }
    render() {
        return (
            <div className="App">
                <div className="headers">
                    <Header/>
                <Search searchDatabase={this.searchDatabase}/>
                </div>
                <MovieList movies={this.state.movies}/>
            </div>
        );
    }
}

export default App;
