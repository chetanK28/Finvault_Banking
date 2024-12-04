import React, { useState } from "react";
import "../styles.css"; // Updated path

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h1 className="logo">{!collapsed && "ADMINIS"}</h1>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          ☰
        </button>
      </div>
      <div className="profile">
        <img
          src="../../assets/logo.avif"
          alt="User"
          className="profile-pic"
        />
        {!collapsed && (
          <div>
            <h2>Chetan</h2>
            <p>Admin</p>
          </div>
        )}
      </div>
      <ul className="menu">
        <li>
          <a href="/">🏠 {!collapsed && "Dashboard"}</a>
        </li>
        <li>
          <a href="/team">👥 {!collapsed && "Manage Team"}</a>
        </li>
        <li>
          <a href="/contacts">📞 {!collapsed && "Contacts Info"}</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
