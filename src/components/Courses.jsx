import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Courses.css"

const CourseSection = () => {
    return (
        <div className="container for-bg-images mt-5" id="course">
            <div className="row-lg-12">
                <div>
                    <h2 className="text-center m-1">
                        <b>Our <span style={{ color: '#de3335' }}> Job Oriented Courses </span></b>
                    </h2>
                    <br /><br />
                    <p className="text-justify p-2" style={{ fontSize: '14px' }}>
                        Our advanced digital marketing courses in Zirakpur combine theory and practical experience to give you the basic and advanced skills you need. Suitable for newcomers and entrepreneurs, real-world projects and case studies allow you to learn from professionals in the field. Let’s explore our courses.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* SEO */}
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box">
                            <img src="Images/Courses/SEO.png" alt="SEO" />
                            <h3>SEO</h3>
                            <p>Our effective SEO courses include optimization techniques that raise a website's search engine ranking and draw in more organic traffic.</p>
                            <button className="btn-read-more">READ MORE</button>
                        </div>
                    </div>
                    {/* Web Designing */}
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box">
                            <img src="Images/Courses/WD.png" alt="Web Designing" />
                            <h3>Web Designing</h3>
                            <p>Our web design course in Zirakpur teaches skills to create visually appealing, simple, and responsive websites using the latest techniques.</p>
                            <button className="btn-read-more">READ MORE</button>
                        </div>
                    </div>
                    {/* Graphic Designing */}
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box">
                            <img src="Images/Courses/Graphic.png" alt="Graphic Designing" />
                            <h3>Graphic Designing</h3>
                            <p>We teach creative skills in our graphic design course so that students can create captivating images for a range of digital media.</p>
                            <button className="btn-read-more">READ MORE</button>
                        </div>
                    </div>
                    {/* Digital Marketing */}
                    <div className="col-md-3 col-sm-6">
                        <div className="service-box">
                            <img src="Images/Courses/DM.png" alt="Digital Marketing" />
                            <h3>Digital Marketing</h3>
                            <p>Our digital marketing course teaches vital strategies and the recent instruments to improve your online visibility and promote your company.</p>
                            <button className="btn-read-more">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 bg-img-of-btn">
                <div className="row pt-3 pt-lg-3 d-flex flex-column">
                    <div className="text-white col p-0" style={{ userSelect: 'all' }}>
                        <h3 className="text-center m-3" style={{ fontSize: '30px' }}>
                            Advanced <span style={{ fontSize: '35px', fontStyle: 'italic' }}>Digital Marketing Course</span> in Zirakpur
                        </h3>
                    </div>
                    <div className="col p-0">
                        <div className="button-secion1 d-flex aligm-content-center justify-content-center flex-column">
                            <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Search Engine Optimization</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Google Search Console</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Social Media Marketing</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Email Marketing</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Google Ads</button>
                            </div>
                            <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Canva</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Blogging</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>AI Tools</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Facebook Ads</button>
                            </div>
                            <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Wordpress, Wix, Shopify</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>E-Commerce Marketing</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Content<br />Writing</button>
                            </div>
                            <div className="buttons d-flex aligm-content-center justify-content-center flex-wrap flex-md-nowrap">
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>Google Analytics 4</button>
                                <button className="pulse" style={{ background: 'none', fontSize: '14px' }}>100% Live Projects</button>
                            </div>
                            <div className="d-flex aligm-content-center justify-content-center">
                                <button className="p-4 m-5 text-light border-0 bhi openPopup">Enroll Now</button>
                                <a href="./SEO and Digital Marketing Training Modules.pdf" download>
                                    <button className="p-4 m-5 text-light border-0 bhi">Download Brochure</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSection;