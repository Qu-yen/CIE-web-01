<template>

    <div class="page-content">
        <div class="h-header">
            <div class="h-header-content">
                <div class="header-box">
                    
                    <div class="header-box-search">
                        
                        <input type="text" name="" id="" placeholder="Tìm kiếm theo từ khóa">
                    </div>
                    <img class="icon-search" style="width: 24px;height: 24px;" src="../QuanLyDeTai/search-normal.png" alt="">
                    <div>
                        <div class="notification-box">
                            <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/notification.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="profile-box">
                            <NuxtLink to="/Profile">
                                <img style="width: 24px;height: 24px;" 
                                src="../QuanLyDeTai/profile-circle.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        <div class="main-menu">
            <div class="menu-main-logo">
                <nuxt-link to="/TongQuan">
                <a >
                    <img style="width: 125px;height: 46.22px;" src="../QuanLyDeTai/LOGO.png" alt="">
                </a>
                </nuxt-link>
            </div>
            <nav>
                <ul>
                    <li><nuxt-link 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/TongQuan">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"  src="../QuanLyDeTai/Apartment_Home_Icon_UIA (2).png" alt=""> 
                                        
                                    </span>
                                    <span class="title-menu-1">Tổng quan</span>
                                </span>
                            </div>
                        </span></nuxt-link>
                    </li>
                    <li> <nuxt-link 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/QuanLyToTrinh">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/Sheet_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Tờ trình</span>
                                </span>
                            </div>
                        </span>
                        </nuxt-link>
                    </li>
                    <li
                    style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                    > <nuxt-link 
                    style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                    to="/QuanLyDeTai">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/archive-book (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Đề tài</span>
                                </span>
                            </div>
                        </span></nuxt-link>
                    </li>
                    <li> <nuxt-link 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/QuanLyNhanSu">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/Profile_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Nhân sự</span>
                                </span>
                            </div>
                        </span></nuxt-link>
                    </li>
                    <li> <nuxt-link 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/PhanQuyen">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/Setting_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Cài đặt phân quyền</span>
                                </span>
                            </div>
                        </span></nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="menu-logout">
                <span>
                    <div  class="menu-logout-box">
                        <nuxt-link 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/">
                        <span class="logout-box">
                            <span class="logout-box-img">
                                <img style="width: 24px;height: 24px;" src="../QuanLyDeTai/logout.png" alt="">
                            </span>
                            <span class="logout-box-text">Đăng xuất</span>
                        </span></nuxt-link>
                    </div>
                </span>
            </div>
        </div>
        <div class="page-content-main">
            <main class="page-main-1">
                <!-- /////////////////////// -->
                <div class="box-box-quan-ly-de-tai">
                    <div class="box-de-tai-title">
                        Quản lý Đề tài 
                        <span class=".so-luong-de-tai">(
                            <span>20 đề tài</span>
                            )</span>
                    </div>
                    <div class="search-box-12345">
                        <div>
                            <ul>
                                <li>
                                    <img class="icon-search icon-search-2" style="width: 24px;height: 24px;" src="../QuanLyDeTai/search-normal.png" alt="">
                                    <input class="input-search" 
                                    style="width:280px;"
                                    type="text" name="" id="" placeholder="Tìm kiếm theo tên, mã số,...">
                                </li>
                                <li> 
                                    <select 
                                    style="width:140px;"
                                    >
                                        <option>Loại hình</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </li>
                                <li>
                                    <select 
                                    style="width:160px;"
                                    >
                                        <option>Cấp quản lý </option>
                                        <option>Cấp học viện</option>
                                        <option>Cấp thành phố?</option>
                                    </select>
                                </li>
                                <li>
                                    <select 
                                    style="width:170px;"
                                    >
                                        <option>Năm thực hiện </option>
                                        <option>2020</option>
                                        <option>2021</option>
                                        <option>2022</option>
                                        <option>2023</option>
                                        <option>2024</option>
                                    </select>
                                </li>
                            </ul>
                            <nuxt-link to="/QuanLyDeTai/ThemDeTai">
                                <span class="btn-btn-div-them-moi">
                                    <button type="button">+ Thêm mới</button>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="box-table-de-tai">
                        <div class="de-tai-nd-nd">
                            <table border="1" 
                            style="color:black;"
                            >
                                <tr>
                                    <th style="text-align: center;
                                        width:48px;height:48px">TT</th>
                                    <th style="width:277px;">Tên đề tài/nhiệm vụ

                                        <span 
                                        style=""
                                        class="btn-btn-sx-1-1">
                                            <img src="../QuanLyDeTai/Vector_1.png" 
                                                style="width: 9.33px; height: 5.09px;padding: 3px;border: 1px solid #f0f0f000;"
                                            alt="">
                                            
                                            <img src="../QuanLyDeTai/Vector_2.png" 
                                                style="width: 9.33px; height: 5.09px; padding: 3px;border: 1px solid #f0f0f000;"
                                            alt="">
                                        </span>
                                    </th>
                                    <th style="width:104px;">Loại hình</th>
                                    <th style="width:116px;">Mã số
                                        <span class="btn-btn-sx-2-1 ">
                                                <img src="../QuanLyDeTai/Vector_1.png" 
                                                    style="width: 9.33px; height: 5.09px;"
                                                alt="">
                                                <img src="../QuanLyDeTai/Vector_2.png" 
                                                    style="width: 9.33px; height: 5.09px;"
                                                alt="">
                                        </span>
                                    </th>
                                    <th style="width:128px;">Cấp quản lý
                                        <span class="btn-btn-sx-3-11 ">
                                            <img src="../QuanLyDeTai/Vector_1.png" 
                                                style="width: 9.33px; height: 5.09px;"
                                            alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png" 
                                                style="width: 9.33px; height: 5.09px;"
                                            alt="">
                                    </span>
                                    </th>
                                    <th  style="width:160px;">Chủ trì</th>
                                    <th style="width:154px;">Năm thực hiện
                                        <span class="btn-btn-sx-4-1 ">
                                            <img src="../QuanLyDeTai/Vector_1.png" 
                                                style="width: 9.33px; height: 5.09px;"
                                            alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png" 
                                                style="width: 9.33px; height: 5.09px;"
                                            alt="">
                                        </span>
                                    </th>
                                    <th style="width:20px;"></th>
                                </tr>
                                <tr class="tr-tr">
                                    <td class="stt">1</td>
                                    <td
                                    style="padding-right:16px;"
                                    > 
                                        <nuxt-link 
                                        style="color:black;
                                        "
                                        to="/QuanLyDeTai/ChiTietDeTai">
                                        Nghiên cứu ứng dụng thử nghiệm bộ công cụ biên tập bài giảng số H5P để xây dựng bài giảng số về giáo dục Đại học Châu Âu tại Học viện Công nghệ Bưu chính Viễn thông
                                        </nuxt-link>
                                    </td>
                                    <td>Đề tài</td>
                                    <td>06-2022-HV-ĐTQT-QL</td>
                                    <td>Cấp Học viện</td>
                                    <td>Phạm Vũ Minh Tú</td>
                                    <td>2022</td>
                                    
                                        <td
                                            style="text-align: center;"
                                            >
                                            <NuxtLink 
                                            style="color:black;"
                                            to="/QuanLyDeTai/ChiTietDeTai">
                                                <b>&#8285;</b>
                                            </NuxtLink>
                                    </td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>
<style >
    @import "../QuanLyNhanSu/style.css";
</style>


