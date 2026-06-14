import { NAV_LINKS } from "../../constant/navigation";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <nav className="sidebar">
      {" "}
      {NAV_LINKS.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={
              ({ isActive }) =>
                `nav-item ${isActive ? "active" : ""} ${
                  link.isBottom ? "sidebar-bottom" : ""
                } ${link.variant ? link.variant : ""}`
              // условие ? действие_если_true : действие_если_false
            }
            title={link.label}
          >
            {link.iconText || link.icon || link.avatarText}
          </NavLink>
        );
      })}
    </nav>
  );
}
