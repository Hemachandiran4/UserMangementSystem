import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { getUsers, createUser, updateUser, deleteUser } from '../services/userService';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (userData) => {
    try {
      const newUser = await createUser(userData);
      setUsers([...users, newUser]);
    } catch (err) {
      alert('Failed to add user');
      console.error(err);
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const updatedUser = await updateUser(editingUser.id, userData);
      setUsers(users.map(u => (u.id === editingUser.id ? updatedUser : u)));
      setEditingUser(null);
    } catch (err) {
      alert('Failed to update user');
      console.error(err);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        setUsers(users.filter(u => u.id !== id));
      } catch (err) {
        alert('Failed to delete user');
        console.error(err);
      }
    }
  };

  const filteredUsers = users.filter((user) =>
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="dashboard-layout">
      <Navbar />
      <main className="dashboard-content">
        <div className="dashboard-header-container">
          <div className="dashboard-header">
            <h2>User Management Dashboard</h2>
            <p>Manage your organization's users efficiently.</p>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search by Name or Email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="dashboard-grid">
          <div className="form-section">
            <UserForm 
              onSubmit={editingUser ? handleUpdateUser : handleAddUser}
              initialData={editingUser}
              isEditing={!!editingUser}
              onCancel={() => setEditingUser(null)}
            />
          </div>
          
          <div className="list-section">
            {loading ? (
              <div className="loading-spinner">Loading users...</div>
            ) : (
              <UserList 
                users={filteredUsers} 
                onEdit={(user) => setEditingUser(user)} 
                onDelete={handleDeleteUser}
                searchTerm={searchTerm}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
