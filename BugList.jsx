import React from 'react';
import BugItem from './BugItem';

function BugList({ bugs, onStatusChange, onDelete }) {
  return (
    <div>
      {bugs.map(bug => (
        <BugItem
          key={bug._id}
          bug={bug}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BugList;
