import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "./films-api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    async function fetchMoviesCast() {
      try {
        setLoading(true);
        const data = await getMoviesCast(movieId);
        setCast(data.cast);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      {cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map((item) => (
            <li key={item.id} className={css.castItem}>
              <img
                src={`${imageBaseUrl}${item.profile_path}`}
                alt=""
                className={css.castImage}
              />
              <div className={css.castDetails}>
                <p>
                  <b className={css.text}>{item.original_name}</b>
                </p>
                <p className={css.text}>Character: {item.character} </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch cast. Please try again later."}
        />
      )}
    </div>
  );
}
