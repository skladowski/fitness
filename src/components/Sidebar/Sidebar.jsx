import { NAV_LINKS } from "../../constant/navigation";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const logoLink = NAV_LINKS.find((link) => link.variant === "logo");
  const topLinks = NAV_LINKS.filter(
    (link) => !link.isBottom && link.variant !== "logo",
  );
  const bottomLinks = NAV_LINKS.filter((link) => link.isBottom);
  return (
    <nav className="sidebar">
      {logoLink && (
        <NavLink to={logoLink.path} className={"nav-item logo"}>
          {logoLink.iconText}
        </NavLink>
      )}

      <div className="nav-group top">
        {topLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""} ${link.variant ? link.variant : ""}`
            }
            title={link.label}
          >
            {" "}
            {link.icon || link.avatarText || link.iconText}
          </NavLink>
        ))}
      </div>
      <div className="nav-group bottom">
        {bottomLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""} ${link.variant ? link.variant : ""}`
            }
            title={link.label}
          >
            {" "}
            {link.icon || link.avatarText || link.iconText}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
