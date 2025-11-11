import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken'); // Check token

  if (isAuthenticated) {
    // If logged in, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // If not logged in, render the public component
  return children;
}

export default PublicRoute;
