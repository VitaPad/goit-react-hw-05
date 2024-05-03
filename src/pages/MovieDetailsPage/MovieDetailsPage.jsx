import { Link } from "react-router-dom";

export default function MovieDetailsPage() {
  return (
    <div>
      <b>MovieDetailsPage</b>

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
