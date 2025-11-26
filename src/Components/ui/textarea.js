import React from 'react';

export const Textarea = ({ 
  name, 
  placeholder, 
  value, 
  onChange, 
  rows = 4,
  className = '' 
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`textarea ${className}`}
    />
  );
};