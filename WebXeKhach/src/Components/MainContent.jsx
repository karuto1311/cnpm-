import React, { useState, useEffect } from 'react';
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

  const randomTrips = [
    { departure: 'An Giang', destination: 'TP. Hồ Chí Minh', date: '2024-10-15' },
    { departure: 'Bến Tre', destination: 'Cà Mau', date: '2024-10-16' },
    { departure: 'Long An', destination: 'Đồng Nai', date: '2024-10-17' },
    { departure: 'Bình Dương', destination: 'Tiền Giang', date: '2024-10-18' },
    { departure: 'Hậu Giang', destination: 'Sóc Trăng', date: '2024-10-19' },
    { departure: 'Đồng Nai', destination: 'Bạc Liêu', date: '2024-10-20' },
    { departure: 'Cần Thơ', destination: 'Trà Vinh', date: '2024-10-21' },
    { departure: 'Tây Ninh', destination: 'Kiên Giang', date: '2024-10-22' },
    { departure: 'Bà Rịa - Vũng Tàu', destination: 'An Giang', date: '2024-10-23' },
    { departure: 'Tiền Giang', destination: 'Vĩnh Long', date: '2024-10-24' },
    { departure: 'TP. Hồ Chí Minh', destination: 'Bến Tre', date: '2024-10-25' }
  ];

  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [popularRoutes, setPopularRoutes] = useState([]); // State cho tuyến phổ biến
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
        <p>QC</p>
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
