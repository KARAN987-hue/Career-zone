import { Routes, Route, useNavigate, Navigate, Form } from "react-router-dom";
import Home from "./Home";
import TopBar from "./TopBar";
import Navbar from "./NavBar";
import { useEffect, useState } from "react";
import { BTech } from "./BTech";
import { MTech } from "./MTech";
import Phd from "./Phd";
import DiplomaCourses from "./DiplomaCourses";
import Mbbs from "./Mbbs";
import Md from "./Md";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import EnquiryForm from "./EnquiryForm";
import Footer from "./Footer";
import styles from './App.module.css'
import Exam from "./Exam";
import Bams from "./Bams";
import Bds from "./Bds";
import Ms from "./Ms";
import Bba from "./Bba";
import Bms from "./Bms";
import Bbm from "./Bbm";
import Bhmct from "./Bhmct";
import Mhm from "./Mhm";
import Ballb from "./Ballb";
import Llb from "./Llb";
import Courses from "./Courses";
import EngineeringColleges from "./EngineeringColleges";
import NeetExam from "./NeetExam";
import ComedkExam from "./ComedkExam";
import JeeMain from "./JeeMain";
import MedicalColleges from "./MedicalColleges";
import NeetPg from "./NeetPg";
import MedicalMumbai from "./MedicalMumbai";
import MedicalBanglore from "./MedicalBanglore";
import MedicalChennai from "./MedicalChennai";
import MedicalPune from "./MedicalPune";
import MedicalNoida from "./MedicalNoida";
import ManagementCollege from "./ManagementCollege";
import Law from "./Law";

