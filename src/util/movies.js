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
export const AllSearch = {
    search (term, page){
        if (!page || isNaN(page)) page=1;
        return fetch (`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${term}&page=${page}`)
    }
}

export const Trending = {
    search (term, page){
        if (!page || isNaN(page)) page=1;
        return fetch (`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    }
}
