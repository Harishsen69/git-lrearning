import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken'); // Check token

  if (!isAuthenticated) {
    // If not logged in, redirect to login/home page
    return <Navigate to="/" replace />;
  }

  // If logged in, render the protected component
  return children;
}

export default ProtectedRoute;
