import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import Movie from "./Components/Movie/Movie";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movie: [],
            searchTerm:''
        }
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Search/>
                <Movie/>
            </div>
        );
    }
}

export default App;
