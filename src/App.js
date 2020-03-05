import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/Header'
import Search from '../src/Components/Search/Search'
import Movie from "./Components/Movie/Movie";

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Movie/>
    </div>
  );
}

export default App;
