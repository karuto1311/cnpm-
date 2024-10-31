import ForgotPassword from "./Components/ForgotPassword";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function ForgotPasswordPage() {
    return (
        <div className="ForgotPassword">
            <Navbar />
            <ForgotPassword />
            <Footer />
        </div>
    );
}

export default ForgotPasswordPage;
