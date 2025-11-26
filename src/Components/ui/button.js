import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'btn';
  const variantStyles = {
    primary: 'btn-primary',
    outline: 'btn-outline'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};