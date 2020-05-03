const apiKey='';

export const Movies = {
    searchMovies (term, page){
        if (!page || isNaN(page)) page=1;
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${term}`)
    }
}
export const TV= {
    searchTV(term, page) {
        if (!page || isNaN(page)) page=1;
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=${page}&query=${term}`)

    }
}