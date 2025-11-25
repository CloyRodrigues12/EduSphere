import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UploadCloud,
  Users,
  Banknote,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  LogOut,
  X,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Students", path: "/students" },
    { icon: Banknote, label: "Fees", path: "/fees" },
    { icon: UploadCloud, label: "Upload Data", path: "/upload" },
    { icon: BookOpenCheck, label: "Research AI", path: "/research" },
  ];

  return (
    <>
      {/* Mobile Backdrop (Click to close) */}
      <div
        className={`mobile-backdrop ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`sidebar ${collapsed ? "collapsed" : ""} ${
          mobileOpen ? "mobile-open" : ""
        }`}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="logo-icon">E</div>
            {(!collapsed || mobileOpen) && (
              <span className="logo-text">EduSphere</span>
            )}
          </div>

          {/* Close Button (Mobile Only) */}
          <button
            className="icon-btn mobile-close-btn"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav */}
        <div className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              title={collapsed && !mobileOpen ? item.label : ""}
              onClick={() => setMobileOpen(false)} // Close menu on click
            >
              <item.icon size={20} />
              {(!collapsed || mobileOpen) && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <button
            className="nav-item logout"
            style={{ width: "100%", border: "none", background: "transparent" }}
          >
            <LogOut size={20} />
            {(!collapsed || mobileOpen) && <span>Logout</span>}
          </button>

          {/* Hide collapse button on mobile */}
          <button
            className="collapse-btn desktop-only"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
