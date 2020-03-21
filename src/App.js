import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import MovieList from "./Components/MovieList/MovieList";
import Movies from './util/movies'

const movie={
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    title:'Batman',
    overview: 'Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman'
}

const movies=[
    movie,
    movie,
    movie,
    movie,
    movie
]

class App extends React.Component{

    searchDatabase(term){
        console.log("search is working ")
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Search searchDatabase={this.searchDatabase}/>
                <MovieList movies={movies}/>
            </div>
        );
    }
}

export default App;
