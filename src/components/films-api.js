import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTk5ODUwNjE5MzczNzQ1NjNhNmM2ODUyZDdkMjI3NCIsInN1YiI6IjY2MzNmMDQzOTU5MGUzMDEyM2JhZTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXXtsVwou0kgaft5wTXbeQMDHocilJLjhgshxdAqvUA";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
const time_window = "day";

export const getMovies = async (searchQuery, currentPage) => {
  const response = await axios.get(
    `/search/movie?query=${searchQuery}&page=${currentPage}`
  );
  console.log(response.data);
  return response.data.results;
};
export const getMoviesById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  console.log(response.data);
  return response.data;
};

export const getMoviesTrends = async () => {
  const response = await axios.get(`/trending/movie/${time_window}`);
  console.log(response.data);
  return response.data;
};

export const getMoviesCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  console.log(response.data);
  return response.data;
};

export const getMoviesReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}//reviews`);
  console.log(response.data);
  return response.data;
};
