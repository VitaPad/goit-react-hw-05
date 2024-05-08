import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
/* import HomePage from "../pages/HomePage/HomePage"; */
/* import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"; */
/* import MoviesPage from "../pages/MoviesPage/MoviesPage"; */
/* import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage"; */
/* import MovieReviews from "./MovieReviews"; */
/* import MovieCast from "./MovieCast.jsx"; */

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() => import("./MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast.jsx"));

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
