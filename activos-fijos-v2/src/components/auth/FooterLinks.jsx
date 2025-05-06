import React from "react";
import { useTranslation } from "react-i18next";

const FooterLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex fw-semibold text-primary fs-base gap-5">
      <a href="/terms" className="text-hover-primary">
        {t("footer.terms")}
      </a>
      <a href="/plans" className="text-hover-primary">
        {t("footer.plans")}
      </a>
      <a href="/contact" className="text-hover-primary">
        {t("footer.contact")}
      </a>
    </div>
  );
};

export default FooterLinks;
