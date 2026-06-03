import { NutritionData } from "../mocks/NutritionData";
import { NutritionItem } from "./NutritionItem";

export function NutritionCard() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Питание</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', lineHeight: 1, fontWeight: '700' }}>1840</span>
          <span style={{ fontSize: '16px', lineHeight: 1 , color: 'var(--text3)' }}>/ 2400 ккал</span>
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