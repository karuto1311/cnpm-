import React from "react";
import '../assets/Css/About.css';
import logo from '../assets/logo.png';
import about1 from'../assets/About1.png';
import about2 from'../assets/About2.png';
import about3 from'../assets/About3.png';

function AboutContent(){
    return (
       
        <div className="About-content">
        <h1 style={{color:'#FF0000'}}>NHÀ XE NAM HẢI</h1>
        <h2>Vì những chuyến xe an toàn của bạn</h2>
          <div className="intro.content" style={{textAlign:'start'}}>
              <p style={{textAlign:'justify'}}>Công ty quản lý xe khách Nam Hải (Nhà xe Nam Hải) được thành lập vào ngày 09/09/2004. Với hoạt động kinh doanh chính trong lĩnh vực vận tải hành khách và kinh doanh dịch vụ. Nam Hải dần trở thành cái tên quen thuộc trên những nẻo đường của người Việt. </p>
              <p style={{textAlign:'justify'}}>Trải qua 20 năm hình thành với mục tiêu khách hàng là trọng tâm, chúng tôi tự hào là một trong những doanh nghiệp có chất lượng vận tải tốt nhất tại Việt Nam, góp phần không nhỏ trong việc phát triển kinh tế đất nước lên một tầm cao mới. Luôn cải tiến dịch vụ để mang đến những trải nghiệm tốt nhất cho khách hàng, Công ty có nhiều giải thưởng danh giá như “Thương hiệu số 1 Việt Nam”, “Top 10 dịch vụ hoàn hảo vì quyền lợi người tiêu dùng năm 2024”, “Top 5 thương hiệu - sản phẩm uy tín cho các doanh nghiệp tại Việt Nam năm 2024”...</p>
          </div>
          <div className="body-content">
            <div className="body-image"><img src={about1} height="100%"></img></div>
            <div className="body-text">
              <h2 style={{ color:'#FF0000'}}>TẦM NHÌN VÀ SỨ MỆNH</h2>
              <p style={{ color:'#FF0000', fontWeight:'bold'}}>Vì 1 Việt Nam vững mạnh kinh tế - xã hội.</p>
              <p>Trở thành công ty uy tín hàng đầu Việt Nam với cam kết</p>
              <ul>
              <li><a>Tạo môi trường làm việc năng động, thân thiện.</a></li>
              <li><a>Lòng tin của khách hàng là chất lượng của công ty. </a></li>
              <li><a>Trở thành công ty vận tải hàng đầu đất nước.</a></li>
              </ul>
              <p><a style={{color:'#FF0000', fontWeight:'bold'}}>Nam Hải</a> luôn phát triển để tạo nên một Việt Nam vững mạnh về kinh tế - xã hội. </p>
            </div>
          </div>
          <div className="body-content">
            <div className="body-text">
            <h2 style={{ color:'#FF0000'}}>GIÁ TRỊ CỐT LÕI</h2>
            <p>Giá trị cốt lõi <a style={{color:'#FF0000', fontWeight:'bold'}}>- NAM HẢI</a></p>
            <ul>
              <li><p><a style={{color:'#FF0000', fontWeight:'bold'}}>NAM: </a>Tượng trưng cho sự ấm áp, bao dung, hướng tới tương lai. </p></li>
              <li><p><a style={{color:'#FF0000', fontWeight:'bold'}}>HẢI: </a>Tượng trưng cho sự bao la, rộng lớn và sâu sắc, nối kết các đại lục. </p></li>
              <li><p><a style={{color:'#FF0000', fontWeight:'bold'}}>NAM HẢI: </a>Những chuyến xe nối kết mọi nơi bằng sự ấm áp, bao dung.</p></li>
            </ul>
            </div>
            <div className="body-image"><img src={about2} height="100%" width={400}></img></div>
          </div>
          <div className="body-content">
            <div className="body-image"><img src={about3} height="100%"></img></div>
            <div className="body-text">
            <h2 style={{ color:'#FF0000'}}>TRIẾT LÝ</h2>
              <p style={{textAlign:'justify'}}>Nhà xe Nam Hải cam kết mang đến hành trình an toàn, chất lượng và đáng tin cậy cho mỗi hành khách. Chúng tôi đặt sự hài lòng của khách hàng lên hàng đầu, lấy uy tín và tận tâm làm kim chỉ nam trong mọi hoạt động. Với tinh thần phục vụ chuyên nghiệp và sự đồng hành bền bỉ, Nam Hải không chỉ là phương tiện di chuyển mà còn là người bạn đồng hành tin cậy trên mỗi chặng đường, mang đến cho khách hàng những trải nghiệm tốt nhất, chất lượng nhất, sự an toàn chỉnh chu trong từng khâu phục vụ khách hàng, góp phần nâng cao nền kinh tế nước nhà.</p>
            </div>
          </div>
        </div>
        
    )
}
export default AboutContent;