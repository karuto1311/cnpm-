import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Css/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
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
            <Link to="/login">
              <button>Đăng Nhập</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button>Đăng Ký</button>
            </Link>
          </li>
        </div>
      </div>
      <ul className="navbar-bottom">
        <li><Link to="/">TRANG CHỦ</Link></li>
        <li><Link to="/schedule">LỊCH TRÌNH</Link></li>
        <li><Link to="/ticket">TRA CỨU VÉ</Link></li>
        <li><Link to="/news">TIN TỨC</Link></li>
        <li><Link to="/contact">LIÊN HỆ</Link></li>
        <li><a href="/about">VỀ CHÚNG TÔI</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
