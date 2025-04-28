import React, { useState, useRef } from "react";

const TwoFactorForm = () => {
  const [formData, setFormData] = useState({
    code_1: "",
    code_2: "",
    code_3: "",
    code_4: "",
    code_5: "",
    code_6: "",
  });

  const inputsRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [error, setError] = useState(false);

  const handleChance = (e, index) => {
    const { name, value } = e.target;
    if (/^\d$/.test(value)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (index < inputsRef.length - 1) {
        inputsRef[index + 1].current.focus();
      }
      setError(false);
    } else if (value === "") {
      setFormData((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = () => {
    const allFilled = Object.values(formData).every((v) => v !== "");
    if (!allFilled) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form
          className="form w-100"
          id="kt_sign_in_form"
        >
          <div class="text-center mb-10">
            <img
              alt="Logo"
              class="mh-125px"
              src="assets/media/svg/misc/smartphone-2.svg"
            />
          </div>
          <div class="text-center mb-10">
            <h1 class="text-dark mb-3">Verificación de dos pasos</h1>
            <div class="text-muted fw-semibold fs-5 mb-5">
              Ingrese el código de verificación que le enviamos a
            </div>
            <div class="fw-bold text-dark fs-3">******7859</div>
          </div>
          <div class="mb-10">
            <div class="fw-bold text-start text-dark fs-6 mb-1 ms-1">
              Escriba su código de seguridad de 6 dígitos
            </div>
            <div className="d-flex flex-wrap flex-stack">
              {Object.keys(formData).map((key, index) => (
                <input
                  key={key}
                  type="text"
                  name={key}
                  maxLength="1"
                  className={`form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2 ${
                    error && !formData[key] ? "border-danger" : ""
                  }`}
                  value={formData[key]}
                  onChange={(e) => handleChance(e, index)}
                  ref={inputsRef[index]}
                />
              ))}
            </div>
            {error && (
              <div className="text-danger mt-2">
                Por favor complete los campos.
              </div>
            )}
          </div>
          <div class="d-flex flex-center">
            <button type="button" class="btn btn-lg btn-primary fw-bold mb-5" onClick={handleSubmit}>
              <span class="indicator-label">Enviar</span>
              <span class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
        <div class="text-center fw-semibold fs-5">
          <span class="text-muted me-1">¿No recibiste el código?</span>
          <span class="link-primary fs-5 me-1 cursor-pointer">Reenviar</span>
          <span class="text-muted me-1">o</span>
          <span class="link-primary fs-5 cursor pointer">Llámanos</span>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorForm;
