import React, { useState } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { useTranslation } from "react-i18next";

const ResetPasswordForm = () => {
  const { t } = useTranslation();
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
    if (!formData.email) newErrors.email = t("resetPassword.errors.emailRequired");

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
              {t("resetPassword.title")}
            </h1>
            <div className="text-gray-500 fw-semibold fs-6">
            {t("resetPassword.subtitle")}
            </div>
          </div>
          <Input
            className="fv-row mb-8"
            type="email"
            name="email"
            placeholder={t("resetPassword.email")}
            value={formData.email}
            onChange={handleChance}
            error={errors.email}
          />
          <div className="d-flex flex-wrap justify-content-center pb-lg-0">
            <Button label={t("resetPassword.submit")} onClick={handleSubmit} />
            <a href="/" className="btn btn-light">
            {t("resetPassword.cancel")}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
