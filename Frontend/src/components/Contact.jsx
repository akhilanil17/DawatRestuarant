import React from "react";
import Background from "../images/Footer_background.webp";
import MainLogo from "../images/main_logo.png";
import facebook from "../images/facebook-64.png";
import twitter from "../images/twitter-64.png";
import dribbble from "../images/dribbble-64.png";
import behance from "../images/behance-64.png";
import rss from "../images/rss-64.png";

const Contact = () => {
    return (
        <div className="contact" id="Contact">
            <img className="contactBG" src={Background} />
            <img className="contactLogo" src={MainLogo} />
            <p>20, floor, Queensland Victoria Building. 60 california street california USA</p>
            <h6>hello@dawat.com</h6>
            <h6>+88 000 0000 1111</h6>
            <div className="contactIcons">
                <a href="#"><img src={facebook} /></a>
                <a href="#"><img src={twitter} /></a>
                <a href="#"><img src={dribbble} /></a>
                <a href="#"><img src={behance} /></a>
                <a href="#"><img src={rss} /></a>
            </div> 
        </div>
    )
}
export default Contact