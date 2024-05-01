import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          {/*     <Route
            path="/movies/:movieId"
            element={<MoviesPageMovieDetailsPagee />}
          ></Route>
          <Route path="/movies/:movieId/cast" element={<MovieCast />}></Route>
          <Route
            path="/movies/:movieId/reviews"
            element={<MovieReviews />}
          ></Route> */}
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
