import React from "react";
import '../assets/Css/About.css';
import logo from '../assets/logo.png';

function AboutContent(){
    return (
       
        <div className="About-content">
        <h1>NAM HẢI</h1>
        <h2>Vì những chuyến xe an toàn của bạn</h2>
          <div className="intro-content">
              <p>intro holder</p>
          </div>
        
          <div className="body-content">
            <div className="body-image"><img src={logo} height="100%"></img></div>
            <div className="body-text">place holder</div>
          </div>
          <div className="body-content">
            <div className="body-text">place holder</div>
            <div className="body-image"><img src={logo} height="100%" ></img></div>
          </div>
          <div className="body-content">
            <div className="body-image"><img src={logo} height="100%"></img></div>
            <div className="body-text">place holder</div>
          </div>
        </div>
        
    )
}
export default AboutContent;