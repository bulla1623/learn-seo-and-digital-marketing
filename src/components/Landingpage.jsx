import Header from "./header"
import Navbar from "./Navbar.jsx"
import HeroSection from "./hero-section.jsx"
import FutureDigitalMarketing from "./Future.jsx"
import HiringPartners from "./Hiring-Partners.jsx"
import USP from "./Accordion";
import Tools from "./tools";
import TestimonialSlider from "./Testimonials"
import Video from "./Video";
import CourseSection from "./Courses";
import ExtraCourses from "./ExtraCourses";
import Certification from "./Certification";
import SuccessStories from "./Success-Stories";
import PopupModal from "./Banner";
import WhatWeProvide from "./Provide"
import Accredited from "./Accredited.jsx"
import InternationalProjects from "./Projects.jsx" 
import ContactForm from "./ContactForm"
import FAQSection from "./FAQ.jsx"
import AboutZirakpur from "./Zirakpur"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div>
      {/*Header*/}
      <Header/>
      {/*Navbar*/}
      <Navbar/>
      {/*HeroSection*/}
      <HeroSection/>
      {/*Future of DM*/}
      <FutureDigitalMarketing/>
        {/* Hiring Partners Section */}
        <HiringPartners/>
        {/* Accordion Section */}
        <USP/>
        {/*Tools Section*/}
            <Tools/>
            {/*Testimonial Section*/}
            <TestimonialSlider/>
            {/*Video Section*/}
            <Video/>
            {/*CourseSection*/}
            <CourseSection/>
            {/*Extra Courses*/}
            <ExtraCourses/>
            {/*Certification*/}
            <Certification/>
            {/*Success Stories*/}
            <SuccessStories/>
            <br/><br/>
            {/*Banner*/}
            <PopupModal/>
            <br/>
            {/*WhatWeProvide*/}
            <WhatWeProvide/>
            {/*Accredited*/}
            <Accredited/>
            {/*InternationalProjects*/}
            <InternationalProjects/>
            {/*ContactForm*/}
            <ContactForm/>
            {/*FAQSection*/}
            <FAQSection/>
            {/*AboutZirakpur*/}
            <AboutZirakpur/>
            {/*Footer*/}
            <Footer/>
    </div>
  );
};
export default LandingPage;
