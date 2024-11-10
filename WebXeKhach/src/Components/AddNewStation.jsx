import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/Css/AddNewStation.css";

function AddNewStation() {
  /*const navigate = useNavigate();

  // Hàm để điều hướng về trang QlyBen
  const goToQlyBen = () => {
    navigate("/qlyben");
  };*/

  return (
    <div className="add-station-container">
      <h1>QUẢN LÝ BẾN XE</h1>
      <p>Quản lý các bến xe của nhà xe Nam Hải</p>

      <div className="form-containerAddNewStation">
        <div className="form-header">
          <h2>THÊM MỚI BẾN XE</h2>
          <Link to="/qlyben">
            <button className="go-to-qlyben-button">📅 Danh sách</button>
          </Link>
        </div>
        <form className="station-form">
          <label>
            MÃ BẾN XE (3 ký tự, VD: 001; 002; 025...) <span>*</span>
            <input type="text" required />
          </label>

          <label>
            TÊN BẾN XE <span>*</span>
            <input type="text" required />
          </label>

          <label>
            ĐỊA CHỈ (Nhập số nhà, đường, phường/ xã, quận/ huyện) <span>*</span>
            <input type="text" required />
          </label>

          <label>
            TỈNH THÀNH (Nhập tỉnh/ thành phố trực thuộc trung ương){" "}
            <span>*</span>
            <input type="text" required />
          </label>

          <button type="submit" className="save-button">
            Lưu dữ liệu
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewStation;
