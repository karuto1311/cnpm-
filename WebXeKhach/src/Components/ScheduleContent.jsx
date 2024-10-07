import React, { useState } from 'react';
import '../assets/Css/schedule.css'; // Giả sử bạn cần giữ đường dẫn CSS của riêng bạn

const columns = [
  { id: 'departure', label: 'Điểm đi' },
  { id: 'destination', label: 'Điểm đến' },
  { id: 'date', label: 'Ngày đi' },
  { id: 'seatsAvailable', label: 'Số ghế còn lại' },
];

// Hàm tạo dữ liệu cho bảng
function createData(departure, destination, date, seatsAvailable) {
  return { departure, destination, date, seatsAvailable };
}

// Dữ liệu mẫu cho bảng (tổng cộng 35 dữ liệu)
const rows = [
  createData('Hà Nội', 'TP. Hồ Chí Minh', '2024-10-15', 20),
  createData('Đà Nẵng', 'Nha Trang', '2024-10-16', 15),
  createData('Hải Phòng', 'Quy Nhơn', '2024-10-17', 10),
  createData('Cần Thơ', 'Vũng Tàu', '2024-10-18', 5),
  createData('Nam Định', 'Thanh Hóa', '2024-10-19', 25),
  createData('Thừa Thiên Huế', 'Phú Quốc', '2024-10-20', 30),
  createData('Quảng Ninh', 'Hà Giang', '2024-10-21', 18),
  createData('Bắc Ninh', 'Đà Lạt', '2024-10-22', 12),
  createData('Lạng Sơn', 'Hà Nội', '2024-10-23', 22),
  createData('Kon Tum', 'TP. Hồ Chí Minh', '2024-10-24', 8),
  createData('Đà Lạt', 'Nha Trang', '2024-10-25', 14),
  createData('Phan Thiết', 'Hà Nội', '2024-10-26', 6),
  createData('Bến Tre', 'Đà Nẵng', '2024-10-27', 16),
  createData('Ninh Thuận', 'Hải Phòng', '2024-10-28', 7),
  createData('Gia Lai', 'Hà Giang', '2024-10-29', 11),
  createData('Cà Mau', 'Nam Định', '2024-10-30', 9),
  createData('Sóc Trăng', 'Quy Nhơn', '2024-10-31', 19),
  createData('Long An', 'Vũng Tàu', '2024-11-01', 5),
  createData('Bắc Kạn', 'TP. Hồ Chí Minh', '2024-11-02', 20),
  createData('Hà Tĩnh', 'Hà Nội', '2024-11-03', 3),
  createData('Nghệ An', 'Hải Phòng', '2024-11-04', 4),
  createData('Thanh Hóa', 'Đà Nẵng', '2024-11-05', 2),
  createData('Tuyên Quang', 'Nha Trang', '2024-11-06', 27),
  createData('Yên Bái', 'Quy Nhơn', '2024-11-07', 12),
  createData('Lào Cai', 'Vũng Tàu', '2024-11-08', 8),
  createData('Điện Biên', 'Hà Giang', '2024-11-09', 15),
  createData('Hưng Yên', 'Nam Định', '2024-11-10', 10),
  createData('Thái Nguyên', 'TP. Hồ Chí Minh', '2024-11-11', 14),
  createData('Bắc Giang', 'Đà Nẵng', '2024-11-12', 6),
  createData('Nam Định', 'Hải Phòng', '2024-11-13', 5),
  createData('Ninh Bình', 'Quy Nhơn', '2024-11-14', 12),
  createData('Kon Tum', 'Phú Quốc', '2024-11-15', 8),
  createData('Cao Bằng', 'Hà Nội', '2024-11-16', 10),
  createData('Thái Bình', 'Đà Lạt', '2024-11-17', 7),
  createData('Hà Nam', 'Nha Trang', '2024-11-18', 20),
  createData('Quảng Trị', 'TP. Hồ Chí Minh', '2024-11-19', 3),
  createData('Bạc Liêu', 'Vũng Tàu', '2024-11-20', 22),
];

const ScheduleContent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5); // Số chuyến xe hiển thị mỗi trang

  // Hàm thay đổi trang
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className='schedule'>
      <h1>Lịch Trình Xe Khách</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.id}>{row[column.id]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
        >
          Trước
        </button>
        <span>{`Trang ${page + 1} / ${Math.ceil(rows.length / rowsPerPage)}`}</span>
        <button
          onClick={() => handleChangePage(page + 1)}
          disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
        >
          Sau
        </button>
      </div>
    </div>
  );
};

export default ScheduleContent;
