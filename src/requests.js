const API_KEY = "f03866f2b25aa4a732f7baf628442794";

const requests = {
    FetchTr: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    FetchNo: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    FetchTR: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    FetchAm: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
    FetchCM: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
    FetchHm: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
    FetchRm: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    FetchDc: `/discover/movie?api_key=${API_KEY}&with_geners=99`
}

export default requests