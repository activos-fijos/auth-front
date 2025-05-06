import React, { useState } from "react";
import PasswordInput from "../../common/PasswordInput";
import isPasswordValid from "../../../hooks/passwordValidation";
import Button from "../../common/Button";
import { useTranslation } from "react-i18next";

const NewPasswordForm = () => {
  const { t } = useTranslation();
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
    if (!formData.password)
      newErrors.password = "newPassword.errors.passwordRequired";
    if (!formData.newPassword)
      newErrors.newPassword = "newPassword.errors.newPasswordRequired";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "newPassword.errors.termsRequired";
    if (formData.password && !isPasswordValid(formData.password)) {
      newErrors.password = "newPassword.errors.invalidFormat";
    } else if (formData.password !== formData.newPassword) {
      newErrors.newPassword = "newPassword.errors.passwordMismatch";
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
        <form className="form w-100" id="kt_new_password_form">
          <div className="text-center mb-10">
            <h1 className="text-dark fw-bolder mb-3">
              {t("newPassword.title")}
            </h1>
            <div className="text-gray-500 fw-semibold fs-6">
              {t("newPassword.subtitle")} { }
              <a href="/" className="link-primary fw-bold">
                {t("newPassword.loginLink")}
              </a>
            </div>
          </div>
          <PasswordInput
            className="fv-row mb-8"
            name="password"
            placeholder={t("newPassword.password")}
            value={formData.password}
            onChange={handleChance}
            showMeter={true}
            error={t(errors.password)}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="newPassword"
            placeholder={t("newPassword.repeatPassword")}
            value={formData.newPassword}
            onChange={handleChance}
            error={t(errors.newPassword)}
          />
          <div className="fv-row mb-8">
            <label className="form-check form-check-inline">
              <input
                className={`form-check-input ${
                  t(errors.termsAccepted) ? "is-invalid" : ""
                }`}
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChance}
              />
              <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                {t("newPassword.termsText")}
                <span className="ms-1 link-primary cursor-pointer">
                {t("newPassword.termsLink")}
                </span>
              </span>
            </label>
            {errors.termsAccepted && (
              <div className="invalid-feedback d-block">
                {t(errors.termsAccepted)}
              </div> // ✅ Mostrar error
            )}
          </div>
          <Button label={t("newPassword.submit")} onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default NewPasswordForm;
