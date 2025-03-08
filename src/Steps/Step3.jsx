import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../contexts/FormContext";
import ErrorBoundary from "../ErrorBoundary";
import { useTranslation } from "react-i18next";
import tick from '../assets/tickPkgs.svg'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'


function Step3() {
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Comfort");
  const [zipError, setZipError] = useState("");
  const [dobError, setDobError] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

const packages = [{name:"basic",icon: star1}, {name:"comfort",icon:star2}, {name:"premium",icon:star3}];

  useEffect(() => setIsVisible(true), []);

  // Package and Options Logic (from Step3.js)
  const handlePackageChange = (pkg) => {
    setFormData({ ...formData, package: pkg });
  setSelectedPackage(pkg);

};

  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     additionalOptions: checked
  //       ? [...prev.additionalOptions, value]
  //       : prev.additionalOptions.filter((opt) => opt !== value),
  //   }));
  // };

  // ZIP Code and DOB Logic (from Step4.js)
  const validateZipCode = (zip) => {
    if (!/^\d{5}$/.test(zip)) {
      setZipError(t("step4.zipError"));
      return false;
    }
    setZipError("");
    return true;
  };

  const validateDob = () => {
    if (!day || !month || !year) {
      setDobError(t("step4.dobError.required"));
      return false;
    }

    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    if (
      parsedDay < 1 || parsedDay > 31 ||
      parsedMonth < 1 || parsedMonth > 12 ||
      parsedYear < 1900 || parsedYear > 2025
    ) {
      setDobError(t("step4.dobError.invalid"));
      return false;
    }

    const dob = new Date(parsedYear, parsedMonth - 1, parsedDay);
    if (
      dob.getDate() !== parsedDay ||
      dob.getMonth() + 1 !== parsedMonth ||
      dob.getFullYear() !== parsedYear
    ) {
      setDobError(t("step4.dobError.invalid"));
      return false;
    }

    const today = new Date("2025-03-01");
    let age = today.getFullYear() - parsedYear;
    const monthDiff = today.getMonth() - (parsedMonth - 1);
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < parsedDay)) age--;
    if (age < 18) {
      setDobError(t("step4.dobError.age"));
      return false;
    }

    setDobError("");
    setFormData({ ...formData, dateOfBirth: `${parsedMonth}/${parsedDay}/${parsedYear}` });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateZipCode(formData.zipCode) && validateDob()) navigate("/final");
  };

  const handleBack = () => navigate("/step2");

  return (
    <ErrorBoundary>
      <div className={`max-w-lg mx-auto bg-[#fffffffe]   p-6 rounded-lg custom-shadow transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-blue-400 rounded-full" style={{ width: "75%" }}></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("step3.title")}</h1>

        {/* Package Selection (from Step3.js) */}
        <div className="flex  justify-between mb-6">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              onClick={() => handlePackageChange(pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1))}
              className={`p-4 px-6  sm:px-10 lg:px-10  flex flex-col items-center justify-center gap-6 border rounded-md cursor-pointer transition ${
                formData.package === (pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1)) ? "border-blue-500 border-2 bg-blue-100" : "border-gray-300"
              }`}
            >
              <img  width={60} className="!max-h-[60px] object-cover overflow-hidden" src={pkg.icon} alt="" />
              {/* <Star3 /> */}
              <span className="text-gray-600">{t(`step3.option.${pkg.name}`)} </span>
            </div>
          ))}
        </div>


<div className="border rounded-md p-4 relative z-10 bg-white ">
         
        {/* Additional Options (from Step3.js) */}
        {
          selectedPackage === "Basic" &&
        <div className="space-y-4 flex flex-col  mb-6">
           <div className="absolute bg-white left-[8%] top-[-9px] z-[-999] rotate-[45deg] border border-b-0 w-4 h-4 border-r-0"></div>
          {["accommodation", "treatment", "dental"].map((option) => (
            <div key={option} className="flex pkgOption items-center space-x-2 border-b">
              {/* <img width={120} src={tick} alt="" /> */}
              <svg width="14" height="14" viewBox="0 0 85.04 68.03">
  <path
    fill="#FFA200"
    d="M77 0a8.1 8.1 0 0 0-5.53 2.15l-40.3 45.76-17.65-21a8.27 8.27 0 0 0-11.3.14 8.11 8.11 0 0 0 .1 11.26l.23.25 22.89 27.32a8.27 8.27 0 0 0 11.17 0L82.67 13.5a7.79 7.79 0 0 0 0-11.19A8.13 8.13 0 0 0 77 0"
  />
</svg>
              <span className="text-gray-600">{t(`step3.optionBasic.${option}`)}</span>
            </div>
          ))}
        </div>
        }

          {
          selectedPackage === "Comfort" &&
        <div className="space-y-4 mb-6">
           <div className="absolute bg-white top-[-9px] left-[40%] z-[-999] rotate-[45deg] border border-b-0 w-4 h-4 border-r-0"></div>
          
          {["accommodation", "treatment", "dental"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
            <svg width="14" height="14" viewBox="0 0 85.04 68.03">
  <path
    fill="#FFA200"
    d="M77 0a8.1 8.1 0 0 0-5.53 2.15l-40.3 45.76-17.65-21a8.27 8.27 0 0 0-11.3.14 8.11 8.11 0 0 0 .1 11.26l.23.25 22.89 27.32a8.27 8.27 0 0 0 11.17 0L82.67 13.5a7.79 7.79 0 0 0 0-11.19A8.13 8.13 0 0 0 77 0"
  />
</svg>
              <span className="text-gray-600">{t(`step3.optionComfort.${option}`)}</span>
            </div>
          ))}
        </div>
        }
         {
          selectedPackage === "Premium" &&
        <div className="space-y-4 mb-6">
           <div className="absolute bg-white top-[-9px] right-[16%] z-[-999] rotate-[45deg] border border-b-0 w-4  h-4 border-r-0"></div>
          
          {["accommodation", "treatment", "dental"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
            <svg width="14" height="14" viewBox="0 0 85.04 68.03">
  <path
    fill="#FFA200"
    d="M77 0a8.1 8.1 0 0 0-5.53 2.15l-40.3 45.76-17.65-21a8.27 8.27 0 0 0-11.3.14 8.11 8.11 0 0 0 .1 11.26l.23.25 22.89 27.32a8.27 8.27 0 0 0 11.17 0L82.67 13.5a7.79 7.79 0 0 0 0-11.19A8.13 8.13 0 0 0 77 0"
  />
</svg>
              <span className="text-gray-600">{t(`step3.optionPremium.${option}`)}</span>
            </div>
          ))}
        </div>
        }

</div>

        {/* ZIP Code (from Step4.js) */}
        <label className="block mb-4">
          <span className="text-gray-600">{t("step4.zipCode")} *</span>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => {
              setFormData({ ...formData, zipCode: e.target.value });
              setZipError("");
            }}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
          {zipError && <p className="text-red-500 text-sm mt-1">{zipError}</p>}
        </label>

        {/* Date of Birth (from Step4.js) */}
        <div className="block mb-4">
          <span className="text-gray-600 mb-2 block">{t("step4.dob")} *</span>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder={t("step4.day")}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min="1"
              max="31"
              required
              className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
            <input
              type="number"
              placeholder={t("step4.month")}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              min="1"
              max="12"
              required
              className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
            <input
              type="number"
              placeholder={t("step4.year")}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min="1900"
              max="2025"
              required
              className="w-1/4 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          {dobError && <p className="text-red-500 text-sm mt-1">{dobError}</p>}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-gray-600 px-4 hover:text-gray-800 flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{t("backButton")}</span>
          </button>
          <button
            onClick={handleSubmit}
            className=" text-white py-1 text-xs px-4 rounded-md hover:bg-orange-600 transition"
          >
            {t("step4.submit")}
          </button>
        
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Step3;