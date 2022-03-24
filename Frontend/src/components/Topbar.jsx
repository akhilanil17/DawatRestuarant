import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import facebook from "../images/facebook-64.png";
import twitter from "../images/twitter-64.png";
import dribbble from "../images/dribbble-64.png";
import behance from "../images/behance-64.png";
import rss from "../images/rss-64.png";


const Topbar = () => {
    return (
    <div className="topBar">
        <div className="A">
            <p><MailOutlineIcon /> Email:Info@Restuarant.com</p>
            <p><LocalPhoneIcon /> Telephone:+1 800 234 5678</p>
        </div>
        <div className="B">
        <ul>
            <li><a href="#"><img src={facebook} /></a></li>
            <li><a href="#"><img src={twitter} /></a></li>
            <li><a href="#"><img src={dribbble} /></a></li>
            <li><a href="#"><img src={behance} /></a></li>
            <li><a href="#"><img src={rss} /></a></li>
        </ul>
        <div>
            <h6><button className="BookATable" href="#">BOOK A TABLE</button></h6>
        </div>
        </div>
    </div>
    )
}
export default Topbar;