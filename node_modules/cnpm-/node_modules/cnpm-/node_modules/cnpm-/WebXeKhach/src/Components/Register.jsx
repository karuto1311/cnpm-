import React from "react";
import "../assets/Css/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="rg-container">
      <div className="rg-box">
        <h2 className="rg-title">ĐĂNG KÝ TÀI KHOẢN</h2>
        <div className="form-ticket-register">
          <form>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="name">
                Họ và tên:
              </label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="dob">
                Ngày sinh:
              </label>
              <input
                type="date"
                id="dob"
                className="input-field"
                placeholder="Ngày sinh"
              />
            </div>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Nhập email"
              />
            </div>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="phone">
                Số điện thoại:
              </label>
              <input
                type="tel"
                id="phone"
                className="input-field"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="password">
                Mật khẩu:
              </label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="form-group-rg">
              <label className="input-text" htmlFor="confirmPassword">
                Nhập lại mật khẩu:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="input-field"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="form-group">
              <button className="button-ticket">Đăng ký</button>
            </div>
            <Link to="/login" className="forgot-password">
              Bạn đã có tài khoản? Đăng nhập
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
