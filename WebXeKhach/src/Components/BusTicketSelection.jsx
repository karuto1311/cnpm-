import React, { useState } from "react";
import "../assets/Css/BusTicketSelection.css";
import { Link } from "react-router-dom";
import bus_image from "../assets/bus_image.png";
import icon_trash from "../assets/icon_trash.png";

const BusTicketSelection = () => {
  const [tripType, setTripType] = useState("one-way");

  return (
    <div className="bus-ticket-selection">
      <HeaderImage />
      <SearchBox tripType={tripType} setTripType={setTripType} />
      <div className="filter-and-results">
        <FilterBox />
        <TripResults />
      </div>
    </div>
  );
};

const HeaderImage = () => (
  <div className="header-image">
    <img src={bus_image} alt="Buses" />
  </div>
);

const SearchBox = ({ tripType, setTripType }) => (
  <div className="search-box">
    <div className="trip-type">
      <label>
        <input
          type="radio"
          name="tripType"
          checked={tripType === "one-way"}
          onChange={() => setTripType("one-way")}
        />
        Một chiều
      </label>
      <label>
        <input
          type="radio"
          name="tripType"
          checked={tripType === "round-trip"}
          onChange={() => setTripType("round-trip")}
        />
        Khứ hồi
      </label>
    </div>
    <div className="input-fields">
      <input type="texttT" placeholder="Điểm đi" />
      <input type="texttT" placeholder="Điểm đến" />
      <input type="date" placeholder="Ngày đi" />
      <input type="number" placeholder="Số vé" />
    </div>
    <button className="search-button">Tìm chuyến xe</button>
  </div>
);

const FilterBox = () => {
  const handleClearFilters = () => {
    // Bỏ chọn tất cả các checkbox trong phần bộ lọc
    document
      .querySelectorAll(".filter-box input[type='checkbox']")
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
  };

  return (
    <div className="filter-box">
      <div className="filter-header">
        <h4>BỘ LỌC TÌM KIẾM</h4>
        <button onClick={handleClearFilters} className="clear-filters-button">
          Bỏ chọn lọc <img src={icon_trash} className="icontrash" />
        </button>
      </div>
      <div className="filter-options">
        <div className="filter-group">
          <FilterGroup title="Giờ đi">
            <label>
              <input type="checkbox" /> Sáng sớm 00:00 - 06:00
            </label>
            <label>
              <input type="checkbox" /> Buổi sáng 06:00 - 12:00
            </label>
            <label>
              <input type="checkbox" /> Buổi chiều 12:00 - 18:00
            </label>
            <label>
              <input type="checkbox" /> Buổi tối 18:00 - 24:00
            </label>
          </FilterGroup>
        </div>

        <div className="filter-group">
          <FilterGroup title="Loại xe">
            <label>
              <input type="checkbox" /> Ghế
            </label>
            <label>
              <input type="checkbox" /> Giường
            </label>
            <label>
              <input type="checkbox" /> Limousine
            </label>
          </FilterGroup>
        </div>

        <div className="filter-group">
          <FilterGroup title="Hàng ghế">
            <label>
              <input type="checkbox" /> Hàng đầu
            </label>
            <label>
              <input type="checkbox" /> Hàng giữa
            </label>
            <label>
              <input type="checkbox" /> Hàng cuối
            </label>
          </FilterGroup>
        </div>

        <div className="filter-group">
          <FilterGroup title="Tầng">
            <label>
              <input type="checkbox" /> Tầng trên
            </label>
            <label>
              <input type="checkbox" /> Tầng dưới
            </label>
          </FilterGroup>
        </div>
      </div>
    </div>
  );
};

const FilterGroup = ({ title, children }) => (
  <div className="filter-group">
    <label>{title}</label>
    {children}
  </div>
);

const TripResults = () => (
  <div className="results">
    <h4>TP. Hồ Chí Minh - Đồng Tháp</h4>
    <div className="sort-options">
      <button>Giá rẻ bất ngờ</button>
      <button>Giờ khởi hành</button>
      <button>Ghế trống</button>
    </div>
    <Trip
      start="06:00"
      end="09:00"
      startPoint="Bến Xe Miền Tây"
      endPoint="Bến Xe Sa Đéc"
      seatsAvailable="31"
      price="140.000"
    />
    <Trip
      start="07:30"
      end="10:45"
      startPoint="Bến Xe Miền Tây"
      endPoint="Bến Xe Sa Đéc"
      seatsAvailable="40"
      price="140.000"
    />
    <Trip
      start="08:00"
      end="11:30"
      startPoint="Bến Xe Miền Tây"
      endPoint="Bến Xe Tam Nông"
      seatsAvailable="36"
      price="140.000"
    />
  </div>
);

const Trip = ({ start, end, startPoint, endPoint, seatsAvailable, price }) => (
  <div className="trip">
    <div className="trip-details">
      <div className="trip-row">
        <span className="trip-label">Bắt đầu</span>
        <span>{start}</span>
        <span>{startPoint}</span>
        <span>Giường</span>
      </div>

      <div className="trip-row">
        <span className="trip-label">Kết thúc</span>
        <span>{end}</span>
        <span>{endPoint}</span>
        <span>{seatsAvailable} chỗ trống</span>
      </div>
      <hr className="trip-divider" />
    </div>
    <div className="trip-bottom">
      <div className="trip-price">Giá vé: {price}₫</div>
      <Link to="/busticketform">
        <button className="select-trip-button">Chọn chuyến</button>
      </Link>
    </div>
  </div>
);

export default BusTicketSelection;
