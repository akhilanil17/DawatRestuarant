import React, { useState } from "react";
import MainLogo from "../images/main_logo.png";
import MainLogo_black from "../images/main_logo_black.png";
import MenuIcon from "../images/menu-64.png";
import MenuIcon_black from "../images/menu-64-black.png";

const Navbar = (props) => {

    const [buttonClick,setButtonClick] = useState(false)
    const toggleMenu = () => {
        if(buttonClick===true){
            setButtonClick(false)
        }else {
            setButtonClick(true)
        }
    }

    return (
        <div className={props.scrollChange ? "navBar navBar_scroll":"navBar"}>
            <img className="logo" src={props.scrollChange ? MainLogo_black: MainLogo} />
            <nav className="nav-items subHeading2">
                <ul className={buttonClick ? "MenuList_click" :"MenuList"}>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#">HOME</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#ourStory">ABOUT US</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#specialPackage">OFFER</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#">MENU</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#">TEAM</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#">BLOG</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#Feedback">FEEDBACK</a></li>
                    <li><a className={props.scrollChange ? "navBarItems_scroll":""} href="#Contact">CONTACT</a></li>
                </ul>
            </nav>
            <img className={buttonClick ? "menuIcon_rotate" :"menuIcon"} src={props.scrollChange ? MenuIcon_black : MenuIcon} onClick={toggleMenu} />
        </div>
    )
}
export default Navbar;