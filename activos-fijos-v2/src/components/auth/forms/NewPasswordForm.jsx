import React, { useState } from "react";
import PasswordInput from "../../common/PasswordInput";
import isPasswordValid from "../../../hooks/passwordValidation";

const NewPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    password: "",
    newPassword: "",
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
    if (!formData.password) newErrors.password = "La contraseña es requerida";
    if (!formData.newPassword)
      newErrors.newPassword = "Por favor repite la contraseña";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "Debes aceptar los términos y condiciones";
    if (formData.password && !isPasswordValid(formData.password)) {
      newErrors.password = "El formato no es correcto";
    } else if (formData.password !== formData.newPassword) {
      newErrors.newPassword = "Las contraseñas no coinciden";
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
          id="kt_new_password_form"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-10">
            <h1 className="text-dark fw-bolder mb-3">
              Establecer nueva contraseña
            </h1>
            <div className="text-gray-500 fw-semibold fs-6">
              ¿Ya has restablecido la contraseña?
              <a href="/" className="link-primary fw-bold">
                Iniciar sesión
              </a>
            </div>
          </div>
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
            name="newPassword"
            placeholder="Repetir contraseña"
            value={formData.newPassword}
            onChange={handleChance}
            error={errors.newPassword}
          />
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
          <div className="d-grid mb-10">
            <button type="submit" className="btn btn-primary">
              <span className="indicator-label">Enviar</span>
              <span className="indicator-progress">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordForm;
