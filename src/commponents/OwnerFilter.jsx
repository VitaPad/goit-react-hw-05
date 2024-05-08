export default function OwnerFilter({ value, onFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
