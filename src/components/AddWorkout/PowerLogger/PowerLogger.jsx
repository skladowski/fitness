import "../LoggerBody.css";
import "./PowerLogger.css";
import { SetRow } from "../SetRow/SetRow";
export function PowerLogger({ onChange, exercises }) {
  return (
    <div className="logger-body">
      {exercises.map((item) => {
        return (
          <div key={item.id} className="exercise-card">
            <div className="exercise-card-head">
              <div className="exercise-name">{item.name}</div>
              <div className="exercise-meta">{item.subtitle}</div>
            </div>
            {item.sets.map((set, index) => {
              return (
                <SetRow
                  key={set.id}
                  index={index}
                  set={set}
                  onChange={onChange}
                  exerciseId={item.id}
                  setRowId={set.id}
                />
              );
            })}

            <button className="add-set-btn">+ Добавить подход</button>
          </div>
        );
      })}
    </div>
  );
}
