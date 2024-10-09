import React from 'react'
import '../assets/Css/Contact.css'


function ContactContent() {
  return (
    <div className='contact-content'>
        <div className='info-content'>
          <h1>Liên hệ với chúng tôi</h1>
          <div>
            <h1>CÔNG TY XE KHÁCH NAM HẢI</h1>
            <p>Địa chỉ: Hóc Môn</p>
            <p>Website: http://namhai.vn</p>
            <p>Điện thoại: 18001508</p>
            <p>Fax: 0123456789</p>
            <p>Email: namhai@bus.vn</p>
            <p>Hotline: 01239876</p>
          </div>
        </div>
        <div className='form-content'>
          <h2>Gửi thông tin cho chúng tôi</h2>
          <form>
             <div className='form-field-double'>
                <input type='text' placeholder='Nam Hai bus' width='50%'/>
                <input type='text' name='Hoten' placeholder='Họ và tên' width='50%'/>
             </div>
             <div className='form-field-double'>
                <input type='text' name='email' placeholder='Email' width='50%'/>
                <input type='tel' name='sdt' placeholder='Số điện thoại' width='50%'/>
             </div>
                <input type='text' name='title' placeholder='Nhập tiêu đề' width='100%'/>
                <br/>
                <input type='textarea' name='noidung' placeholder='Nhập ghi chú' width='100%' height="100px" />
          </form>
        </div>
    </div>
  )
}

export default ContactContent