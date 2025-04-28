import React, { useState } from "react";
import Input from "../../common/Input";
import PasswordInput from "../../common/PasswordInput";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChance = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "El correo es requerido";
    if (!formData.password) newErrors.password = "La contraseña es requerida";

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
          id="kt_sign_in_form"
        >
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Iniciar sesión</h1>
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
            className="fv-row mb-3"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChance}
            error={errors.password}
          />

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            <div></div>
            <a href="/resetpassword" className="link-primary">
              ¿Has olvidado tu contraseña?
            </a>
          </div>

          <div className="d-grid mb-10">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              <span className="indicator-label">Iniciar sesión</span>
            </button>
          </div>

          <div className="text-gray-500 text-center fw-semibold fs-6">
            ¿Aún no eres miembro?{" "}
            <a href="/singup" className="link-primary">
              Regístrate
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
