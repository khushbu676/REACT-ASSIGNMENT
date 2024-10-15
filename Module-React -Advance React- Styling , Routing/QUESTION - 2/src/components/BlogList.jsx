import React, { useState, useEffect } from 'react';
import { getBlogs, deleteBlog } from '../api';
import { useNavigate } from 'react-router-dom';
import { IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await getBlogs();
    setBlogs(response.data.slice(0, 5));  // Limiting to 5 for the demo
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog List</h1>
      <Button variant="contained" color="primary" onClick={() => navigate('/add')}>Add Blog</Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.body}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/edit/${blog.id}`)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(blog.id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BlogList;
