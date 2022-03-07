import React from "react";
import seperator from "../images/red_seperator.png"

const FeedBack = (props) => {
    return (
    <div className="feedBack" id="Feedback">
        <div className="headerSP">
          <h1 className="mainTitle">Feedback</h1>
          <img src={seperator} />
        </div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div><br/>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" />
            </div><br/>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Comments</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div><br/>
            <button type="submit" 
                    id={props.value} 
                    onMouseOver={props.MouseEnter} 
                    onMouseOut={props.MouseExit}    
                    className="buttonSP">Submit</button>
        </form>
        
    </div>)
}
export default FeedBack;