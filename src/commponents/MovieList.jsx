import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  console.log("Movies in MovieList:", movies);
  return (
    <ul>
      <h2>Trending today</h2>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
