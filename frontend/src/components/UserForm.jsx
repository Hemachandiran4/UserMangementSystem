import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    role: '',
    contact_number: '',
    state: '',
    country: '',
    date_of_birth: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData && isEditing) {
      setFormData({
        name: initialData.name || '',
        email: initialData.email || '',
        age: initialData.age || '',
        role: initialData.role || '',
        contact_number: initialData.contact_number || '',
        state: initialData.state || '',
        country: initialData.country || '',
        date_of_birth: initialData.date_of_birth || ''
      });
    } else {
      setFormData({ 
        name: '', email: '', age: '', role: '', 
        contact_number: '', state: '', country: '', date_of_birth: '' 
      });
    }
  }, [initialData, isEditing]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateContactNumber = (number) => {
    return /^\d{10,15}$/.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) return setError('Name is required');
    if (!validateEmail(formData.email)) return setError('Invalid email address');
    if (!formData.age || isNaN(formData.age) || parseInt(formData.age) <= 0) 
      return setError('Age must be a positive integer');
    if (!formData.role.trim()) return setError('Role is required');
    
    if (!formData.contact_number.trim()) return setError('Contact Number is required');
    if (!validateContactNumber(formData.contact_number)) return setError('Contact Number must be 10-15 digits');
    
    if (!formData.state.trim()) return setError('State is required');
    if (!formData.country.trim()) return setError('Country is required');
    if (!formData.date_of_birth.trim()) return setError('Date of Birth is required');

    onSubmit({
      ...formData,
      age: parseInt(formData.age),
    });
    
    if (!isEditing) {
      setFormData({ 
        name: '', email: '', age: '', role: '', 
        contact_number: '', state: '', country: '', date_of_birth: '' 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-card glass-panel">
      <h3>{isEditing ? 'Edit User' : 'Add New User'}</h3>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email@exmaple.com"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Your age"
              min="1"
            />
          </div>
          
          <div className="form-group">
            <label>Role</label>
            <input
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              placeholder="Admin, Editor, User..."
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Contact Number</label>
            <input
              name="contact_number"
              type="text"
              value={formData.contact_number}
              onChange={handleChange}
              placeholder="Contact number"
            />
          </div>
          
          <div className="form-group">
            <label>State</label>
            <input
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              placeholder="State name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <input
              name="country"
              type="text"
              value={formData.country}
              onChange={handleChange}
              placeholder="Which country"
            />
          </div>
          
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              name="date_of_birth"
              type="date"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {isEditing ? 'Update User' : 'Add User'}
          </button>
          {isEditing && (
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
