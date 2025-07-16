import React, { useState } from 'react';
import { createBug } from '../services/bugService';

function BugForm({ onBugCreated }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createBug(formData);
    onBugCreated(res.data);
    setFormData({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Bug title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Bug description" />
      <button type="submit">Add Bug</button>
    </form>
  );
}

export default BugForm;
