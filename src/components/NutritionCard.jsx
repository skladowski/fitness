import { NutritionData } from "../mocks/NutritionData";
import { NutritionItem } from "./NutritionItem";

export function NutritionCard() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Питание</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '700' }}>1840</span>
          <span style={{ fontSize: '12px', color: 'var(--text3)' }}>/ 2400 ккал</span>
        </div>
      </div>

      <div className="macro-row">

        {NutritionData.map((item) => (
          <NutritionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}