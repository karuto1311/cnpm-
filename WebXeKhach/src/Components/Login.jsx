import React from "react";
import '../assets/Css/Login.css';  

function Login() {
    return (
            <div className="login-content">
                <h2 className="login-title">ĐĂNG NHẬP</h2>
                
                <div className="form-ticket">
                    <form>
                        <div className="form-group">
                            <input type="text" className="input-field" placeholder="Tên tài khoản" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="input-field" placeholder="Mật khẩu" />
                        </div>
                        <div className="form-group">
                            <button className="button-ticket">Đăng nhập</button>
                        </div>
                        <a href="#" className="forgot-password">Quên mật khẩu?</a>
                    </form>
                </div>
            </div>
    );
}

export default Login;
