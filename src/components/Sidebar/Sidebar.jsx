import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SchoolShopper</h2>
      <ul>
        <li>Dashboard</li>
        <li>Inventory</li>
        <li>Purchase</li>
        <li>Sale</li>
        <li>Report</li>
        <li>Configuration</li>
      </ul>
    </div>
  );
};

export default Sidebar;
