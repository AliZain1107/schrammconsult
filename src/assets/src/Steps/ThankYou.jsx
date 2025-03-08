import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";


function ThankYou() {
  const [interest, setInterest] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [isLoadingInterest, setIsLoadingInterest] = useState(false);
  const [isLoadingPreference, setIsLoadingPreference] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const leadId = location.state?.leadId;

  useEffect(() => setIsVisible(true), []);

  const handleInterestSubmit = async () => {
    if (!interest || !leadId) return;
    setIsLoadingInterest(true);
    try {
      await updateDoc(doc(db, "leads", leadId), { interest });
      toast.success(t("toast.success.interestSubmitted"), { position: "top-right" });
      setInterest("");
    } catch (error) {
      console.error("Error updating interest:", error);
      toast.error(t("toast.error.updateInterestFailed"), { position: "top-right" });
    } finally {
      setIsLoadingInterest(false);
    }
  };

  const handleContactSubmit = async () => {
    if (!contactPreference || !leadId) return;
    setIsLoadingPreference(true);
    try {
      await updateDoc(doc(db, "leads", leadId), { contactPreference });
      toast.success(t("toast.success.preferenceSubmitted"), { position: "top-right" });
      setContactPreference("");
    } catch (error) {
      console.error("Error updating preference:", error);
      toast.error(t("toast.error.updatePreferenceFailed"), { position: "top-right" });
    } finally {
      setIsLoadingPreference(false);
    }
  };

  const handleBack = () => navigate("/final");

  return (
    <ErrorBoundary>
      <div className={`max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("thankYou.title")}</h1>
        <p className="text-gray-600 mb-4">{t("thankYou.description")}</p>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-600">{t("thankYou.interestLabel")}</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="">{t("thankYou.interestPlaceholder")}</option>
              <option value="Tech">{t("thankYou.interest.tech")}</option>
              <option value="Art">{t("thankYou.interest.art")}</option>
              <option value="Sports">{t("thankYou.interest.sports")}</option>
            </select>
            <button
              onClick={handleInterestSubmit}
              disabled={isLoadingInterest || !interest}
              className="mt-2 w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition disabled:bg-gray-400"
            >
              {isLoadingInterest ? <Loader /> : t("thankYou.interestSubmit")}
            </button>
          </div>
          <div>
            <label className="block mb-2 text-gray-600">{t("thankYou.preferenceLabel")}</label>
            <select
              value={contactPreference}
              onChange={(e) => setContactPreference(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="">{t("thankYou.preferencePlaceholder")}</option>
              <option value="Email">{t("thankYou.preference.email")}</option>
              <option value="Phone">{t("thankYou.preference.phone")}</option>
              <option value="Text">{t("thankYou.preference.text")}</option>
            </select>
            <button
              onClick={handleContactSubmit}
              disabled={isLoadingPreference || !contactPreference}
              className="mt-2 w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition disabled:bg-gray-400"
            >
              {isLoadingPreference ? <Loader /> : t("thankYou.preferenceSubmit")}
            </button>
          </div>
          <div className="flex justify-between items-center">
            {/* <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800 flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{t("backButton")}</span>
            </button> */}
            {/* <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
            </div> */}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default ThankYou;