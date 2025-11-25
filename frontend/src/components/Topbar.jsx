import React, { useEffect, useState } from "react";
import { Sun, Moon, Bell, Search, Menu } from "lucide-react"; // Import Menu
import "./Topbar.css";

const Topbar = ({ title, onMenuClick }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="topbar glass-panel">
      <div className="topbar-left">
        {/* Hamburger Menu Button (Visible only on Mobile) */}
        <button className="icon-btn menu-trigger" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h1 className="page-title">{title}</h1>
      </div>

      <div className="topbar-right">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="icon-btn" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

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
