import React from "react";
import background from "../images/promo_slide_3.jpg"

const Success = () => {
    const MouseOver = (event) => {
        event.target.style.background = "#df4002";
    }

    const MouseOut = (event) => {
        event.target.style.background = "";
    }

    return (
        <div className="success">
            <img src={background} />
            <h3>Thanks for your valuable feedback</h3>
            <form action="/">
                <input 
                className="frontPageBox"
                type="submit" 
                value="Home"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut} />
            </form>
        </div>
    )
}
export default Success;