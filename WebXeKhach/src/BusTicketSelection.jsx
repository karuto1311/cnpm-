import React from "react";
import Navbar from "./Components/Navbar";
import BusTicketSelection from "./Components/BusTicketSelection";
import Footer from "./Components/Footer";

function BusTicketSelectionPage() {
  return (
    <div className="BusTicketSelection">
      <Navbar />
      <BusTicketSelection />
      <Footer />
    </div>
  );
}

export default BusTicketSelectionPage;
