import React from "react";
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
              <button className="button-ticket">Đổi mật khẩu</button>
            </div>
            <a href="/login" className="cancel">Hủy</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
