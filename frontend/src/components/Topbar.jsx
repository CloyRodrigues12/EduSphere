import React, { useEffect, useState } from "react";
import { Sun, Moon, Bell, Search } from "lucide-react";
import "./Topbar.css";

const Topbar = ({ title }) => {
  const [theme, setTheme] = useState("light");

  // Handle Theme Toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="topbar glass-panel">
      <div className="topbar-left">
        <h1 className="page-title">{title}</h1>
      </div>

      <div className="topbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search anything..." />
        </div>

        {/* Actions */}
        <button className="icon-btn" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        {/* Profile */}
        <div className="profile-chip">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=random"
            alt="Profile"
          />
          <div className="profile-info">
            <span className="name">Admin</span>
            <span className="role">Super User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
