import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
`;

const AdminNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const AdminLink = styled(Link)`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const AdminDashboard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

// Forms and lists for admin actions (Add, Edit, Delete)
const PoetryForm = ({ poem, onSubmit }) => {
    const [title, setTitle] = useState(poem?.title || '');
    const [urduText, setUrduText] = useState(poem?.urduText || '');
    const [englishText, setEnglishText] = useState(poem?.englishText || '');
    const [image, setImage] = useState(poem?.image || ''); // The state for the image URL

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, urduText, englishText, image });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={urduText} onChange={(e) => setUrduText(e.target.value)} placeholder="Urdu Text" required />
            <textarea value={englishText} onChange={(e) => setEnglishText(e.target.value)} placeholder="English Text" />
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL (e.g., /images/5551465.jpg)" />
            <button type="submit">{poem ? 'Update' : 'Add'} Poetry</button>
        </form>
    );
};
const AllPoetryList = ({ poetry, onEdit, onDelete }) => {
    return (
        <ul>
            {poetry.map(p => (
                <li key={p._id}>
                    {p.title}
                    <button onClick={() => onEdit(p)}>Edit</button>
                    <button onClick={() => onDelete(p._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

const Admin = () => {
    const [poetry, setPoetry] = useState([]);
    const [editingPoem, setEditingPoem] = useState(null);

    useEffect(() => {
        const fetchPoetry = async () => {
            const res = await fetch('/api/poetry');
            const data = await res.json();
            setPoetry(data);
        };
        fetchPoetry();
    }, []);

    const handleAddOrUpdate = async (poemData) => {
        const url = editingPoem ? `/api/admin/edit/${editingPoem._id}` : '/api/admin/add';
        const method = editingPoem ? 'PUT' : 'POST';
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(poemData),
        });
        const newPoem = await res.json();
        // Update state and clear editing form
        setPoetry(editingPoem ? poetry.map(p => p._id === newPoem._id ? newPoem : p) : [newPoem, ...poetry]);
        setEditingPoem(null);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this poem?')) {
            await fetch(`/api/admin/delete/${id}`, { method: 'DELETE' });
            setPoetry(poetry.filter(p => p._id !== id));
        }
    };

    return (
        <AdminContainer>
            <h1>Admin Panel</h1>
            <AdminNav>
                <AdminLink to="/admin">All Poetry</AdminLink>
                <AdminLink to="/admin/add">Add New</AdminLink>
            </AdminNav>
            <Routes>
                <Route path="/" element={<AllPoetryList poetry={poetry} onEdit={setEditingPoem} onDelete={handleDelete} />} />
                <Route path="/add" element={<PoetryForm onSubmit={handleAddOrUpdate} poem={editingPoem} />} />
            </Routes>
        </AdminContainer>
    );
};
export default Admin;