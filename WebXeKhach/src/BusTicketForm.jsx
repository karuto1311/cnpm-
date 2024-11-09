import React from "react";
import Navbar from "./Components/Navbar";
import BusTicketForm from "./Components/BusTicketForm";
import Footer from "./Components/Footer";

function BusTicketFormPage() {
  return (
    <div className="BusTicketForm">
      <Navbar />
      <BusTicketForm />
      <Footer />
    </div>
  );
}

export default BusTicketFormPage;
