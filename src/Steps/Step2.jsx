import React, { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from "../contexts/FormContext";
import ErrorBoundary from "../ErrorBoundary";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

import { FaBriefcase, FaGraduationCap, FaHome, FaPaintBrush, FaQuestion, FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
// import freelancerIcon from '../assets/FreelancerIcon.svg'
import freelancerIcon from '../assets/FreelancerIcon.svg'
import FreelancerIcon from "../assets/icons/Step2/Freelancer";
import EmployeeIcon from "../assets/icons/Step2/EmployeeIcon";
import CivilServant from "../assets/icons/Step2/CivilServant";
import TraineeIcon from "../assets/icons/Step2/TraineeIcon";
import Student from "../assets/icons/Step2/StudentIcon";
import StudentB from "../assets/icons/Step2/StudentB";
import Housewife from "../assets/icons/Step2/HousewifeIcon";
import UnEmployedIcon from "../assets/icons/Step2/UnEmployedIcon";
import Pensioner from "../assets/icons/Step2/PensionerIcon";


function Step2() {
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  const [showEmployeeQuestion, setShowEmployeeQuestion] = useState(false); // Track if Employee is selected
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false); // Track if No is selected
  const [selectedOptions, setSelectedOptions] = useState([]); // Track multiple selections
  // const { formData, setFormData } = useForm();
  // const navigate = useNavigate();
  // const { t } = useTranslation();
  // const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenwidth] = useState();
  // const sliderRef = useRef(null);

  const options = [
    { value: "Freelancer, Self-employed", key: "step2.option.freelancer", icon: <FreelancerIcon/> },
    { value: "Employee", key: "step2.option.employee", icon: <EmployeeIcon /> },
    { value: "Civil Servant", key: "step2.option.civilServant", icon: <CivilServant /> },
    { value: "Trainee", key: "step2.option.trainee", icon: <TraineeIcon /> },
    { value: "Student", key: "step2.option.student", icon: <Student /> },
    { value: "Housewife", key: "step2.option.homemaker", icon: <Housewife /> },
    // { value: "Retiree", key: "step2.option.retiree", icon: <FaUser /> },
    { value: "Unemployed", key: "step2.option.unemployed", icon: <UnEmployedIcon /> },
    { value: "Student", key: "step2.option.student", icon: <StudentB /> },
    // { value: "Artist", key: "step2.option.artist", icon: <FaPaintBrush /> },
    { value: "Pensioner", key: "step2.option.other", icon: <Pensioner /> },
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to 1 slide, adjusted by responsive settings
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Desktop (above 1024px)
        settings: {
          slidesToShow: 1, // Show 1 slide with 4 options (2x2 grid) on desktop
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile (below 640px)
        settings: {
          slidesToShow: 1, // Show 1 slide with 1 option (1 column) on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(function(){
      (setScreenwidth(window.innerWidth));
    // })
  },[])
 

useEffect(function(){
window.addEventListener('resize', function(){
  (setScreenwidth(window.innerWidth));
})

},[screenWidth])
useEffect(() => {
  setIsVisible(true);
  if (sliderRef.current) {
    sliderRef.current.slickGoTo(0);
  }
  return () => {
    if (sliderRef.current) {
      try {
        sliderRef.current.slickPause();
      } catch (error) {
        console.error("Error during slider cleanup:", error);
      }
    }
  };
}, []);

const handleChange = (option) => {
  setFormData({ ...formData, professionalStatus: option });
  if (option === "Employee") {
    setShowEmployeeQuestion(true); // Show the income question
  } else {
    navigate("/step3"); // Go to Step 3 for other options
  }
};

const handleIncomeResponse = (response) => {
  setFormData({ ...formData, incomeAbove73800: response });
  if (response === "Yes") {
    navigate("/step3"); // Go to Step 3 if Yes
  } else {
    setShowAdditionalOptions(true); // Show additional options if No
  }
};

const handleAdditionalOptionToggle = (option) => {
  setSelectedOptions((prev) =>
    prev.includes(option)
      ? prev.filter((item) => item !== option)
      : [...prev, option]
  );
};

const handleNext = () => {
  setFormData({ ...formData, additionalOptions: selectedOptions });
  navigate("/step3");
};

const handleBack = () => {
  if (showAdditionalOptions) {
    setShowAdditionalOptions(false);
    setSelectedOptions([]);
  } else if (showEmployeeQuestion) {
    setShowEmployeeQuestion(false);
  } else {
    navigate("/");
  }
};

  // Group options into sets of 2 for mobile and 4 for desktop
  const groupedOptions = [];
  if(screenWidth<640){
  for (let i = 0; i < options.length; i += 2) {
    groupedOptions.push(options.slice(i, i + 2)); // Group into sets of 4 for desktop 2x2 grid
    }}
    else
  for (let i = 0; i < options.length; i += 4) {
   
    groupedOptions.push(options.slice(i, i + 4)); // Group into sets of 4 for desktop 2x2 grid
  }


  useEffect(() => {
    setIsVisible(true);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Force re-render on mount
    }

    return () => {
      if (sliderRef.current) {
        try {
          sliderRef.current.slickPause(); // Pause slider on unmount
        } catch (error) {
          console.error("Error during slider cleanup:", error);
        }
      }
    };
  }, []);

  // const handleChange = (option) => {
  //   setFormData({ ...formData, professionalStatus: option });
  //   navigate("/step3");
  // };

  // const handleBack = () => navigate("/");

  return (
    <ErrorBoundary>
    <div className={`max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
        <div className="h-1 bg-[#80CBC4]  rounded-full" style={{ width: "50%" }}></div>
      </div>
      {!showEmployeeQuestion && !showAdditionalOptions && (
        <>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t("step2.title")}</h1>
          <Slider ref={sliderRef} {...settings} className="mb-6">
            {groupedOptions.map((group, index) => (
              <div key={index} className="px-2">
                <div className="grid grid-cols-2 gap-4 bg-light-green-100 p-4 rounded-lg">
                  {group.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChange(option.value)}
                      className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md bg-white hover:!bg-orange-50 transition"
                    >
                      <span className="text-4xl text-orange-500 mb-2">{option.icon}</span>
                      <span className="text-sm text-center text-gray-800">{t(option.key)}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
      {showEmployeeQuestion && !showAdditionalOptions && (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          
       

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Do you earn at least 73,800 euros gross per year?</h1>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleIncomeResponse("Yes")}
              className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
              >
              <span className="text-4xl text-orange-500 mb-2">✓</span>
              <span className="text-sm text-center text-gray-800">Yes</span>
            </button>
            <button
              onClick={() => handleIncomeResponse("No")}
              className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
              >
              <span className="text-4xl text-orange-500 mb-2">✗</span>
              <span className="text-sm text-center text-gray-800">No</span>
            </button>
          </div>
        </div>
      </motion.div>
      )}
     {showAdditionalOptions && (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Additional Options</h1>
            <div className="mb-6">
              {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"].map((option) => (
                <div key={option} className="flex items-center justify-center mb-2">
                  <input
                    type="checkbox"
                    id={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleAdditionalOptionToggle(option)}
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor={option} className="text-gray-800">{option}</label>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition"
            >
              Next
            </button>
          </div>
        )}
      <div className="flex justify-between items-center">
        <button
          onClick={handleBack}
          className="text-gray-600 hover:text-gray-800 flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>{t("backButton")}</span>
        </button>
       
      </div>
    </div>
  </ErrorBoundary>
  );
}

export default Step2;
