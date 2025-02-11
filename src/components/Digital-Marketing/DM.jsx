import React from "react";
import DigitalMarketingBanner from "./Banner";
import JobPlacements from "./Placements"
import  HeroSection from "./Hero"
import AboutDigitalMarketing from "./About"
import Header from "./header"
import Footer from "./Footer"
import Enrolling from "./Enrolling"
import JobRoles from "./job"
import Benefits from "./Benefits"
import Modules from "./Modules"
import FAQSection from "./Frequently"
import Navbar from "../Navbar"

function DigitalMarketing(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <DigitalMarketingBanner/>
            <JobPlacements/>
            <HeroSection/>
            <AboutDigitalMarketing/>
            <Enrolling/>
            <JobRoles/>
            <Benefits/>
            <Modules/>
            <FAQSection/>
            <Footer/>
        </div>
    )
}
export default DigitalMarketing;