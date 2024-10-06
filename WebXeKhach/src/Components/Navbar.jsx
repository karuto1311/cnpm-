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
        <li><a href="/">Tra cứu vé</a></li>
        <li><a href="/">Hóa đơn</a></li>
        <li><a href="/">Về chúng tôi</a></li>
      </ul>
      <div className="logo-container">
        <img src={logo} alt="Xe Dai Nam" className="logo" />
      </div>
      <div className="loginbtn">
        <button>Đăng Nhập</button>
        <button>Đăng ký</button>
      </div>
    </nav>
  );
}

export default Navbar;
