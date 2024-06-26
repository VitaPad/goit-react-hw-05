import css from "./MovieCard.module.css";

export default function MovieCard({ item }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w400";
  return (
    <>
      <h2 className={css.title}>Movie Details</h2>
      <div className={css.container}>
        <img
          src={`${imageBaseUrl}${item.backdrop_path}`}
          alt=""
          className={css.img}
        />
        <div className={css.box}>
          <p>
            <b className={css.original_title}>{item.original_title}</b>
          </p>
          <p>
            <b className={css.text}>Overview: {item.overview}</b>
          </p>
          <p>
            <b className={css.text}>Release date: {item.release_date}</b>
          </p>
          <p>
            <b className={css.text}>Genres: {item.genres.id}</b>
            {item.genres.map((genre, id) => (
              <span key={id}>{genre.name}</span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
