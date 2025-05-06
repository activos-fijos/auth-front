import React, { useState } from "react";
import Input from "../../common/Input";
import PasswordInput from "../../common/PasswordInput";
import Button from "../../common/Button";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
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
    if (!formData.email) newErrors.email = t("login.errors.emailRequired");
    if (!formData.password) newErrors.password = t("login.errors.passwordRequired");

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_in_form">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">{t("login.title")}</h1>
            <div className="text-gray-500 fw-semibold fs-6">
              {t("login.subtitle")}
            </div>
          </div>
          <Input
            className="fv-row mb-8"
            type="email"
            name="email"
            placeholder={t("login.email")}
            value={formData.email}
            onChange={handleChance}
            error={errors.email}
          />

          <PasswordInput
            className="fv-row mb-3"
            name="password"
            placeholder={t("login.password")}
            value={formData.password}
            onChange={handleChance}
            error={errors.password}
          />

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            <div></div>
            <a href="/resetpassword" className="link-primary">
              {t("login.forgotPassword")}
            </a>
          </div>
          <Button label={t("login.submit")}onClick={handleSubmit} />
          <div className="text-gray-500 text-center fw-semibold fs-6">
            {t("login.registerPrompt")}{" "}
            <a href="/singup" className="link-primary">
              {t("login.registerLink")}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
