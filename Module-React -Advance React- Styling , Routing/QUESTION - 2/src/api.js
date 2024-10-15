import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch all blogs
export const getBlogs = async () => {
  return await axios.get(API_URL);
};

// Add a new blog
export const addBlog = async (blog) => {
  return await axios.post(API_URL, blog);
};

// Update a blog by ID
export const updateBlog = async (id, blog) => {
  return await axios.put(`${API_URL}/${id}`, blog);
};

// Delete a blog by ID
export const deleteBlog = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
