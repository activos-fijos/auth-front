import React, { useState } from "react";
import PasswordInput from "../common/PasswordInput";

const NewPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });

  const handleChance = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_new_password_form">
          <div class="text-center mb-10">
            <h1 class="text-dark fw-bolder mb-3">Establecer nueva contraseña</h1>
            <div class="text-gray-500 fw-semibold fs-6">
              ¿Ya has restablecido la contraseña?
              <a href="/" class="link-primary fw-bold">
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
          />

          <PasswordInput
            className="fv-row mb-8"
            name="newPassword"
            placeholder="Repetir contraseña"
            value={formData.newPassword}
            onChange={handleChance}
          />
          <div class="fv-row mb-8">
            <label class="form-check form-check-inline">
              <input
                class="form-check-input cursor-pointer"
                type="checkbox"
                name="toc"
                value="1"
              />
              <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                Yo acepto los
                <span className="ms-1 link-primary cursor-pointer">
                  Términos y condiciones
                </span>
              </span>
            </label>
          </div>
          <div class="d-grid mb-10">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span class="indicator-label">Enviar</span>
              <span class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordForm;
