import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Navbar.css";
import logo from "../assets/logo.png";
import DropDownUser from "./DropDownUser";
import Person from "../assets/person.png";
import "../assets/Css/DropDownUser.css";
import Arrow from "../assets/downArrow.png"

function NavbarUser () {
    const [openUser, setOpenUser]=useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="left-section">
          <div className="footer-note">@NamHai2004 - 20NamDongHanh</div>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Xe Dai Nam" className="logo" />
        </div>
        <div className="loginbtn">
          <li>
            <img src={Person}/>
          </li>
          <li style={{color:'white', fontWeight:'bold'}}>
            Bao Nguyen 
          </li>
          <li>
            <img src={Arrow} width={25} height={25} onClick={() => setOpenUser((prev)=>!prev)}/>
          </li>               
        </div>
      </div>
      <ul className="navbar-bottom">
        <li>
          <Link to="/">TRANG CHỦ</Link>
        </li>
        <li>
          <Link to="/schedule">LỊCH TRÌNH</Link>
        </li>
        <li>
          <Link to="/ticket">TRA CỨU VÉ</Link>
        </li>
        <li>
          <Link to="/news">TIN TỨC</Link>
        </li>
        <li>
          <Link to="/contact">LIÊN HỆ</Link>
        </li>
        <li>
          <a href="/about">VỀ CHÚNG TÔI</a>
        </li>
      </ul>
      {
         openUser && <DropDownUser/>
      }
      
    </nav>
  );
}

export default NavbarUser;