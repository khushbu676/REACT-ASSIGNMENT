import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogs, updateBlog } from '../api';
import { TextField, Button } from '@mui/material';

const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await getBlogs();
      const blog = response.data.find((item) => item.id === parseInt(id));
      setTitle(blog.title);
      setDescription(blog.body);
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBlog = { title, body: description };
    await updateBlog(id, updatedBlog);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Blog</h1>
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
        <Button variant="contained" color="primary" type="submit">Update</Button>
      </form>
    </div>
  );
};

export default EditBlog;
