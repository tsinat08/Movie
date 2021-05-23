import React from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import Home2 from "./Components/Home/Home2";
import Header from '../src/Components/Header/Header';
import Search from '../src/Components/Search/Search';
import MovieList from "./Components/MovieList/MovieList";
import SearchResults from '../src/Components/SearchResults/SearchResults';
import Pagination from "./Components/Pagination/Pagination";
import {Movies, Trending, TV, MoviesPopular, TVPopular} from './util/movies';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            pageMovie: 1,
            pageTV: 1,
            movies: [],
            moviesPopular: [],
            tv: [],
            tvPopular: [],
            trending: [],
            loading: true,
            tvTotalPage: '',
            moviesTotalPage: '',
            moviesCount: 0,
            tvCount: 0,
            resultsType: 'Movies'
        }
        this.searchDatabase = this.searchDatabase.bind(this);
        this.chooseMoviesPage = this.chooseMoviesPage.bind(this);
        this.chooseResultType = this.chooseResultType.bind(this);
        this.Trending = this.Trending.bind(this);
    }

    searchDatabase(term, page, newType) {
        if (newType === "Movies") {
            this.getMovies(term, page)
        } else if (newType === "TV") {
            this.getTV(term, page)
        } else {
            this.getMovies(term, page);
            this.getTV(term, page);
        }
    }

    getMovies(term, page) {
        Movies.search(term, page).then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        movies: data,
                        moviesTotalPage: data.total_pages,
                        loading: false,
                        moviesCount: data.total_results,
                        term: term
                    });
                }
            });
    }

    getTV(term, page) {
        TV.search(term, page).then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        tv: data,
                        tvTotalPage: data.total_pages,
                        loading: false,
                        tvCount: data.total_results,
                        term: term
                    });
                }
            });
    }

    Trending() {
        Trending.search.then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        trending: data,
                        loading: true,
                    });
                }
            });
        console.log("trending:   ",this.state.trending)
    }

    MoviePopular() {
        MoviesPopular.search.then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        moviePopular: data,
                        loading: true,
                    });
                }
            });
        console.log("Movie:  ", this.state.moviePopular)
    }

    TVPopular() {
        TVPopular.search.then(data => data.json())
            .then(data => {
                if (data) {
                    this.setState({
                        tvPopular: data,
                        loading: true,
                    });
                }
            });
        console.log("TV:   ", this.state.tvPopular)
    }

    chooseMoviesPage(newPage, newType) {
        if (newType === "Movies") {
            this.setState({
                pageMovie: newPage
            })
        } else if (newType === "TV Shows") {
            this.setState({
                pageTV: newPage
            })
        }
        this.searchDatabase(this.state.term, newPage, newType);

    }

    chooseResultType(type) {
        this.setState({resultsType: type})
    }

    render() {
        return (
            <div className="App">
                <div className="headers">
                    <Header Trending={this.Trending}/>
                    <Search searchDatabase={this.searchDatabase}/>
                </div>
                    {this.state.loading === false ?
                        <div className='list'><SearchResults moviesCount={this.state.moviesCount} tvCount={this.state.tvCount}
                                            loading={this.state.loading} chooseResultType={this.chooseResultType}
                                            currentPage={this.state.page}/>
                            <MovieList movies={this.state.movies} tv={this.state.tv} resultType={this.state.resultsType}
                                       loading={this.state.loading}/></div> :
                        <div>
                            <Home moviesPopular={this.state.moviePopular} tvPopular={this.state.tvPopular}/>
                            <Home2 trending={this.state.trending}/>
                        </div>
                    }
                <div className='pagination'>
                    <Pagination currentPageMovie={this.state.pageMovie} currentPageTV={this.state.pageTV}
                                moviesTotalPage={this.state.moviesTotalPage} chooseMoviesPage={this.chooseMoviesPage}
                                tvTotalPage={this.state.tvTotalPage} resultsType={this.state.resultsType}/>
                </div>
            </div>
        );
    }
}

export default App;
