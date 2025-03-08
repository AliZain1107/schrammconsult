import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { db } from "./firebase";
import { useTranslation } from "react-i18next";

import { AnimatePresence, motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import FinalStep from "./Steps/FinalStep";
import ThankYou from "./Steps/ThankYou";
import Dashboard from "./Dashboard/Dashboard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FormProvider } from "./contexts/FormContext";
import ContentSections from "./ContentSection";

import tick from "./assets/tick.svg";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <FormProvider>
      <div className="min-h-screen w-screen overflow-x-hidden  flex flex-col">
        <header className="w-full bg-white ">
          <div className=" px-4 py-1 flex items-center justify-center text-center bg-[#47ADA4]  ">
            <h2 className="max-w-7xl mx-auto !text-white ">Best PKV Terrifs</h2>
          </div>
          <div className=" max-w-7xl mx-auto px-4 flex  justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">{t("header.title")} </h1>
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 !py-px rounded-md ${i18n.language === "en" ? " text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {t("language.english")}
              </button>
              <button
                onClick={() => changeLanguage("de")}
                className={`px-3 py-px rounded-md ${i18n.language === "de" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {t("language.german")}
              </button>
            </div>
          </div>
        </header>
        <main className=" flex-grow" >
          <div className="steps-container ">
            <div className="inner-container relative max-w-7xl mx-auto px-4">
          
          <div className="relative z-10">
        <h1 className="text-start !text-[#4a617b] sm:text-center font-medium">{t("mainpage.title")}</h1>
          <p className="text-start w-[140px] text-[#1475b1] sm:w-full  sm:text-center font-light mb-4">{t("mainpage.description")}</p>
          </div>
          <div className="z-40 relative hidden md:block ">

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedRoute><Step1 /></AnimatedRoute>} />
              <Route path="/step2" element={<AnimatedRoute><Step2 /></AnimatedRoute>} />
              <Route path="/step3" element={<AnimatedRoute><Step3 /></AnimatedRoute>} />
              <Route path="/final" element={<AnimatedRoute><FinalStep /></AnimatedRoute>} />
              <Route path="/thank-you" element={<AnimatedRoute><ThankYou /></AnimatedRoute>} />
            </Routes>
          </AnimatePresence>
          </div>
    

            </div>
            <Routes>
          <Route path="/dashboard" element={<AnimatedRoute><Dashboard /></AnimatedRoute>} />

      </Routes>
          </div>

          {/*  Header-Bottom*/}
          <div className="bg-[#47ada4] header-bottom">


          <div className="z-40 relative pt-12 mx-4   block md:hidden">

<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<AnimatedRoute><Step1 /></AnimatedRoute>} />
    <Route path="/step2" element={<AnimatedRoute><Step2 /></AnimatedRoute>} />
    <Route path="/step3" element={<AnimatedRoute><Step3 /></AnimatedRoute>} />
    <Route path="/final" element={<AnimatedRoute><FinalStep /></AnimatedRoute>} />
    <Route path="/thank-you" element={<AnimatedRoute><ThankYou /></AnimatedRoute>} />
    <Route path="/dashboard" element={<AnimatedRoute><Dashboard /></AnimatedRoute>} />
  </Routes>
</AnimatePresence>
</div>

            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start  sm:pt-4">
              {/* Cards */}
              <div className="flex space-x-2">
                  {/* icon */} 
                  <img src={tick} alt="" />
                  <div className="text-white">
                    <h2>Best price-performance mix</h2>
                    <p>with our test winner comparison</p>
                  </div>
              </div>

              <div className="flex space-x-2">
                  {/* icon */}
                  <img src={tick} alt="" />
                  <div className="text-white">
                    <h2>Non-binding initial consultation
                    </h2>
                    <p>preventive check in just 10 minutes</p>
                  </div>
              </div>

              <div className="flex space-x-2">
                  {/* icon */}
                  <img src={tick} alt="" />
                  <div className="text-white">
                    <h2>Get professional advice</h2>
                    <p>by qualified industry experts</p>
                  </div>
              </div>

              <div className="flex space-x-2">
                  {/* icon */}
                  <img src={tick} alt="" />
                  <div className="text-white">
                    <h2>High customer satisfaction</h2>
                    <p>Over 390,000 interested parties insured</p>
                  </div>
              </div>

            </div>

          </div>
          <ContentSections />
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-[1800px] mx-auto px-4 text-center">
            <p>{t("footer.text")}</p>
          </div>
        </footer>

        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </FormProvider>
  );
}

function AnimatedRoute({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default App;