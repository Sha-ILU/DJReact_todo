import React, { useState } from 'react';
// import axios from 'axios';

const Tdform = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', description: '', completed: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
      <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
      <input type="checkbox" checked={formData.completed} onChange={(e) => setFormData({ ...formData, completed: e.target.checked })} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Tdform;
