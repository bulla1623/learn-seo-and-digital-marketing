import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Banner from "./Banner";
import MyComponent from "./Training";
import OurAdvancedSEOCourses from "./who";
import WhyChooseUs from "./USP";
import SEOCourseOverview from "./Video";
import SEOBenefits from "./Benefits";
import CareerAfterSEO from "./Careers";
import Tools from "./tools";
import JobAfterSEOTraining from "./jobs";
import FAQSection from "./Question";
import CertificationSection from "./Certificate";
import SuccessStories from "./Success";
import Course from "./Courses";
import Footer from "./Footer";
import Navbar from "../Navbar"
function SEO(){
    return(
    <div>
        {/*Header*/}
        <Header/>
        {/*Navbar*/}
        <Navbar/>
        {/*Banner*/}
        <Banner/>;
        {/*Training*/}
        <MyComponent/>
        {/*Who*/}
        <OurAdvancedSEOCourses/>
        {/*USP*/}
        <WhyChooseUs/>
        {/*Video*/}
        <SEOCourseOverview/>
        {/*Benefits*/}
        <SEOBenefits/>
        {/*Carrers*/}
        <CareerAfterSEO/>
        {/*Tools*/}
        <Tools/>
        {/*Course*/}
        <Course/>
        {/*Jobs*/}
        <JobAfterSEOTraining/>
        {/*FAQ*/}
        <FAQSection/>
        {/*Certificate*/}
        <CertificationSection/>
        {/*Success*/}
        <SuccessStories/>
        {/*Footer*/}
        <Footer/>
    </div>
    )
}
export default SEO;