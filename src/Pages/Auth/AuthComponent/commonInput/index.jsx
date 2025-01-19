// // CommonInput.js
// import React from 'react';
// import './CommonInput.css';  // Add this CSS for input styling

// const CommonInput = ({ type = "text", placeholder, value, onChange, error, label, id, name, className = "", ...props }) => {
//   return (
//     <div className={`common-input-container ${className}`}>
//       {label && <label htmlFor={id || name} className="input-label">{label}</label>}
//       <input
//         type={type}
//         id={id || name}
//         name={name}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="common-input"
//         {...props}
//       />
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default CommonInput;

import React from "react";
import PropTypes from "prop-types";
import "./CommonInput.css";

const CommonInput = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  error = "",
  label = "",
  id,
  name,
  className = "",
  debounce = false, // New prop for debouncing
  debounceDelay = 300,
  ...props
}) => {
  const handleInputChange = (e) => {
    if (debounce && onChange) {
      clearTimeout(window.inputDebounceTimer);
      window.inputDebounceTimer = setTimeout(() => onChange(e), debounceDelay);
    } else {
      onChange && onChange(e);
    }
  };

  return (
    <div className={`common-input-container ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`common-input ${error ? "error-border" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id || name}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id || name}-error`} className="error-message">
          {error}
        </p>
      )}
    </div>
  );
};

CommonInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  debounce: PropTypes.bool,
  debounceDelay: PropTypes.number,
};

export default CommonInput;

