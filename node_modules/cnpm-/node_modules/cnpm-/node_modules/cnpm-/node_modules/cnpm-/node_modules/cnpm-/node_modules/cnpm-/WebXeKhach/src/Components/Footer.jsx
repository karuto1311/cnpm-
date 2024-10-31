import React from "react";
import "../assets/Css/Footer.css";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import zalo from "../assets/zalo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section bus-image">
        <img src={logo} alt="Bus Icon" className="bus-icon" />
      </div>

      <div className="footer-section company-info">
        <h4>CÔNG TY CỔ PHẦN XE KHÁCH NAM HẢI</h4>
        <p>
          Địa chỉ: 458 Trường Chinh, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh
        </p>
        <p>Email: xekhachnamhai@gmail.com</p>
        <p>Điện thoại: 02843512123 | Fax: 02843512124</p>
      </div>

      <div className="footer-section social-media">
        <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
            <img src={zalo} alt="Zalo" />
          </a>

          {/*<img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={zalo} alt="Zalo" />*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
