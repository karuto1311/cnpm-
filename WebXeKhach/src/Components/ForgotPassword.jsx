import React from "react";
import { Link } from "react-router-dom"; // Thêm dòng này để import Link
import "../assets/Css/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-box">
        <h2 className="forgotpassword-title">QUÊN MẬT KHẨU</h2>
        <div className="form-ticket">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="input-field"
                placeholder="Nhập Email"
              />
            </div>
            <div className="form-group">
              <Link to="/resetpassword"> 
                <button type="button" className="button-ticket">Đổi mật khẩu</button>
              </Link>
            </div>
            <Link to="/login" className="cancel">Hủy</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
