import React from 'react';

function BugItem({ bug, onStatusChange, onDelete }) {
  return (
    <div style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
      <h4>{bug.title}</h4>
      <p>{bug.description}</p>
      <p>Status: <strong>{bug.status}</strong></p>
      <select value={bug.status} onChange={(e) => onStatusChange(bug._id, e.target.value)}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>
      <button onClick={() => onDelete(bug._id)}>Delete</button>
    </div>
  );
}

export default BugItem;
