import React from "react";
import { useTranslation } from "react-i18next";

const VerificationCodeInputs = ({
  title = "",
  maskedData = "",
  digits = 6,
  formData,
  error,
  handleChance,
  inputsRef,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">{title}</h1>
        <div className="text-muted fw-semibold fs-5 mb-5">
          {t("verificationCodeInputs.instruction")}
        </div>
        <div className="fw-bold text-dark fs-3">{maskedData}</div>
      </div>

      <div className="mb-10">
        <div className="fw-bold text-start text-dark fs-6 mb-1 ms-1">
          {t("verificationCodeInputs.inputInstruction1")}
          {digits}
          {t("verificationCodeInputs.inputInstruction2")}
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
          <div className="text-danger mt-2">{t("verificationCodeInputs.error")}</div>
        )}
      </div>
    </>
  );
};

export default VerificationCodeInputs;
