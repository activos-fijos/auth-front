import React, { useState } from "react";

const PasswordInput = ({
  name,
  value,
  onChange,
  showMeter = false,
  placeholder = "Password",
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  // Validaciones de contraseña
  const meetsLength = value.length >= 8;
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(value);

  const tooglePasswordVisivility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className}`}>
      <div className="position-relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className="form-control bg-transparent"
          value={value}
          onChange={onChange}
        />
        <span
          className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
          onClick={tooglePasswordVisivility}
        >
          <i
            className={`ki-solid ${
              showPassword ? "ki-eye" : "ki-eye-slash"
            } fs-2`}
          ></i>
        </span>
      </div>

      {showMeter && (
        <div className="mb-1 mt-3">
          <div className="d-flex align-items-center mb-3">
            {[
              { condition: meetsLength, label: "8+ chars" },
              { condition: hasUpperCase, label: "A-Z" },
              { condition: hasNumber, label: "0-9" },
              { condition: hasSpecialChar, label: "!@#" },
            ].map((item, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center flex-grow-1 me-2"
              >
                <div
                  className={`w-100 rounded h-5px mb-1 ${
                    item.condition ? "bg-success" : "bg-secondary"
                  }`}
                ></div>
                <small
                  className={`text-center ${
                    item.condition ? "text-success" : "text-muted"
                  }`}
                >
                  {item.label}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
