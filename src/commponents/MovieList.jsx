import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  console.log("Movies in MovieList:", movies);
  return (
    <div>
      <h2 className={css.title}>Trending Movies</h2>
      <ul className={css.container}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.list}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
