import React from 'react';
import { Link } from 'react-router-dom';  // Lưu ý import Link từ 'react-router-dom'
import '../assets/Css/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/schedule">Lịch trình</Link></li>
        <li><Link to="/ticket">Tra cứu vé</Link></li>
        <li><Link to="/news">Tin tức</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
        <li><a href="/about">Về chúng tôi</a></li>
      </ul>
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
    </nav>
  );
}

export default Navbar;