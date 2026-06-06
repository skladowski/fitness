import './PeriodSelector.css'; 
import { useState } from 'react';

const daysOfPeriod = ['День', 'Неделя', 'Месяц', '3 Мес.', 'Год' ]

export function PeriodSelector({ activePeriod }) {
  const [current, setCurrent] = useState(activePeriod);
  return (
    <div className="period-selector">
      <div className="period-tabs">
        {daysOfPeriod.map((item) => (
          <button onClick={() => setCurrent(item)} key={item} className={`period-tab ${item === current ? 'active' : ''}`}>{item}</button> 
        ))}
      </div>
      
      <div className="period-navigation">
        <button className="btn">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        
        <span className="period-current">Май 2026</span>
        
        <button className="btn">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}