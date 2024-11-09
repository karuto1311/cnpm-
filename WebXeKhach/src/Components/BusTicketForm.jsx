import React, { useState } from "react";
import "../assets/Css/BusTicketForm.css";
import { Link } from "react-router-dom";

const SEATS = {
  lower: Array.from(
    { length: 18 },
    (_, i) => `A${(i + 1).toString().padStart(2, "0")}`
  ),
  upper: Array.from(
    { length: 18 },
    (_, i) => `B${(i + 1).toString().padStart(2, "0")}`
  ),
};

const SEAT_PRICE = 140000; // Giá mỗi ghế

const generateSeatStatus = () => {
  const soldSeats = new Set();
  while (soldSeats.size < 10) {
    const randomSeat = SEATS.lower.concat(SEATS.upper)[
      Math.floor(Math.random() * 36)
    ];
    soldSeats.add(randomSeat);
  }
  return soldSeats;
};

const BusTicketForm = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [soldSeats] = useState(generateSeatStatus);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
  }); // Lưu trữ các lỗi cho từng trường

  const handleSeatSelection = (seat) => {
    if (soldSeats.has(seat)) return; // Nếu ghế đã bán, không làm gì cả
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const getSeatClass = (seat) => {
    if (soldSeats.has(seat)) return "seat sold";
    if (selectedSeats.includes(seat)) return "seat selected";
    return "seat available";
  };

  // Tính tổng tiền dựa trên số ghế đã chọn
  const totalAmount = selectedSeats.length * SEAT_PRICE;

  const validateName = (value) => {
    const nameRegex =
      /^[A-Za-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựíìỉĩịýỳỷỹỵ\s]+$/;
    if (!nameRegex.test(value)) {
      return "Họ và tên chỉ được phép là chữ cái, có dấu và khoảng cách giữa các tên.";
    }
    return "";
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(value)) {
      return "Số điện thoại chỉ bao gồm chữ số và phải có 10 hoặc 11 chữ số.";
    }
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(value)) {
      return "Email không hợp lệ. Vui lòng nhập email đúng định dạng.";
    }
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "name") {
      error = validateName(value);
    } else if (name === "phone") {
      error = validatePhone(value);
    } else if (name === "email") {
      error = validateEmail(value);
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra lỗi cho toàn bộ form trước khi gửi
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);

    if (nameError || phoneError || emailError) {
      setFormErrors({
        name: nameError,
        phone: phoneError,
        email: emailError,
      });
      return;
    }

    if (!acceptedTerms) {
      alert("Bạn cần chấp nhận điều khoản đặt vé.");
      return;
    }

    alert("Đặt vé thành công!");
  };

  return (
    <div className="bus-ticket-form">
      <h2>Tuyến xe: TP.HCM - NHA TRANG</h2>
      <p>Ngày đi: 09/10/2024</p>

      <div className="seat-section">
        <h3>Chọn ghế</h3>
        <div className="seat-container">
          <div className="seat-floor">
            <h4>Tầng dưới</h4>
            <div className="seats">
              {SEATS.lower.map((seat) => (
                <button
                  key={seat}
                  className={getSeatClass(seat)}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div className="seat-floor">
            <h4>Tầng trên</h4>
            <div className="seats">
              {SEATS.upper.map((seat) => (
                <button
                  key={seat}
                  className={getSeatClass(seat)}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div className="seat-legend">
            <span className="legend available">Còn trống</span>
            <span className="legend selected">Đang chọn</span>
            <span className="legend sold">Đã bán</span>
          </div>
        </div>
      </div>

      <div className="trip-info">
        <h3>Thông tin lượt đi</h3>
        <p>
          <strong>Tuyến xe:</strong> TP.HCM - Nha Trang
        </p>
        <p>
          <strong>Thời gian xuất bến:</strong> 06:00 09/10/2024
        </p>
        <p>
          <strong>Số ghế:</strong>{" "}
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "Chưa chọn"}
        </p>
        <p>
          <strong>Tổng tiền:</strong> {totalAmount.toLocaleString("vi-VN")} VND
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-containerBusTicketForm">
          <div className="customer-info">
            <h3>Thông tin khách hàng</h3>
            <label>
              Họ và tên
              <input
                type="textt"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleBlur}
                required
              />
              {formErrors.name && (
                <div className="error-message">{formErrors.name}</div>
              )}
            </label>
            <label>
              Số điện thoại
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={handleBlur}
                required
              />
              {formErrors.phone && (
                <div className="error-message">{formErrors.phone}</div>
              )}
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                required
              />
              {formErrors.email && (
                <div className="error-message">{formErrors.email}</div>
              )}
            </label>
            <div className="terms-info">
              <h3>Điều khoản và lưu ý</h3>
              <p>
                (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
                nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
                vé thành công có chứa mã vé được gửi từ hệ thống Xe Khách Nam
                Hải LINE. Vui lòng liên hệ Trung tâm tổng đài 02843512123 để
                được hỗ trợ.
              </p>
              <p>
                (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
                đài trung chuyển 02843512123 trước khi đặt vé. Chúng tôi không
                đón/trung chuyển tại những điểm xe trung chuyển không thể tới
                được.
              </p>
            </div>
            <label>
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              Chấp nhận điều khoản đặt vé
            </label>
          </div>
        </div>

        <div className="pickup-dropoff">
          <h3>Thông tin đón trả</h3>
          <div className="pickup-dropoff-container">
            <div className="pickup-section">
              <h4>Điểm đón</h4>
              <label>
                <input type="radio" name="pickup" value="Điểm đón" required />
                Điểm đón
              </label>
              <label>
                <input
                  type="radio"
                  name="pickup"
                  value="Trung chuyển"
                  required
                />
                Trung chuyển
              </label>
              <input type="text" placeholder="Bến xe Nam Hải" />
            </div>
            <div className="separator"></div> {/* Đường kẻ dọc ngăn cách */}
            <div className="dropoff-section">
              <h4>Điểm trả</h4>
              <label>
                <input type="radio" name="dropoff" value="Điểm trả" required />
                Điểm trả
              </label>
              <label>
                <input
                  type="radio"
                  name="dropoff"
                  value="Trung chuyển"
                  required
                />
                Trung chuyển
              </label>
              <input type="text" placeholder="Nha Trang" />
            </div>
          </div>
          <p>
            Quý khách vui lòng có mặt tại Bến xe/Văn Phòng{" "}
            <strong>Bến xe Nam Hải</strong> trước{" "}
            <strong>06:45 09/10/2024</strong> để được trung chuyển hoặc kiểm tra
            thông tin trước khi lên xe.
          </p>
        </div>

        <button type="submit" className="submit-button">
          Thanh Toán
        </button>
      </form>
    </div>
  );
};

export default BusTicketForm;
