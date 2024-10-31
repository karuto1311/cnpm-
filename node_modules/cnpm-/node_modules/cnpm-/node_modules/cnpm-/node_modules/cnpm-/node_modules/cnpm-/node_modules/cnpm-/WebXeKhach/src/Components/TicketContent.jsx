import React from "react";
import '../assets/Css/Ticket.css';


function TicketContent(){
    return(
        <div>
            <h1>TRA CỨU THÔNG TIN ĐẶT VÉ</h1>
            <div>Tìm thông tin vé của mình</div>
            <div className="form-ticket">
                <form>
                    <div>
                        Nhập số điện thoại
                        <input type="text"></input>
                    </div>
                    <div>
                        Nhập mã số vé     
                        <input type="text"></input>
                    </div>
                    <div>
                        <button className="button-ticket">Tìm vé</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default TicketContent;