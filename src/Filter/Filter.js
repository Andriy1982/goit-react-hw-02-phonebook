import React from 'react';

export default function Filter({ name, onChangeFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={name}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
