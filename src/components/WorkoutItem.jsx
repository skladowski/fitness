export function WorkoutItem() {
  return (
    <div className="workout-item">
      <div className="wo-icon" style={{ background: 'rgba(108,99,255,0.12)' }}>🏃</div>
      <div className="wo-info">
        <div className="wo-name">Утренняя пробежка</div>
        <div className="wo-sub">5.4 км · ср. пульс 142 уд/мин</div>
      </div>
      <div className="wo-right">
        <div className="wo-cal" style={{ color: '#fb923c' }}>320 ккал</div>
        <div className="wo-dur">32:14</div>
      </div>
    </div>
  );
}