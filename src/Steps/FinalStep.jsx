import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com";
import { useForm } from "../contexts/FormContext";
import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function FinalStep() {
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => setIsVisible(true), []);

  const checkDuplicateEmail = async () => {
    const q = query(collection(db, "leads"), where("email", "==", formData.email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setEmailError("");

    try {
      const emailExists = await checkDuplicateEmail();
      if (emailExists) {
        setEmailError(t("finalStep.emailError"));
        setIsLoading(false);
        toast.error("Email Already Exists");
        return;
      }

      const docRef = await addDoc(collection(db, "leads"), { ...formData, timestamp: new Date() });
      const emailData = {
        to_email: "aleezain0012@gmail.com",
        from_name: "Quiz App",
        message: `
          New Lead Submitted:
          Insurance Type: ${formData.insuranceType}
          Professional Status: ${formData.professionalStatus}
          Package: ${formData.package}
          Additional Options: ${formData.additionalOptions.join(", ")}
          ZIP Code: ${formData.zipCode}
          Date of Birth: ${formData.dateOfBirth}
          First Name: ${formData.firstName}
          Last Name: ${formData.lastName}
          Street: ${formData.street}
          Telephone: ${formData.telephone}
          Email: ${formData.email}
        `,
      };
      // await emailjs.send("your_service_id", "your_template_id", emailData, "your_user_id");
      navigate("/thank-you", { state: { leadId: docRef.id } });
    } catch (error) {
      console.error("Error in FinalStep:", error);
      toast.error("An error occurred while submitting. Please try again.");
    } finally {
      setIsLoading(false);
      toast.success(t("toast.success.formSubmitted"),{position:'top-right'});
    }
  };

  const handleBack = () => navigate("/step3");

  return (
    <ErrorBoundary>
      <div className={`max-w-lg mx-auto  bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-[#80CBC4] rounded-full" style={{ width: "100%" }}></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("finalStep.title")}</h1>
        <form onSubmit={handleSubmit}>
          {["firstName", "lastName", "street", "telephone", "email"].map((field) => (
            <label key={field} className="block mb-4">
              <span className="text-gray-600">{t(`finalStep.${field}`)} *</span>
              <input
                type={field === "email" ? "email" : field === "telephone" ? "tel" : "text"}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
              {field === "email" && emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </label>
          ))}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition disabled:bg-gray-400"
          >
            {isLoading ? <Loader /> : t("finalStep.submit")}
          </button>
          <button
            onClick={handleBack}
            className="mt-2 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{t("backButton")}</span>
          </button>
        </form>
        <p className="text-secondary mt-4 text-center">{t("finalStep.footer")}</p>
      </div>
    </ErrorBoundary>
  );
}

export default FinalStep;