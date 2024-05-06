import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMoviesById } from "../../commponents/films-api";
import Loader from "../../commponents/Loader";
import ErrorMessage from "../../commponents/ErrorMessage";
import MovieCard from "../../commponents/MovieCard";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movie_id } = useParams();

  useEffect(() => {
    async function fetchDetailsMovie() {
      try {
        setLoading(true);
        const data = await getMoviesById(movie_id);
        setMovie(data);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDetailsMovie();
  }, [movie_id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      {movie && <MovieCard items={movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
