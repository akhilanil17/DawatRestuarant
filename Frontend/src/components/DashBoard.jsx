import React, { useState } from "react";
import FrontPage from "./FrontPage";
import Navbar from "./Navbar";
import OurStory from "./OurStory";
import SpecialPackage from "./SpecialPackage";
import FeedBack from "./FeedBack";
import Contact from "./Contact";

const DashBoard = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
     if(window.scrollY >= 40){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
     window.addEventListener('scroll', changeNavbarColor);

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
    return <div>
        <Navbar scrollChange={colorChange} />
        <FrontPage />
        <OurStory />
        <SpecialPackage />
        <FeedBack />
        <Contact />
        {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
}
export default DashBoard;