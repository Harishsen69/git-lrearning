import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
