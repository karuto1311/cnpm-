import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login"; // Đảm bảo đường dẫn đúng

function LoginPage() {
    return (
        <div className="Login">
            <Navbar />
            <Login />
            <Footer />
        </div>  
    );
}

export default LoginPage;
