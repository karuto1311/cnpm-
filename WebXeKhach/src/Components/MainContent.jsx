import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../assets/Css/MainContent.css';
import { city, randomTrips } from '../data/tripData'; 

// Import ảnh
import slideshow1 from '../assets/slideshow1.jpg';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow3 from '../assets/slideshow3.jpg';

function MainContent() {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [popularRoutes, setPopularRoutes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Chọn ngẫu nhiên từ 5-8 chuyến xe để hiển thị khi trang được tải
    const shuffledData = [...randomTrips].sort(() => 0.5 - Math.random());
    setRandomData(shuffledData.slice(0, Math.floor(Math.random() * 4) + 5));
    
    // Chọn 3 chuyến xe ngẫu nhiên cho tuyến phổ biến
    const popularShuffled = shuffledData.slice(0, 3);
    setPopularRoutes(popularShuffled);
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

    if (results.length === 0) {
      setError('Không tìm thấy chuyến xe nào phù hợp.');
    } else {
      setError('');
    }

    setFilteredTrips(results);
  };

  const images = [slideshow1, slideshow2, slideshow3];

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
            />
          </div>
          <button className="search-button" onClick={handleSearch}>Tìm chuyến xe</button>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
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
          {popularRoutes.map((trip, index) => (
            <div className="card" key={index}>
              <h3>Điểm đi: {trip.departure}</h3>
              <p>Điểm đến: {trip.destination}</p>
              <p>Ngày đi: {trip.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContent;
