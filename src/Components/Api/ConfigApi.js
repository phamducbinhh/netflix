export const keyApi = "630a30ea353d431d5fad10eb031b7d8d";

export const endPoint = "https://api.themoviedb.org/3/movie";

export const endPointImage = "https://image.tmdb.org/t/p/original";

export const API = {
  getMovieList: (type) => `${endPoint}/${type}?api_key=${keyApi}&query=''`,
  getMovieDetail: (movieId) =>
    `${endPoint}/${movieId}?api_key=${keyApi}&query=''`,
  getMovieCredit: (movieId) =>
    `${endPoint}/${movieId}/credits?api_key=${keyApi}&query=''`,
  getMovieSimilar: (movieId) =>
    `${endPoint}/${movieId}/similar?api_key=${keyApi}&query=''`,
  getMovieTrailer: (movieId) =>
    `${endPoint}/${movieId}/videos?api_key=${keyApi}&query=''`,
  getBanner: () => `${endPoint}/upcoming?api_key=${keyApi}&query=''`,
  getMoviesPage: (page, queryDebounce) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${queryDebounce}&page=${page}' '`,
};
