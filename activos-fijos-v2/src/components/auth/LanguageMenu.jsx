import React, { useState } from 'react';

const LanguageMenu = () => {
  const [currentLanguage, setCurrentLanguage] = useState({
    name: "English",
    flag: "united-states.svg"
  });

  const languages = [
    { name: "English", flag: "united-states.svg" },
    { name: "Spanish", flag: "spain.svg" },
    { name: "German", flag: "germany.svg" },
    { name: "Japanese", flag: "japan.svg" },
    { name: "French", flag: "france.svg" }
  ];

  return (
    <div className="me-10">
      <button 
        className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
        data-kt-menu-trigger="click"
      >
        <img 
          src={`${process.env.PUBLIC_URL}/assets/media/flags/${currentLanguage.flag}`} 
          className="w-20px h-20px rounded me-3" 
          alt="flag" 
        />
        <span className="me-1">{currentLanguage.name}</span>
        <i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
      </button>
      
      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7">
        {languages.map((lang) => (
          <div key={lang.name} className="menu-item px-3">
            <a 
              href="#" 
              className="menu-link d-flex px-5"
              onClick={() => setCurrentLanguage(lang)}
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