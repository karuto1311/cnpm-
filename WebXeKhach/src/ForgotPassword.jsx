import ForgotPassword from "./Components/ForgotPassword";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function ResetPasswordPage() {
    return (
        <div className="ForgotPassword">
            <Navbar />
            <ForgotPassword />
            <Footer />
        </div>
    );
}

export default ResetPasswordPage;
