const apiKey='';

const Movies = {
    searchMovies (term){
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`)
            .then(data => data.json())
            .then(data => {
                this.searchMovies({movies: [... data.results]})
            })
    }
}

export default Movies;