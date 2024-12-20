import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Navbar.css";
import logo from "../assets/logo.png";
import DropDownUser from "./DropDownUser";
import Person from "../assets/person.png";
import "../assets/Css/DropDownUser.css";
import Arrow from "../assets/downArrow.png";

function NavbarUser() {
  const [openUser, setOpenUser] = useState(false);
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
            <img src={Person} />
          </li>
          <li style={{ color: "white", fontWeight: "bold" }}>Bao Nguyen</li>
          <li>
            <img
              src={Arrow}
              width={25}
              height={25}
              onClick={() => setOpenUser((prev) => !prev)}
            />
          </li>
        </div>
      </div>
      <ul className="navbar-bottom">
        <li>
          <Link to="/">TRANG CHỦ</Link>
        </li>
        <li>
          <Link to="/qlynguoidung">QUẢN LÝ NGƯỜI DÙNG</Link>
        </li>
        <li>
          <Link to="/qlyben">QUẢN LÝ BẾN</Link>
        </li>
        <li>
          <Link to="/qlychuyenxe">QUẢN LÝ CHUYẾN XE</Link>
        </li>
        <li>
          <Link to="/qlyve">QUẢN LÝ VÉ</Link>
        </li>
      </ul>
      {openUser && <DropDownUser />}
    </nav>
  );
}

export default NavbarUser;
