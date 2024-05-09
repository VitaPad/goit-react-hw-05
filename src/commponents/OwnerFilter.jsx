import css from "./OwnerFilter.module.css";
export default function OwnerFilter({ value, onFilter }) {
  return (
    <div>
      <input
        className={css.input}
        type="text"
        placeholder="Search Movies"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
