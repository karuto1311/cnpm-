import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./Components/Register";

function RegisterPage() {
  return (
    <div className="Register">
      <Navbar />
      <Register />
      <Footer />
    </div>
  );
}

export default RegisterPage;
