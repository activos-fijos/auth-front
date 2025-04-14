import React, { useState } from "react";

const SignUpForm = () => {
  // Estado para simular el cambio visual (sin validación real)
  const [password, setPassword] = useState("");

  // Simulamos requisitos cumplidos (solo para demostración visual)
  const meetsLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_up_form">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
            <div className="text-gray-500 fw-semibold fs-6">
              Your Social Campaigns
            </div>
          </div>

          {/* Email */}
          <div className="fv-row mb-8">
            <input
              type="email"
              placeholder="Email"
              className="form-control bg-transparent"
            />
          </div>

          {/* Password Meter Dinámico */}
          <div className="fv-row mb-8">
            <div className="mb-1">
              <div className="position-relative mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2">
                  <i className="ki-duotone ki-eye-slash fs-2"></i>
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                {/* Barra 1: Longitud mínima */}
                <div className="d-flex flex-column align-items-center flex-grow-1 me-2">
                  <div
                    className={`w-100 rounded h-5px mb-1 ${
                      meetsLength ? "bg-success" : "bg-secondary"
                    }`}
                  ></div>
                  <small
                    className={`text-center ${
                      meetsLength ? "text-success" : "text-muted"
                    }`}
                  >
                    8+ characters
                  </small>
                </div>

                {/* Barra 2: Mayúscula */}
                <div className="d-flex flex-column align-items-center flex-grow-1 me-2">
                  <div
                    className={`w-100 rounded h-5px mb-1 ${
                      hasUpperCase ? "bg-success" : "bg-secondary"
                    }`}
                  ></div>
                  <small
                    className={`text-center ${
                      hasUpperCase ? "text-success" : "text-muted"
                    }`}
                  >
                    Uppercase
                  </small>
                </div>

                {/* Barra 3: Número */}
                <div className="d-flex flex-column align-items-center flex-grow-1 me-2">
                  <div
                    className={`w-100 rounded h-5px mb-1 ${
                      hasNumber ? "bg-success" : "bg-secondary"
                    }`}
                  ></div>
                  <small
                    className={`text-center ${
                      hasNumber ? "text-success" : "text-muted"
                    }`}
                  >
                    Number
                  </small>
                </div>

                {/* Barra 4: Carácter especial */}
                <div className="d-flex flex-column align-items-center flex-grow-1">
                  <div
                    className={`w-100 rounded h-5px mb-1 ${
                      hasSpecialChar ? "bg-success" : "bg-secondary"
                    }`}
                  ></div>
                  <small
                    className={`text-center ${
                      hasSpecialChar ? "text-success" : "text-muted"
                    }`}
                  >
                    Symbol
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="fv-row mb-8">
            <input
              type="password"
              placeholder="Repeat Password"
              className="form-control bg-transparent"
            />
          </div>

          {/* Términos */}
          <div className="fv-row mb-8">
            <label className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" />
              <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                I Accept the{" "}
                <a href="#" className="ms-1 link-primary">
                  Terms
                </a>
              </span>
            </label>
          </div>

          {/* Botón */}
          <div className="d-grid mb-10">
            <button type="submit" className="btn btn-primary">
              <span className="indicator-label">Sign up</span>
            </button>
          </div>

          {/* Enlace a Login */}
          <div className="text-gray-500 text-center fw-semibold fs-6">
            Already have an Account?{" "}
            <a href="/login" className="link-primary">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
