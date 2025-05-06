import React, { useState, useEffect } from "react";
import i18n from "i18next";


const LanguageMenu = () => {
  const [currentLanguage, setCurrentLanguage] = useState({
    name: "Español",
    flag: "spain.svg",
  });

  const languages = [
    { name: "Inglés", flag: "united-states.svg", code:"en" },
    { name: "Español", flag: "spain.svg", code:"es" },
    { name: "Alemán", flag: "germany.svg", code:"de" },
    { name: "Japonés", flag: "japan.svg", code:"ja" },
    { name: "Francés", flag: "france.svg", code:"fr" },
  ];

  useEffect(() => {
    const currentLangCode = i18n.language || "es";
    const currentLang = languages.find((lang) => lang.code === currentLangCode);
    setCurrentLanguage(currentLang);
  }, [i18n.language]);
  

  useEffect(() => {
    if (window.KTMenu) {
      new window.KTMenu(document.querySelector("#kt_language_menu"));
    }
  }, []);

  return (
    <div className="me-10">
      <button
        className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        data-kt-menu-offset="0px, 0px"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/media/flags/${currentLanguage.flag}`}
          className="w-20px h-20px rounded me-3"
          alt="flag"
        />
        <span className="me-1">{currentLanguage.name}</span>
        <i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
      </button>

      <div
        id="kt_language_menu"
        className=" data-kt-menu menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
      >
        {languages.map((lang) => (
          <div key={lang.name} className="menu-item px-3">
            <a
              href="/"
              className="menu-link d-flex px-5"
              onClick={(e) => {
                e.preventDefault();
                setCurrentLanguage(lang);
                i18n.changeLanguage(lang.code)
              }}
            >
              <span className="symbol symbol-20px me-4">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/media/flags/${lang.flag}`}
                  className="rounded-1"
                  alt={lang.name}
                />
              </span>
              <span>{lang.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageMenu;
