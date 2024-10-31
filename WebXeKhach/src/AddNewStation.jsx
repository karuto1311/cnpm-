import React from "react";
import NavbarUser from "./Components/NavbarUser";
import Footer from "./Components/Footer";
import AddNewStation from "./Components/AddNewStation";

function AddNewStationPage() {
  return (
    <div className="AddNewStation">
      <NavbarUser />
      <AddNewStation />
      <Footer />
    </div>
  );
}

export default AddNewStationPage;
