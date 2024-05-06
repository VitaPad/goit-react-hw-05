import { Link } from "react-router-dom";

export default function MovieList({ items }) {
  console.log("Movies in MovieList:", items);
  return (
    <ul>
      <h2>Trending today</h2>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
