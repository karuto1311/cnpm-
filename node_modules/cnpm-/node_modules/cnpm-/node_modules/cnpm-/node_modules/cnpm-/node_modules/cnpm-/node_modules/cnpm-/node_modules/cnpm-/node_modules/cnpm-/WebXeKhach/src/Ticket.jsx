import TicketContent from "./Components/TicketContent";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Ticket(){
    return(
        <div className="Ticket">
            <Navbar/>
            <TicketContent/>
            <Footer/>
        </div>
    )
}
export default Ticket