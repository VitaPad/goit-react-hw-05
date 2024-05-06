import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTk5ODUwNjE5MzczNzQ1NjNhNmM2ODUyZDdkMjI3NCIsInN1YiI6IjY2MzNmMDQzOTU5MGUzMDEyM2JhZTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JXXtsVwou0kgaft5wTXbeQMDHocilJLjhgshxdAqvUA";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
const time_window = "day";

export const getMovies = async (searchQuery) => {
  const response = await axios.get(`/search/movie?query=${searchQuery}`);
  console.log(response.data);
  return response.data;
};
export const getMoviesById = async () => {
  const response = await axios.get(`/movie/${movie_id}`);
  console.log(response.data);
  return response.data;
};

export const getMoviesTrends = async () => {
  const response = await axios.get(`/trending/movie/${time_window}`);
  console.log(response.data);
  return response.data;
};
