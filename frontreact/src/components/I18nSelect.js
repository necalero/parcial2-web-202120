import React, { useState } from "react";
import { LOCALES } from "../i18n/locales";
import "./I18nSelect.scss";

export const I18nSelect = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <div className="lang-select-wrapper">
      <div className="lang-select" onClick={()=>{setLocale(LOCALES.ENGLISH)}}><p>EN</p></div>
      <div className="lang-select" onClick={()=>{setLocale(LOCALES.SPANISH)}}><p>ES</p></div>
      <div className="lang-select" onClick={()=>{setLocale(LOCALES.GERMAN)}}><p>GE</p></div>
      <div className="lang-select" onClick={()=>{setLocale(LOCALES.FRENCH)}}><p>FR</p></div>
    </div>
  );
};
