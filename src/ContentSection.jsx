import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaPhoneAlt, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import imgNum1 from './assets/Num1.svg';
import imgNum2 from './assets/Num2.svg';
import imgNum3 from './assets/Num3.svg';
import imgSection from './assets/sectionImg.webp';
import imgSection1 from './assets/Section1img.svg';
import imgSection2 from './assets/Section2img.svg';
import line from './assets/DesktopLine.svg'
import arrow1 from './assets/Arrow1.svg'
import arrow2 from './assets/Arrow2.svg'

function ContentSections() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=" px-4 py-12 bg-white"
    >
      <div  className="">

      {/* Top Heading and 3-Step Process */}
      <div className="text-center mb-12 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("contentSections.title")}</h2>
        <div className="flex flex-col gap-12  md:flex-row  justify-center items-center max-w-2xl relative  md:mx-auto md:space-x-6">
          <div className="flex flex-col items-center">
           <img width={60} src={imgNum1} alt="" />
            <p className="text-gray-600 text-xs mt-1">{t("contentSections.step1")}</p>
            
          </div>

          <div className="max-md:hidden absolute left-[23%] top-[40%]  w-[120px] h-0.5 ">
          <img  src={line} alt="" />
          </div>

        <div className="min-md:hidden absolute right-[0px] object-cover overflow-hidden max-h-[240px] top-[8%]  w-[120px]  "> 
            <img className="w-full h-[150px] "  src={arrow1} alt="" />
          </div>

          <div className="flex flex-col items-center">
           <img width={60} src={imgNum2} alt="" />
            <p className="text-gray-600 text-xs mt-1">{t("contentSections.step2")}</p>
          </div>



          <div className="min-md:hidden absolute left-[0px] object-cover overflow-hidden max-h-[240px] top-[50%]  w-[120px]  "> 
            <img className="w-full h-[150px] "  src={arrow2} alt="" />
          </div>

          <div className="max-md:hidden absolute right-[160px] top-[40%] w-[120px]">
            <img src={line} alt="" />
          </div>


          <div className="flex flex-col items-center">
           <img width={60} src={imgNum3} alt="" />
            <p className="text-gray-600 text-xs mt-1">{t("contentSections.step3")}</p>
          </div>
        </div>
      </div>










      {/* Image and Text Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="w-full  text-gray-600">
        <div className=" ">


{/* Subsection1 */}
          <div className="max-w-7xl mx-auto">
        <div className="w-full flex-col py-8 md:flex-row flex ">

          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
            <img
              src={imgSection} 
              alt="Piggy bank with stethoscope"
              className="w-full h-full object-cover"
              />
          </div>
          <div className="w-full md:w-[60%]">

<h3 className="text-xl font-semibold mb-4">{t("contentSections.healthShock")}</h3>
<p className="mb-4">{t("contentSections.healthShockText")}</p>
<button
  className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition"
  // Replace with actual comparison logic
  >
  {t("contentSections.requestComparison")} 
</button>
    </div>
    </div>
        </div>
{/* Subsection1 Ends  */}



{/* Subsection2  */}
<div className=" py-8 bg-gray-200">

        <div className="flex flex-col max-w-7xl mx-auto  md:flex-row">

        <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
            <img
              src={imgSection1} 
              alt="Piggy bank with stethoscope"
              className="w-full h-full object-cover"
              />
          </div>
          
          <div className="mt-6 w-full md:w-[60%]">
            <h4 className="text-lg font-semibold mb-2">{t("contentSections.selfEmployedSave")}</h4>
            <p className="mb-2">{t("contentSections.selfEmployedSaveText")}</p>
            <p>{t("contentSections.performanceText")}</p>
            <p className="mt-2">{t("contentSections.noWorries")}</p>
          </div>

       
              </div>
</div>

            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-4">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
            <img
              src={imgSection2} 
              alt="Piggy bank with stethoscope"
              className="w-full h-full object-cover"
              />
          </div>

          <div className="mt-6 md:w-[60%]">
            <h4 className="text-lg font-semibold mb-2">{t("contentSections.employeeSave")}</h4>
            <p>{t("contentSections.employeeSaveText")}</p>
            <p className="mt-2">{t("contentSections.performanceEmployeeText")}</p>
          </div>

            </div>


        </div>
      </div>
              </div>
    </motion.div>
  );
}
  export default ContentSections; 
