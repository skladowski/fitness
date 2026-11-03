export function SetRow({ set, onChange, exerciseId, setRowId, index }) {
  return (
    <div className={set.isChecked ? "set-row done" : "set-row"}>
      <div className="set-index">{index + 1}</div>
      <div className="set-input-wrap">
        <input
          className="set-input"
          type="text"
          inputMode="numeric"
          value={set.weight}
          onChange={(e) =>
            onChange(
              exerciseId,
              setRowId,
              "weight",
              e.target.value.replace(",", "."),
            )
          }
        />
        <span className="set-input-unit">кг</span>
      </div>
      <div className="set-input-wrap">
        <input
          className="set-input"
          type="text"
          inputMode="numeric"
          value={set.reps}
          onChange={(e) =>
            onChange(exerciseId, setRowId, "reps", e.target.value)
          }
        />
        <span className="set-input-unit">повт</span>
      </div>
      <input
        className="set-check-input"
        type="checkbox"
        id={set.id}
        checked={set.isChecked}
        onChange={(e) =>
          onChange(exerciseId, setRowId, "isChecked", e.target.checked)
        }
      />
      <label className="set-check-label" htmlFor={set.id}>
        ✓
      </label>
    </div>
  );
}
