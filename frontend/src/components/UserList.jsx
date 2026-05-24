import React from 'react';

const UserList = ({ users, onEdit, onDelete, searchTerm }) => {
  return (
    <div className="table-container glass-panel">
      <h3>User Directory</h3>
      {users.length === 0 ? (
        <p className="no-data">
          {searchTerm ? "No matching users found." : "No users found. Add one to get started."}
        </p>
      ) : (
        <div className="table-responsive">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Role</th>
                <th>Contact Number</th>
                <th>State</th>
                <th>Country</th>
                <th>Date of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <span className="role-badge">{user.role}</span>
                  </td>
                  <td>{user.contact_number || '-'}</td>
                  <td>{user.state || '-'}</td>
                  <td>{user.country || '-'}</td>
                  <td>{user.date_of_birth || '-'}</td>
                  <td className="actions-cell">
                    <button 
                      className="btn-icon btn-edit" 
                      onClick={() => onEdit(user)}
                      title="Edit"
                    >
                      ✎
                    </button>
                    <button 
                      className="btn-icon btn-delete" 
                      onClick={() => onDelete(user.id)}
                      title="Delete"
                    >
                      ✖
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
