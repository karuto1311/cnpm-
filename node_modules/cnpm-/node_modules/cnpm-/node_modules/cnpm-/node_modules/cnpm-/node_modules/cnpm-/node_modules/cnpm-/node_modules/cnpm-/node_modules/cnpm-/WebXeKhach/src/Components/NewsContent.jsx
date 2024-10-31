import React from "react";
import '../assets/Css/News.css';
import logo from '../assets/logo.png';

function NewsContent(){
    return(
        
        <div class="layout px-4 py-10 sm:px-0">
            <div class="flex w-full items-center gap-6 pb-6">
                <div class="text-green text-[28px] font-semibold">Tin tức nổi bật</div>
                <div class="mt-1 h-[2px] flex-auto bg-[#00613D]"></div>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="flex cursor-pointer flex-col col-span-4 row-span-2 sm:col-span-2">
                    <div class="relative rounded-lg aspect-[3/1.7]"><img src={logo} className="logo"></img></div>
                    <div class="line_clamp font-medium text-[#111111] hover:opacity-90 mt-5 text-xl leading-6">FUTA ĐỒNG HÀNH CÙNG SHB -  X3 QUÀ TẶNG</div>
                    <div class="line_clamp text-gray mt-2 text-[15px]"></div><span class="text-gray mt-1 text-[13px]">14:35 26/07/2023</span>
                </div>
                <div class="flex cursor-pointer flex-col col-span-2 sm:col-span-1">
                    <div class="relative rounded-lg aspect-[7/4]"><img src={logo} className="logo"></img></div>
                    <div class="line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]">PHƯƠNG TRANG - FUTA BUS LINES THÔNG BÁO THAY ĐỔI SỐ TỔNG ĐÀI ĐẶT VÉ CHI NHÁNH SA ĐÉC (ĐỒNG THÁP)</div><span class="text-gray mt-1 text-[13px]">20:07 10/10/2024</span>
                </div>
                <div class="flex cursor-pointer flex-col col-span-2 sm:col-span-1">
                    <div class="relative rounded-lg aspect-[7/4]"><img src={logo} className="logo"></img></div>
                    <div class="line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]">NÂNG CẤP DÒNG XE VIP 34 GIƯỜNG PHÒNG CHO TUYẾN TP. HỒ CHÍ MINH - BẾN XE NAM TUY HÒA (PHÚ YÊN)</div><span class="text-gray mt-1 text-[13px]">09:30 04/10/2024</span>
                </div>
                <div class="flex cursor-pointer flex-col col-span-2 sm:col-span-1">
                    <div class="relative rounded-lg aspect-[7/4]"><img src={logo} className="logo"></img></div>
                    <div class="line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]">ĐẾN PHAN RANG VỚI DÒNG XE KIM LONG 34 GIƯỜNG PHÒNG CAO CẤP, SANG TRỌNG</div><span class="text-gray mt-1 text-[13px]">14:56 03/10/2024</span>
                </div>
            </div>
        </div>
    )
}

export default NewsContent