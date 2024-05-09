import { useSearchParams } from "react-router-dom";
import OwnerFilter from "../../commponents/OwnerFilter";
import ErrorMessage from "../../commponents/ErrorMessage";
import Loader from "../../commponents/Loader";
import { useEffect, useMemo, useState } from "react";
import MovieList from "../../commponents/MovieList";
import { getMovies } from "../../commponents/films-api";
import LoadMoreButton from "../../commponents/LoadMoreButton";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const ownerQuery = searchParams.get("query") ?? "";

  const changeOwnerFilter = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
    setPage(1);
    setMovies([]);
  };

  const searchMovies = useMemo(() => {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(ownerQuery.toLowerCase());
    });
  }, [movies, ownerQuery]);

  useEffect(() => {
    if (ownerQuery === "") {
      return;
    }
    async function fetchMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovies(ownerQuery, page);
        setMovies((prevMovies) => {
          return [...prevMovies, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [page, ownerQuery]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <OwnerFilter value={ownerQuery} onFilter={changeOwnerFilter} />
      {movies && movies.length > 0 && <MovieList movies={searchMovies} />}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch movies. Please try again later."}
        />
      )}
      {movies.length > 0 && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
}
