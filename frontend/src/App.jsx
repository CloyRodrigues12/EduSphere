import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardHome from "./pages/DashboardHome";

// Placeholders
const Placeholder = ({ title }) => (
  <div style={{ padding: "2rem" }}>
    <h2>{title}</h2>
  </div>
);

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Fixed Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Scrollable Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
          transition: "margin-left 0.3s ease",
        }}
      >
        <Topbar title="Dashboard Overview" />

        <div style={{ flex: 1, overflowY: "auto", paddingBottom: "2rem" }}>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/upload" element={<Placeholder title="upload" />} />
            <Route
              path="/students"
              element={<Placeholder title="Students Module" />}
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
