import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewsContent from "./Components/NewsContent";


function News() {
    return (
        <div className="News">
          <Navbar />
          <NewsContent />
          <Footer />
        </div>  
      )
  }
export default News