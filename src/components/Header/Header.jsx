import "./Header.css";
export function Header({ title, subtitle, children }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="header-right">
        <div className="badge-dot"></div>
        {children}
      </div>
    </div>
  );
}
