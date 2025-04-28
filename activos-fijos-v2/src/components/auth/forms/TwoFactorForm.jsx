import React, { useState, useRef } from "react";
import VerificationCodeInputs from "../../common/VerificationCodeInputs";

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
          <div className="text-center mb-10">
            <img
              alt="Logo"
              className="mh-125px"
              src="assets/media/svg/misc/smartphone-2.svg"
            />
          </div>
          <VerificationCodeInputs
            formData={formData}
            error={error}
            handleChance={handleChance}
            inputsRef={inputsRef}
          />
          <div className="d-flex flex-center">
            <button type="button" className="btn btn-lg btn-primary fw-bold mb-5" onClick={handleSubmit}>
              <span className="indicator-label">Enviar</span>
              <span className="indicator-progress">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
        <div className="text-center fw-semibold fs-5">
          <span className="text-muted me-1">¿No recibiste el código?</span>
          <span className="link-primary fs-5 me-1 cursor-pointer">Reenviar</span>
          <span className="text-muted me-1">o</span>
          <span className="link-primary fs-5 cursor pointer">Llámanos</span>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorForm;
