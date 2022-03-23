import React, { useState } from "react";
import FrontPage from "./FrontPage";
import Navbar from "./Navbar";
import OurStory from "./OurStory";
import SpecialPackage from "./SpecialPackage";
import FeedBack from "./FeedBack";

const DashBoard = () => {
    const MouseOver = (event) => {
        if(event.target.id=== "1"){
            event.target.style.background = "#df4002";
        }else if(event.target.id==="0"){
            event.target.style.color = "#df4002";
        }else{
            event.target.style.background = "#df4002";
            event.target.style.color = "#fff"
        }
      }
      const MouseOut = (event) => {
        if(event.target.id==="1"){
            event.target.style.background = "";
        }else if(event.target.id==="0"){
            event.target.style.color = "";
        }else{
          event.target.style.background = "";
          event.target.style.color = ""
      }
      }
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
        <Navbar scrollChange={colorChange} value={0} MouseEnter={MouseOver} MouseExit={MouseOut} />
        <FrontPage value={1} MouseEnter={MouseOver} MouseExit={MouseOut} />
        <OurStory />
        <SpecialPackage value={2} MouseEnter={MouseOver} MouseExit={MouseOut} />
        <FeedBack value={2} MouseEnter={MouseOver} MouseExit={MouseOut} />
        <p>{!data ? "Loading..." : data}</p>
    </div>
}
export default DashBoard;