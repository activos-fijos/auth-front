import React, { useState } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
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
          <div className="text-center mb-10">
            <h1 className="text-dark fw-bolder mb-3">
              ¿Has olvidado tu contraseña?
            </h1>
            <div className="text-gray-500 fw-semibold fs-6">
              Ingresa tu correo electrónico para restablecer tu contraseña.
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
          <div className="d-flex flex-wrap justify-content-center pb-lg-0">
            <Button label="Enviar" onClick={handleSubmit} />
            <a href="/" className="btn btn-light">
              Cancelar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
