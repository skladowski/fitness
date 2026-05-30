export function StatCard({
  icon,
  value,
  label,
  statProgress,
  widthPercent,
  meta,
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
      <div className="stat-meta">{statProgress} <span> {meta} vs вчера</span></div>
    </div>
  );
}