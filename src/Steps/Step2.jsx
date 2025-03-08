import React, { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from "../contexts/FormContext";
import ErrorBoundary from "../ErrorBoundary";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap, FaHome, FaPaintBrush, FaQuestion, FaUser, FaUserShield, FaUserTie } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import freelancerIcon from '../assets/freelancerIcon.svg'


function Step2() {
  const { formData, setFormData } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenwidth] = useState();
  const sliderRef = useRef(null);

  const options = [
    { value: "Freelancer, Self-employed", key: "step2.option.freelancer", icon: <FaUserTie /> },
    { value: "Employee", key: "step2.option.employee", icon: <FaBriefcase /> },
    { value: "Civil Servant", key: "step2.option.civilServant", icon: <FaUserShield /> },
    { value: "Trainee", key: "step2.option.trainee", icon: <FaGraduationCap /> },
    { value: "Student", key: "step2.option.student", icon: <FaGraduationCap /> },
    { value: "Homemaker", key: "step2.option.homemaker", icon: <FaHome /> },
    { value: "Retiree", key: "step2.option.retiree", icon: <FaUser /> },
    { value: "Unemployed", key: "step2.option.unemployed", icon: <FaUser /> },
    { value: "Artist", key: "step2.option.artist", icon: <FaPaintBrush /> },
    { value: "Other", key: "step2.option.other", icon: <FaQuestion /> },
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

  const handleChange = (option) => {
    setFormData({ ...formData, professionalStatus: option });
    navigate("/step3");
  };

  const handleBack = () => navigate("/");

  return (
    <ErrorBoundary>
      <div className={`max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-[#80CBC4] rounded-full" style={{ width: "50%" }}></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t("step2.title")}</h1>
        <Slider ref={sliderRef} {...settings} className="mb-6">
  {groupedOptions.map((group, index) => (
    <div key={index} className="px-2">
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4 bg-light-green-100 p-4 rounded-lg"> {/* 2 columns, 2 rows on desktop */}
        {group.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleChange(option.value)}
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
          >
            <span className="text-4xl  text-orange-500 mb-2">
              {/* <img src="" alt="" /> */}
              </span>
            <span className="text-sm text-center text-gray-800">{t(option.key)}</span>
          </button>
        ))}
      </div>
    </div>
  ))}
</Slider>
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-800 px-4 py-1 flex items-center "
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{t("backButton")}</span>
          </button>
          {/* <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-secondary"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div> */}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Step2;