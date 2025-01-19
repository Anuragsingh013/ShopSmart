// CommonButton.js
import React from 'react';
import './CommonButton.css';  // Add this CSS for button styling

const CommonButton = ({ onClick, loading, disabled, text, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`common-btn ${className} ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
    >
      {loading ? "Please wait..." : text}
    </button>
  );
};

export default CommonButton;
