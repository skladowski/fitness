import './PeriodSelector.css';

export function PeriodSelector() {
  return (
    <div className="period-selector">
      <div className="period-tabs">
        <button className="period-tab">День</button>
        <button className="period-tab">Неделя</button>
        <button className="period-tab active">Месяц</button>
        <button className="period-tab">3 мес.</button>
        <button className="period-tab">Год</button>
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