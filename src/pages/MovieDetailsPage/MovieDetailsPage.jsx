import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesById } from "../../commponents/films-api";
import Loader from "../../commponents/Loader";
import ErrorMessage from "../../commponents/ErrorMessage";
import MovieCard from "../../commponents/MovieCard";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkUrl = useRef(location.state ?? "/");

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
    <div className={css.container}>
      <div>
        <Link to={backLinkUrl.current} className={css.link}>
          Go Back
        </Link>
      </div>
      {movie && <MovieCard item={movie} />}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      <ul>
        <li>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading nested route</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
