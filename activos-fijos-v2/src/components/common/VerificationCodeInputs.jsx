import React from "react";

const VerificationCodeInputs = ({
	title = "Verificación de dos pasos",
	maskedData = "******7859",
	digits = 6,
  formData,
  error,
  handleChance,
  inputsRef,
}) => {
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">{title}</h1>
        <div className="text-muted fw-semibold fs-5 mb-5">
          Ingrese el código de verificación que le enviamos a
        </div>
        <div className="fw-bold text-dark fs-3">{maskedData}</div>
      </div>

      <div className="mb-10">
        <div className="fw-bold text-start text-dark fs-6 mb-1 ms-1">
          Escriba su código de seguridad de {digits} dígitos
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
          <div className="text-danger mt-2">Por favor complete los campos.</div>
        )}
      </div>
    </>
  );
};

export default VerificationCodeInputs;
