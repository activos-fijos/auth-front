import React from 'react';

const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control bg-transparent"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;