export default function MovieCard({ item }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w400";
  return (
    <div>
      <h2>Movie Details</h2>
      <img src={`${imageBaseUrl}${item.backdrop_path}`} alt="" />
      <p>
        <b>{item.original_title}</b>
      </p>
      <p>
        <b>Overview: {item.overview}</b>
      </p>
      <p>
        <b>Release date: {item.release_date}</b>
      </p>
      <p>
        <b>Genres: {item.genres.id}</b>
        {item.genres.map((genre, id) => (
          <span key={id}>{genre.name}</span>
        ))}
      </p>
    </div>
  );
}
