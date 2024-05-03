import { useEffect, useState } from "react";
import { getMoviesTrends } from "../../commponents/films-api";
import Loader from "../../commponents/Loader";
import ErrorMessage from "../../commponents/ErrorMessage";
import MovieList from "../../commponents/MovieList";

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
    <div>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      {console.log("Data being passed to MovieList:", movies)}
      {movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
}
