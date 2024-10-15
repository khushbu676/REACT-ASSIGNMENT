import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../api';
import { TextField, Button } from '@mui/material';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = { title, body: description };
    await addBlog(newBlog);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddBlog;
