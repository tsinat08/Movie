const apiKey= process.env.REACT_APP_API_KEY;

export const Movies = {
    search (term, page){
        if (!page || isNaN(page)) page=1;
        return fetch (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${term}`)
    }
}
export const TV= {
    search(term, page) {
        if (!page || isNaN(page)) page=1;
        return fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=${page}&query=${term}`)

    }
}

export const Trending = {
    search (term, page){
        if (!page || isNaN(page)) page=1;
        return fetch (`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    }
}

export const MoviesPopular = {
    search() {
        return fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}`)
    }
}

export const TVPopular = {
    search() {
        return fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=${apiKey}`)
    }
}
