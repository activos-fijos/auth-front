import React from "react";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "btn btn-primary",
  fullWidth = true,
}) => {
  return (
    <div className="d-grid mb-10 mb-10">
      <button type={type} className={className} onClick={onClick}>
        <span className="indicator-label">{label}</span>
      </button>
    </div>
  );
};

export default Button;
