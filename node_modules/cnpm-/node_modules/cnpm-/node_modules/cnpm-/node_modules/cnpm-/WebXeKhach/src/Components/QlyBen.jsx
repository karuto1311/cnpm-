import React from "react";
import "../assets/Css/QLyBen.css";
import { Link } from "react-router-dom";

function QlyBen() {
  return (
    <div className="ql-ben-container">
      <h1>QUẢN LÝ BẾN XE</h1>
      <p>Quản lý các bến xe của nhà xe Nam Hải</p>
      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Nhập bến xe cần tìm..."
        />
        <button className="search-button">🔍</button>
      </div>
      {/*Bảng bến xe*/}
      <div className="table-container">
        <div className="table-header">
          <div className="left">
            <span>Hiển thị: </span>

            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <Link to="/addnewstation">
            <button className="create-button">Thêm mới</button>
          </Link>
        </div>
        <table className="station-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TÊN BẾN XE</th>
              <th>ĐỊA CHỈ</th>
              <th>TỈNH THÀNH</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Bến Xe An Giang</td>
              <td>26 Nguyễn Giản Thanh</td>
              <td>An Giang</td>
              <td>
                <button className="detail-button">Chi tiết</button>
                <button className="delete-button">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>Bến Xe Long An</td>
              <td>516 Trương Long</td>
              <td>Long An</td>
              <td>
                <button className="detail-button">Chi tiết</button>
                <button className="delete-button">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>003</td>
              <td>Bến Xe An Phước</td>
              <td>315 Nguyễn Long Nam</td>
              <td>An Phước</td>
              <td>
                <button className="detail-button">Chi tiết</button>
                <button className="delete-button">Xóa</button>
              </td>
            </tr>

            <tr>
              <td>004</td>
              <td>Bến Xe Đồng Nai</td>
              <td>1045 Lương Định Của</td>
              <td>Đồng Nai</td>
              <td>
                <button className="detail-button">Chi tiết</button>
                <button className="delete-button">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>005</td>
              <td>Bến Xe Tây Ninh</td>
              <td>256 Trường An</td>
              <td>Tây Ninh</td>
              <td>
                <button className="detail-button">Chi tiết</button>
                <button className="delete-button">Xóa</button>
              </td>
            </tr>
            {/* Thêm các hàng khác ở đây */}
          </tbody>
        </table>
        <div className="pagination">
          Hiển thị từ 1 - 5 / 10 bản ghi
          <div className="pagination-buttons">
            <button>Đầu</button>
            <button>1</button>
            <button>2</button>
            <button>Cuối</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QlyBen;
