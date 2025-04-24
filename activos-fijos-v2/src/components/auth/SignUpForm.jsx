import React, { useState } from "react";
import Input from "../common/Input";
import PasswordInput from "../common/PasswordInput";
import isPasswordValid from "../../hooks/passwordValidation";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: "",
  });

  const handleChance = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "El correo es requerido";
    if (!formData.password) newErrors.password = "La contraseña es requerida";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Por favor verifica la contraseña";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "Debes aceptar los términos y condiciones";

    if (formData.password && !isPasswordValid(formData.password)) {
      newErrors.password = "El formato no es correcto";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form
          className="form w-100"
          id="kt_sign_up_form"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Regístrate</h1>
            <div className="text-gray-500 fw-semibold fs-6">
              Tus campañas sociales
            </div>
          </div>

          <Input
            className="fv-row mb-8"
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChance}
            error={errors.email}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChance}
            showMeter={true}
            error={errors.password}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="confirmPassword"
            placeholder="Repetir contraseña"
            value={formData.confirmPassword}
            onChange={handleChance}
            error={errors.confirmPassword}
          />

          {/* Términos */}
          <div className="fv-row mb-8">
            <label className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  errors.termsAccepted ? "is-invalid" : ""
                }`}
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChance}
              />
              <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                Yo acepto los
                <span className="ms-1 link-primary cursor-pointer">
                  Términos y condiciones
                </span>
              </span>
            </label>
            {errors.termsAccepted && (
              <div className="invalid-feedback d-block">
                {errors.termsAccepted}
              </div> // ✅ Mostrar error
            )}
          </div>

          {/* Botón */}
          <div className="d-grid mb-10">
            <button type="submit" className="btn btn-primary">
              <span className="indicator-label">Regístrate</span>
            </button>
          </div>

          {/* Enlace a Login */}
          <div className="text-gray-500 text-center fw-semibold fs-6">
            ¿Ya tienes una cuenta?{" "}
            <a href="/" className="link-primary">
              Iniciar sesión
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
