import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Muvies</NavLink>
      <NavLink to="/movies/:movieId">Details</NavLink>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </nav>
  );
}
