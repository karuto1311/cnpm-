import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-info">
      <h2>Thông tin thanh toán</h2>
      <p>Tổng thanh toán: 140.000Đ</p>
      <p>Thời gian giữ chỗ còn lại: 14:59s</p>
      <p>QR Code: (Mã QR tại đây)</p>
      <p>Nhận tiền từ mọi Ngân hàng và Ví điện tử</p>
      <h3>Phương thức thanh toán</h3>
      <ul>
        <li>ZaloPay</li>
        <li>ShopeePay</li>
        <li>Momo (đã chọn)</li>
        <li>VNPay</li>
        <li>Viettel Money</li>
        <li>Viet QR</li>
        <li>Thẻ ATM nội địa</li>
        <li>Thẻ VISA/Master/JCB</li>
      </ul>
      <h3>Hướng dẫn thanh toán bằng Momo:</h3>
      <ol>
        <li>Mở ứng dụng Momo trên điện thoại</li>
        <li>Dùng biểu tượng để quét mã QR</li>
        <li>Quét mã ở trang này và thanh toán</li>
      </ol>
    </div>
  );
};

export default Payment;
