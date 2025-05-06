import React, { useState } from "react";
import Input from "../../common/Input";
import PasswordInput from "../../common/PasswordInput";
import isPasswordValid from "../../../hooks/passwordValidation";
import Button from "../../common/Button";
import { useTranslation } from "react-i18next";

const SignUpForm = () => {
  const { t } = useTranslation();
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
    if (!formData.email) newErrors.email = "signUp.errors.emailRequired";
    if (!formData.password)
      newErrors.password = "signUp.errors.passwordRequired";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "signUp.errors.confirmPasswordRequired";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "signUp.errors.termsRequired";

    if (formData.password && !isPasswordValid(formData.password)) {
      newErrors.password = "signUp.errors.invalidFormat";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "signUp.errors.passwordMismatch";
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
        <form className="form w-100" id="kt_sign_up_form">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">{t("signUp.title")}</h1>
            <div className="text-gray-500 fw-semibold fs-6">
              {t("signUp.subtitle")}
            </div>
          </div>

          <Input
            className="fv-row mb-8"
            type="email"
            name="email"
            placeholder={t("signUp.email")}
            value={formData.email}
            onChange={handleChance}
            error={t(errors.email)}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="password"
            placeholder={t("signUp.password")}
            value={formData.password}
            onChange={handleChance}
            showMeter={true}
            error={t(errors.password)}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="confirmPassword"
            placeholder={t("signUp.repeatPassword")}
            value={formData.confirmPassword}
            onChange={handleChance}
            error={t(errors.confirmPassword)}
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
                {t("signUp.termsText")}
                <span className="ms-1 link-primary cursor-pointer">
                  {t("signUp.termsLink")}
                </span>
              </span>
            </label>
            {errors.termsAccepted && (
              <div className="invalid-feedback d-block">
                {t(errors.termsAccepted)}
              </div>
            )}
          </div>
          <Button label={t("signUp.submit")} onClick={handleSubmit} />
          <div className="text-gray-500 text-center fw-semibold fs-6">
            {t("signUp.loginPrompt")}{" "}
            <a href="/" className="link-primary">
              {t("signUp.loginLink")}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
