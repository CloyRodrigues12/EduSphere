import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardHome from "./pages/DashboardHome";

// Placeholder components
const Placeholder = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <div
      className="glass-panel"
      style={{ padding: "3rem", borderRadius: "20px" }}
    >
      <h2 style={{ color: "var(--text-primary)" }}>{title}</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        This module is under development.
      </p>
    </div>
  </div>
);

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // New Mobile State
  const location = useLocation();

  const getTitle = (path) => {
    switch (path) {
      case "/":
        return "Dashboard Overview";
      case "/upload":
        return "Data Ingestion";
      case "/students":
        return "Student Management";
      case "/fees":
        return "Fees Collection";
      case "/research":
        return "AI Research Assistant";
      default:
        return "EduSphere";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "var(--bg-main)",
      }}
    >
      {/* Sidebar with Mobile Props */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className="main-content-wrapper"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        {/* Topbar needs setter to open menu */}
        <Topbar
          title={getTitle(location.pathname)}
          onMenuClick={() => setMobileOpen(true)}
        />

        <div style={{ flex: 1, overflowY: "auto", paddingBottom: "2rem" }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route
              path="/upload"
              element={<Placeholder title="Fees Module" />}
            />
            <Route
              path="/students"
              element={<Placeholder title="Student Management" />}
            />
            <Route path="/fees" element={<Placeholder title="Fees Module" />} />
            <Route
              path="/research"
              element={<Placeholder title="AI Research" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
