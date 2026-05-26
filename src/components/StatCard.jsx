export function StatCard({
  icon,
  value,
  label,
  statProgress,
  widthPercent,
  percentFromYesterday,
  type,
}) {
  return (
    <div className={`stat-card ${type}`}  >
      <div className="stat-icon">
        {icon}
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-progress-track">
        <div className="stat-progress-fill" style={
          { width: `${widthPercent}%`}}>

        </div>
      </div>
      <div className="stat-meta">{statProgress} <span> {percentFromYesterday} vs вчера</span></div>
    </div>
  );
}