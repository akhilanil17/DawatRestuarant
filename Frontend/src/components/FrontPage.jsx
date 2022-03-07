import React, { useState } from "react";
import slide_1 from "../images/promo_slide_1.jpg"
import slide_2 from "../images/promo_slide_2.jpg"
import slide_3 from "../images/promo_slide_3.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const FrontPage = (props) => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel className="frontPage" activeIndex={index} onSelect={handleSelect} fade={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide_3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome To</h3>
              <h4> <strong>DAWAT</strong> CAFE & RESTUARANT</h4>
              <div>
                <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="frontPageBox">RESERVATION NOW</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide_2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Our Menus</h3>
              <h4>SEE WHAT'S <strong>NEW</strong> TODAY</h4>
              <div>
                <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="frontPageBox">TODAYS MENU</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide_1}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Get Ready</h3>
              <h4>TO <strong>JOIN</strong> WITH US</h4>
              <div>
                <button 
                  id={props.value} 
                  onMouseOver={props.MouseEnter} 
                  onMouseOut={props.MouseExit} 
                  className="frontPageBox">BOOK A TABLE</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}
export default FrontPage;