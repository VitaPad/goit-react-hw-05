import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "./films-api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

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
    <div>
      {cast.length > 0 && (
        <ul>
          {cast.map((item) => (
            <li key={item.id}>
              <img src={`${imageBaseUrl}${item.profile_path}`} alt="" />
              <p>
                <b>{item.original_name}</b>
              </p>
              <p>Character: {item.character}</p>
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
