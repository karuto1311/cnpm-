import React from 'react'
import '../assets/Css/Contact.css'
import logo from '../assets/logo.png'
import letter from '../assets/letter.png'


function ContactContent() {
  return (
    <div className='contact-content'>
        <div className='info-content'>
          <h2>Liên hệ với chúng tôi</h2>
          <h1 style={{ color: 'red' }}>CÔNG TY CỔ PHẦN XE KHÁCH NAM HẢI</h1>
          <img src={logo} width={150} height={150}/>
            <div className='info-content-detail'>
            <p>Địa chỉ: 458 Trường Chinh, Phường 
            13, Quận Tân Bình, TP. Hồ Chí Minh</p>
            <p>Website: http://namhai.vn</p>
            <p>Điện thoại: 18001508</p>
            <p>Fax: 02843512123</p>
            <p>Email: xekhachnamhai@gmail.com</p>
            <p>Hotline: 02843512124</p>
          </div>
        </div>
        <div className='form-content'>
         <h2 style={{color:'#FF0000', textAlign:'left'}}><img src={letter} width={30} height={25}/>  Gửi thông tin cho chúng tôi</h2>
          <form >
             <fieldset>
                <input type='text' name='Hoten' placeholder='Họ và tên'/>        
                <input type='text' name='email' placeholder='Email'/>
                <input type='tel' name='sdt' placeholder='Số điện thoại'/>
                <input type='text' name='title' placeholder='Nhập tiêu đề'/>
                <input type='text' name='noidung' placeholder='Nhập ghi chú' style={{paddingBottom:'100px'}} />
                <br/>
                <input type='submit' name='gửi' value='Gửi' style={{width:'100px', backgroundColor:'#FF0000', color:'white',fontWeight:'bold'}}/>

            </fieldset>
          </form>
        </div>
   </div>
  )
}

export default ContactContent