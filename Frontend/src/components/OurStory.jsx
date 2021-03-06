import React from "react";
import OurStoryBackground from "../images/our_story_background.webp";
import Signature from "../images/about_sign.png";

const OurStory = () => {
    return (
        <div className="ourStory" id="ourStory">
            <img className="ourStoryBg" src={OurStoryBackground} />
            <h1 className="mainTitle">Our Story</h1>
            <div className="story">
                <p className="leftbox"><strong>L</strong>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className="rightbox">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="signature">
                <img className="storySignature" src={Signature} />
            </div>
            
        </div>
    )
}
export default OurStory;