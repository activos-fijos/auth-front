import React from 'react';

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  className = '',
  error = '',
}) => {
  return (
    <div className={`${className}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control bg-transparent ${error ? 'is-invalid' : ''}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;