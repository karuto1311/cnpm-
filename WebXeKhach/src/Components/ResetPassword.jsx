import React from "react";
import "../assets/Css/ResetPassword.css";

function ResetPassword() {
  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2 className="reset-title">QUÊN MẬT KHẨU</h2>
        <div className="form-ticket">
          <form>
            <div className="form-group">
              <input
                type="password"
                className="input-field"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="input-field"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="form-group">
              <button className="button-ticket">Lưu mật khẩu</button>
            </div>
            <a href="/login" className="cancel">Hủy</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
