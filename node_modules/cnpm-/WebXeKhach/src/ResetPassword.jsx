import React from "react";
import Navbar from "./Components/Navbar"; // Đảm bảo đường dẫn đúng
import ResetPassword from "./Components/ResetPassword"; // Đảm bảo đây là component reset password
import Footer from "./Components/Footer"; // Đảm bảo đường dẫn đúng

function ResetPasswordPage() {
  return (
    <div className='ResetPassword'>
      <Navbar />
      <ResetPassword /> {/* Đây là phần giữa */}
      <Footer />
    </div>
  );
}

export default ResetPasswordPage;
