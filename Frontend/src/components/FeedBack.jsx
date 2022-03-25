import React from "react";
import seperator from "../images/red_seperator.png"

const FeedBack = (props) => {
    return (
    <div className="feedBack" id="Feedback">
        <div className="headerSP">
          <h1 className="mainTitle">Feedback</h1>
          <img src={seperator} />
        </div>
        <form method="post" action="/">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div><br/>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" placeholder="Enter Name" />
            </div><br/>
            <div class="form-group">
                <label for="comment">Comments</label>
                <textarea class="form-control" name="comment" rows="3"></textarea>
            </div><br/>
            <button type="submit" className="buttonSP">Submit</button>
        </form>
        
    </div>)
}
export default FeedBack;