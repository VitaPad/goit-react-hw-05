import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const gerNavLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.container}>
        <NavLink to="/" className={gerNavLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={gerNavLink}>
          Muvies
        </NavLink>
      </nav>
    </header>
  );
}
