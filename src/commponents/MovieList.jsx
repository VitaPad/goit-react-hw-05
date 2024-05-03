import { Link } from "react-router-dom";

export default function MovieList({ items }) {
  console.log("Movies in MovieList:", items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
