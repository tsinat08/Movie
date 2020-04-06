const apiKey='56b205b08ae40f18ccbbdc95cb94e6ce';

export const Movies = {
    searchMovies (term, page){
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${term}`)
    }
}
export const TV= {
    searchTV(term, page) {
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=${page}&query=${term}`)

    }
}