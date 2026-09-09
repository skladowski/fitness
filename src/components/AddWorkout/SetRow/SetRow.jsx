export function SetRow() {
  return (
    <div className="set-row done">
      <div className="set-index">1</div>
      <div className="set-input-wrap">
        <input
          className="set-input"
          type="text"
          inputMode="numeric"
          defaultValue="60"
        />
        <span className="set-input-unit">кг</span>
      </div>
      <div className="set-input-wrap">
        <input
          className="set-input"
          type="text"
          inputMode="numeric"
          defaultValue="10"
        />
        <span className="set-input-unit">повт</span>
      </div>
      <input
        className="set-check-input"
        type="checkbox"
        id="set-1-1"
        defaultChecked
      />
      <label className="set-check-label" htmlFor="set-1-1">
        ✓
      </label>
    </div>
  );
}
