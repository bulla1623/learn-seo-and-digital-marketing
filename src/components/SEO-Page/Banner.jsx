import React from "react";
import myImage from "../../assests/SEO/BANNER-SEO-PAGE (1).jpg";
import "./Banner.css"

function Banner(){
    return(
        <div className="banner-img-container">
            <img src={myImage} alt="Banner"/>
        </div>
    )
};
export default Banner;