function App() {
  const [courseUrl, setCourseUrl] = useState("");
  console.log(courseUrl);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(courseUrl);
  }, [courseUrl]);

  const toKebabCase = (str) => {
    return str
      .toLowerCase()
      .replace(/\./g, "") // remove all dots
      .replace(/[\/\s]+/g, "-") // replace slashes and spaces with hyphen
      .replace(/^-+|-+$/g, ""); // remove leading/trailing hyphens
  };
  return (
    <>
      <div className={styles.main} >
        <div className={styles.navbar} >
          <TopBar
            address="511, 5 Floor,Ashiana tower, Exhibition Rd, near HDFC BANK LTD, Ali Nagar Colony, Salimpur Ahra, Patna, Bihar 800001"
            phone="+91 93043 65563"
            email="info@thecareeezone.co.in"
          />
          <Navbar
            onCourseClick={(value) => {
              const kebabValue = toKebabCase(value);
              if (kebabValue === "courses" || kebabValue === "engineering" || kebabValue === "medical" || kebabValue === "management") {
                setCourseUrl(courseUrl)
              } else if (kebabValue === "engineering-nursing-colleges" || kebabValue === "engineering-boptom-colleges" || kebabValue === "engineering-bpt-colleges" || kebabValue === "engineering-all-college-by-courses") {
                setCourseUrl(courseUrl)
              } else {
                kebabValue === "home"
                  ? setCourseUrl(`/`)
                  : setCourseUrl(`/${kebabValue}`);
              }
            }}
          />
        </div>
        <EnquiryForm />
        <div className={styles.body}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ------ Courses ------------- */}
            <Route path="/courses-be-btech" element={<BTech />} />
            <Route path="/courses-me-mtech" element={<MTech />} />
            <Route path="/courses-phd" element={<Phd />} />
            <Route path="/courses-diploma-courses" element={<DiplomaCourses />} />
            <Route path="/courses-mbbs" element={<Mbbs />} />
            <Route path="/courses-md" element={<Md />} />
            <Route path="/courses-bams" element={<Bams />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/courses-bds" element={<Bds />} />
            <Route path="/courses-ms" element={<Ms />} />
            <Route path="/courses-bba" element={<Bba />} />
            <Route path="/courses-bms" element={<Bms />} />
            <Route path="/courses-bbm" element={<Bbm />} />
            <Route path="/courses-bhmct" element={<Bhmct />} />
            <Route path="/courses-mhm" element={<Mhm />} />
            <Route path="/courses-ba-llb" element={<Ballb />} />
            <Route path="/courses-llb" element={<Llb />} />
            <Route path="/courses-llm" element={<Courses />} />
            <Route path="/courses-bsc-llb" element={<Courses />} />
            {/* ------ Engineering ------------- */}
            <Route path="/engineering-be-btech" element={<BTech />} />
            <Route path="/engineering-me-mtech" element={<MTech />} />
            <Route path="/engineering-phd" element={<Phd />} />
            <Route path="/engineering-diploma-courses" element={<DiplomaCourses />} />
            <Route path="/engineering-distance-diploma-courses" element={<Courses />} />
            <Route path="/engineering-top-engineering-colleges" element={<EngineeringColleges />} />
            <Route path="/engineering-top-private-engineering-colleges" element={<EngineeringColleges />} />
            <Route path="/engineering-top-iits-in-india" element={<EngineeringColleges />} />
            <Route path="/engineering-top-nits-in-india" element={<EngineeringColleges />} />
            <Route path="/engineering-top-colleges-in-bangalore" element={<EngineeringColleges />} />
            <Route path="/engineering-neet-exam" element={<NeetExam />} />
            <Route path="/engineering-comedk" element={<ComedkExam />} />
            <Route path="/engineering-jee-main" element={<JeeMain />} />
            <Route path="/engineering-upsee" element={<Courses />} />
            <Route path="/engineering-all-engineering-exams" element={<Exam />} />
            {/* ------ Medical ------------- */}
            <Route path="/medical-top-mbbs-colleges-in-india" element={<MedicalColleges />} />
            <Route path="/medical-top-dental-colleges-in-india" element={<MedicalColleges />} />
            <Route path="/medical-top-pharmacy-colleges-in-india" element={<MedicalColleges />} />
            <Route path="/medical-top-bams-colleges-in-india" element={<MedicalColleges />} />
            <Route path="/medical-top-bhms-colleges-in-india" element={<MedicalColleges />} />
            <Route path="/medical-mbbs" element={<Mbbs />} />
            <Route path="/medical-md" element={<Md />} />
            <Route path="/medical-ms" element={<Ms />} />
            <Route path="/medical-bams" element={<Bams />} />
            <Route path="/medical-bds" element={<Bds />} />
            <Route path="/medical-neet-ug" element={<Exam />} />
            <Route path="/medical-neet-pg" element={<NeetPg />} />
            <Route path="/medical-aiims-pg" element={<Exam />} />
            <Route path="/medical-jipmer-pg" element={<Exam />} />
            <Route path="/medical-pgimer-exam" element={<Exam />} />
            <Route path="/medical-noida" element={<MedicalNoida />} />
            <Route path="/medical-mumbai" element={<MedicalMumbai />} />
            <Route path="/medical-bangalore" element={<MedicalBanglore />} />
            <Route path="/medical-chennai" element={<MedicalChennai />} />
            <Route path="/medical-pune" element={<MedicalPune />} />
            {/* ------ Management ------------- */}
            <Route path="/management-ifim-business-school" element={<ManagementCollege />} />
            <Route path="/management-iim,-ahmedabad-(iima)" element={<ManagementCollege />} />
            <Route path="/management-indian-school-of-business-(isb)" element={<ManagementCollege />} />
            <Route path="/management-indian-institute-of-management-bangalore-(iimb)" element={<ManagementCollege />} />
            <Route path="/management-indian-institute-of-management,-udaipur-(iimu)" element={<ManagementCollege />} />
            <Route path="/management-bba" element={<Bba />} />
            <Route path="/management-mba" element={<Bba />} />
            <Route path="/management-bms" element={<Bms />} />
            <Route path="/management-bhmct" element={<Bhmct />} />
            <Route path="/management-mhm" element={<Mhm />} />
            <Route path="/management-emba" element={<Bhmct />} />
            <Route path="/management-neet-ug" element={<Exam />} />
            <Route path="/management-neet-pg" element={<NeetPg />} />
            <Route path="/management-aiims-pg" element={<Exam />} />
            <Route path="/management-jipmer-pg" element={<Exam />} />
            <Route path="/management-pgimer-exam" element={<Exam />} />
            <Route path="/management-noida" element={<ManagementCollege />} />
            <Route path="/management-mumbai" element={<ManagementCollege />} />
            <Route path="/management-bangalore" element={<ManagementCollege />} />
            <Route path="/management-chennai" element={<ManagementCollege />} />
            <Route path="/management-pune" element={<ManagementCollege />} />
            <Route path="/courses-mds" element={<ManagementCollege />} />
            {/* ------ Law ------------- */}
            <Route path="/law" element={<Law />} />
            {/* ------ Exam ------------- */}
            <Route path="/exam" element={<Exam />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
