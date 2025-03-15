import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";
import ErrorBoundary from "../ErrorBoundary";
import { useTranslation } from "react-i18next";

import LegallyIcon from '../assets/icons/Step1/LegallyIcon.jsx'
import NotInsured from "../assets/icons/Step1/NotInsuredIcon.jsx";
import PrivateIcon from "../assets/icons/Step1/PrivateIcon.jsx";


function Step1() {
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const handleSelect = (type) => {
    setFormData({ ...formData, insuranceType: type });
    navigate("/step2");
  };

  const options = [
    { value: "Statutory", key: "step1.option.statutory", icon: <LegallyIcon /> },
    { value: "Private", key: "step1.option.private", icon: <PrivateIcon /> },
    { value: "Not insured", key: "step1.option.notInsured", icon: <NotInsured /> },
  ];

  return (
    <ErrorBoundary>
      <div className={`max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-[#80CBC4]  rounded-full" style={{ width: "25%" }}></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("step1.title")}</h1>
        <div className="space-y-4 mb-6">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`p-4 flex items-center  gap-4 border rounded-md cursor-pointer transition ${
                formData.insuranceType === option.value ? "border-[#FFB433] border-2" : "border-gray-300"
              }`}
            >
             
              {/* <img width={120} src={option.icon} alt="" /> */}
              <span>{option.icon}</span>
              <span className="text-gray-600">{t(option.key)}</span>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div> */}
      </div>
    </ErrorBoundary>
  );
}

export default Step1;