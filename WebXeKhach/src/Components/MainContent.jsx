import React, { useState } from 'react';
import '../assets/Css/MainContent.css';

function MainContent() {
  const city = [
    'An Giang',
    'Bà Rịa - Vũng Tàu',
    'Bạc Liêu',
    'Bến Tre',
    'Bình Dương',
    'Bình Phước',
    'Cà Mau',
    'Cần Thơ',
    'Đồng Nai',
    'Đồng Tháp',
    'Hậu Giang',
    'Kiên Giang',
    'Long An',
    'Sóc Trăng',
    'Tây Ninh',
    'Tiền Giang',
    'Trà Vinh',
    'Vĩnh Long',
    'TP. Hồ Chí Minh'
  ];

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

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
            <input type="date" id="date" />
          </div>
          <button className="search-button">Tìm chuyến xe</button>
        </div>
      </section>

      <section className="promotion-section">
        <h2>Khuyến mãi nổi bật</h2>
        {/* thêm các phần nội dung quảng cáo */}
      </section>

      <section className="popular-routes-section">
        <h2>Tuyến phổ biến</h2>
        {/* thêm các tuyến xe phổ biến */}
      </section>
    </div>
  );
}

export default MainContent;
