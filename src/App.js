import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="main-content">
        {/* Topbar */}
        <Topbar />
        
        {/* Content Section */}
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
