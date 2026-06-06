import './StatCard.css'
export function StatCard({
  icon,
  value,
  label,
  statProgress,
  widthPercent,
  meta,
  type,
  variant
}) {
  return (
    <div className={`stat-card ${type} ${variant ? variant:''} `}  >
      <div className="stat-icon">
        {icon}
      </div>
      
      <div className='stat-info'>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      </div>
      
      { variant !== 'horizontal' && (<div className={`stat-progress-track`}>
        <div className="stat-progress-fill" style={
          { width: `${widthPercent}%`}}>

        </div>
      </div>)}
      <div className="stat-meta">{statProgress} { variant !== 'horizontal' && <span> {meta} vs вчера</span> }</div>
    </div>
  );
}