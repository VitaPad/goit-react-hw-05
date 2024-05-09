import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={css.button}>
        Load more!
      </button>
    </div>
  );
}
