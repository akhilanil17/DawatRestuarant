import React from "react";
import MainLogo from "../images/main_logo.png";
import MainLogo_black from "../images/main_logo_black.png";

const Navbar = (props) => {
    return (
        <div className={props.scrollChange ? "navBar navBar_scroll":"navBar"}>
            <div className="logo">
                <img src={props.scrollChange ? MainLogo_black: MainLogo} />
            </div>
            <div className="nav-items subHeading2">
                <ul>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"} 
                            id={props.value}
                            href="#">HOME</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"}
                            id={props.value}
                            href="#ourStory">ABOUT US</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"} 
                            id={props.value}
                            href="#specialPackage">OFFER</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"} 
                            id={props.value}
                            href="#">MENU</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"} 
                            id={props.value}
                            href="#">TEAM</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"} 
                            id={props.value}
                            href="#">BLOG</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"}
                            id={props.value}
                            href="#Feedback">FEEDBACK</a></li>
                    <li>
                        <a 
                            onMouseOver={props.MouseEnter} 
                            onMouseOut={props.MouseExit} 
                            className={props.scrollChange ? "navBarItems_scroll":"navBarItems"}
                            id={props.value}
                            href="#Contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;