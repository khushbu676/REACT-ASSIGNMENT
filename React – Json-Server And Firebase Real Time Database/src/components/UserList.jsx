// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from JSON Server
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Delete user function
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <Link to="/admin/add">
        <button className="add-user-button">Add User</button>
      </Link>
      <table className="user-table">
        <thead>
          <tr>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/admin/edit/${user.id}`}>
                  <button className="action-button edit">Update</button>
                </Link>
                <button className="action-button delete" onClick={() => deleteUser(user.id)}>Delete</button>
                <Link to={`/admin/view/${user.id}`}>
                  <button className="action-button view">View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
