import { useEffect, useState } from "react";
import { getMoviesTrends } from "../../components/films-api";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import MovieList from "../../components/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getMoviesTrends();
        setMovies(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      {console.log("Data being passed to MovieList:", movies)}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
