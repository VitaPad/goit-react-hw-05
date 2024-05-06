import { Link } from "react-router-dom";

export default function MovieList({ items, id }) {
  console.log("Movies in MovieList:", items);
  return (
    <ul>
      <h2>Trending today</h2>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
