// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Admin = lazy(() => import('./components/Admin'));   // Main admin page
const UserList = lazy(() => import('./components/UserList'));
const AddUser = lazy(() => import('./components/AddUser'));
const EditUser = lazy(() => import('./components/EditUser'));
const ViewUser = lazy(() => import('./components/ViewUser'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
            <Route path="view/:id" element={<ViewUser />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
