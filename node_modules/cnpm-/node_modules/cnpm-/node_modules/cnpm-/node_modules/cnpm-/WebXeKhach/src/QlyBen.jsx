import React from "react";
import NavbarUser from "./Components/NavbarUser";
import Footer from "./Components/Footer";
import QlyBen from "./Components/QlyBen";

function QlyBenPage() {
  return (
    <div className="QlyBen">
      <NavbarUser />
      <QlyBen />
      <Footer />
    </div>
  );
}

export default QlyBenPage;
