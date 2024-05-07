import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "./films-api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMoviesReviews() {
      try {
        setLoading(true);
        const data = await getMoviesReviews(movieId);
        setReviews(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>
                <b>Author:{item.author}</b>
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Failed to fetch reviews. Please try again later."}
        />
      )}
    </div>
  );
}
