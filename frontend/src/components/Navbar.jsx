import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAuthData, getAuthData } from '../utils/storage';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getAuthData();

  const handleLogout = () => {
    clearAuthData();
    navigate('/');
  };

  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">User Management System</div>
      <div className="nav-controls">
        {user && <span className="user-email">{user.email}</span>}
        <button className="btn-secondary logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
