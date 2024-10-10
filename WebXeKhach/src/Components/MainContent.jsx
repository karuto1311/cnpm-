import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../assets/Css/MainContent.css';
import { city, randomTrips } from '../data/tripData'; 

import slideshow1 from '../assets/slideshow1.jpg';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow3 from '../assets/slideshow3.jpg';
import bgimage1 from '../assets/bgimage1.jpg';
import bgimage2 from '../assets/bgimage2.jpg';
import bgimage3 from '../assets/bgimage3.jpg';

function MainContent() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [popularRoutes, setPopularRoutes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const shuffledData = [...randomTrips].sort(() => 0.5 - Math.random());
    setRandomData(shuffledData.slice(0, Math.floor(Math.random() * 4) + 5));

    // Group popular routes by departure city
    const groupedRoutes = shuffledData.reduce((acc, trip) => {
      if (!acc[trip.departure]) {
        acc[trip.departure] = [];
      }
      acc[trip.departure].push(trip);
      return acc;
    }, {});

    // Get only the first three departure cities for popular routes
    const popular = Object.keys(groupedRoutes).slice(0, 3).map(city => ({
      city,
      trips: groupedRoutes[city].slice(0, 3) // Get the first three trips for each city
    }));

    setPopularRoutes(popular);
  }, []);

  const handleSearch = () => {
    if (!departure && !destination && !date) {
      setError('Vui lòng chọn ít nhất một tiêu chí tìm kiếm.');
      setFilteredTrips([]);
      return;
    }

    const results = randomTrips.filter(trip =>
      (departure === '' || trip.departure === departure) &&
      (destination === '' || trip.destination === destination) &&
      (date === '' || trip.date === date)
    );

    setError(results.length === 0 ? 'Không tìm thấy chuyến xe nào phù hợp.' : '');
    setFilteredTrips(results);
  };

  const images = [slideshow1, slideshow2, slideshow3];
  const shuffledImages = [bgimage1, bgimage2, bgimage3].sort(() => 0.5 - Math.random()).slice(0, 3); // Add shuffled images for popular routes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="main-content">
      <section className="search-section">
        <h1>Tìm chuyến xe</h1>
        <div className="search-form">
          <div className="input-group">
            <label htmlFor="departure">Điểm đi</label>
            <select 
              id="departure" 
              value={departure} 
              onChange={(e) => setDeparture(e.target.value)}
              aria-label="Điểm đi"
            >
              <option value="">Chọn điểm đi</option>
              {city.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="destination">Điểm đến</label>
            <select 
              id="destination" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)}
              aria-label="Điểm đến"
            >
              <option value="">Chọn điểm đến</option>
              {city.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="date">Ngày đi</label>
            <input 
              type="date" 
              id="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
              aria-label="Ngày đi"
            />
          </div>
          <button className="search-button" onClick={handleSearch}>Tìm chuyến xe</button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </section>

      <section className="trip-table-section">
        <table>
          <thead>
            <tr>
              <th>Điểm đi</th>
              <th>Điểm đến</th>
              <th>Ngày đi</th>
            </tr>
          </thead>
          <tbody>
            {randomData.map((trip, index) => (
              <tr key={index}>
                <td>{trip.departure}</td>
                <td>{trip.destination}</td>
                <td>{trip.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {filteredTrips.length > 0 && (
        <section className="search-results-section">
          <h2>Kết quả tìm kiếm</h2>
          <table>
            <thead>
              <tr>
                <th>Điểm đi</th>
                <th>Điểm đến</th>
                <th>Ngày đi</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrips.map((trip, index) => (
                <tr key={index}>
                  <td>{trip.departure}</td>
                  <td>{trip.destination}</td>
                  <td>{trip.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <section className="promotion-section">
        <h2>Khuyến mãi nổi bật</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} className="slideshow-image" />
            </div>
          ))}
        </Slider>
      </section>

      <section className="popular-routes-section">
        <h2>Tuyến phổ biến</h2>
        <div className="popular-routes">
          {popularRoutes.map((route, index) => (
            <div className="card" key={index} style={{ backgroundImage: `url(${shuffledImages[index]})`, backgroundSize: 'cover' }}>
              <div className="route-title">
                <h3>Tuyến đi từ: {route.city}</h3>
              </div>
              <div className="route-info">
                {route.trips.map((trip, tripIndex) => (
                  <p key={tripIndex}>
                    Điểm đến: {trip.destination} - Ngày đi: {trip.date}
                  </p>
                ))}
                {route.trips.map((trip, tripIndex) => (
                  <p key={tripIndex}>
                    Điểm đến: {trip.destination} - Ngày đi: {trip.date}
                  </p>
                ))}
                {route.trips.map((trip, tripIndex) => (
                  <p key={tripIndex}>
                    Điểm đến: {trip.destination} - Ngày đi: {trip.date}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContent;
