import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slide_1 from "../images/promo_slide_1.jpg";
import slide_2 from "../images/promo_slide_2.jpg";
import slide_3 from "../images/promo_slide_3.jpg";
import seperator from "../images/red_seperator.png"

const SpecialPackage = (props) => {
    return (
    <div className="specialPackage">
        <img className="backgroundSP" src={slide_3} />
        <div className="headerSP">
          <h1 className="mainTitle">Special Package</h1>
          <img src={seperator} />
        </div>
        
<Carousel controls={false} className="carouselSP">
  <Carousel.Item>
    <img
      className="carouselImgSP d-block"
      src={slide_1}
      alt="First slide"
    />
    <div className="carouselBoxSP">
      <h4 className="subHeading1">40% off for 9"-12" pizza- Wed,<br/> Thu, Friday only</h4>
      <p>Pizza 12 inch + Side Dish + 1.5L Coke Bottle Only<br/> From 209,000<br/><br/></p>
      <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="buttonSP">TODAYS MENU</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselImgSP d-block"
      src={slide_2}
      alt="Second slide"
    />
    <div className="carouselBoxSP">
      <h4 className="subHeading1">40% off for 9"-12" pizza- Wed,<br/> Thu, Friday only</h4>
      <p>Pizza 12 inch + Side Dish + 1.5L Coke Bottle Only<br/> From 209,000<br/><br/></p>
      <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="buttonSP">TODAYS MENU</button>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselImgSP d-block"
      src={slide_3}
      alt="Third slide"
    />
    <div className="carouselBoxSP">
      <h4 className="subHeading1">40% off for 9"-12" pizza- Wed,<br/> Thu, Friday only</h4>
      <p>Pizza 12 inch + Side Dish + 1.5L Coke Bottle Only<br/> From 209,000<br/><br/></p>
      <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="buttonSP">TODAYS MENU</button>
    </div>
  </Carousel.Item>
</Carousel>
    </div>
    )
}
export default SpecialPackage;