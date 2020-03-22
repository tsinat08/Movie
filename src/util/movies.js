const apiKey='56b205b08ae40f18ccbbdc95cb94e6ce';

const Movies = {
    searchMovies (term){
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`)

    }
}

export default Movies;