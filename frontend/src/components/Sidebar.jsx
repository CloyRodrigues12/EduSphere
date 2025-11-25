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
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Students", path: "/students" },
    { icon: Banknote, label: "Fees", path: "/fees" },
    { icon: UploadCloud, label: "Upload Data", path: "/upload" },
    { icon: BookOpenCheck, label: "Research AI", path: "/research" },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo-icon">E</div>
        {!collapsed && <span className="logo-text">EduSphere</span>}
      </div>

      {/* Scrollable Nav Area */}
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            title={collapsed ? item.label : ""}
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </div>

      {/* Fixed Footer */}
      <div className="sidebar-footer">
        <button
          className="nav-item logout"
          style={{ width: "100%", border: "none", background: "transparent" }}
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
