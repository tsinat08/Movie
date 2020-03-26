const apiKey='56b205cb94e6ce';

export const Movies = {
    searchMovies (term){
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`)
    }
}
export const TV= {
    searchTV(term) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${term}`)
    }
}