import React from 'react';

interface ButtonProps {
  size?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size, className, onClick, children }) => {
  return (
    <button 
      className={`rounded ${size === '7xl' ? 'w-full' : ''} font-bold ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export  {Button};
