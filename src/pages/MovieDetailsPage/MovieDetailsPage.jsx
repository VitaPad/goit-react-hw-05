import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMoviesById } from "../../commponents/films-api";
import Loader from "../../commponents/Loader";
import ErrorMessage from "../../commponents/ErrorMessage";
import MovieCard from "../../commponents/MovieCard";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchDetailsMovie() {
      try {
        setLoading(true);
        const data = await getMoviesById(movieId);
        setMovie(data);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDetailsMovie();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      {movie && <MovieCard item={movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
