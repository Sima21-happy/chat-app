import React from "react";

import Navbar from '../component/nav_bar/nav_bar.component';
import AboutUs from '../component/about_us/about_us.component.jsx';
import Footer from '../component/footer/fotter.component.jsx';

const AboutPage=()=>{
    return(
        <div>
            <Navbar/>
            <Footer/>
            <AboutUs/>
        </div>
    )
    ;
}
export default AboutPage;