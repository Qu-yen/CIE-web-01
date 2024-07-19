<template>
    <div class="page-content">
        <div class="h-header">
            <div class="h-header-content">
                <div class="header-box">

                    <div class="header-box-search">

                        <input type="text" name="" id="" placeholder="Tìm kiếm theo từ khóa">
                    </div>
                    <img class="icon-search" style="width: 24px;height: 24px;" src="../TongQuan/search-normal.png"
                        alt="">
                    <div>
                        <div class="notification-box">
                            <img style="width: 24px;height: 24px;" src="../TongQuan/notification.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="profile-box">
                            <NuxtLink to="/Profile">
                                <img style="width: 24px;height: 24px;" 
                                src="../TongQuan/profile-circle.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-menu">
            <div class="menu-main-logo">
                <NuxtLink to="/TongQuan">
                    <a>
                        <img style="width: 125px;height: 46.22px;" src="../TongQuan/LOGO.png" alt="">
                    </a>
                </NuxtLink>

            </div>
            <nav>
                <ul>
                    <li> <NuxtLink 
                            style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                            to="/TongQuan"   class="nuxt-link_">
                        <span>
                            <div>
                                    <span class="nav-link">

                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Apartment_Home_Icon_UIA (2).png" alt="">

                                        </span>
                                        <span class="title-menu-1">Tổng quan</span>
                                    </span>
                               
                            </div>
                        </span> </NuxtLink>
                    </li>
                    <li 
                    style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                    >
                        <NuxtLink 
                        style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                        to="/QuanLyToTrinh" >
                            <span class="li-nav-link-to-trinh">
                                <div>

                                    <span class="nav-link nav-link-to-trinh">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Sheet_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Tờ trình</span>
                                    </span>

                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink 
                        style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                        to="/QuanLyDeTai">
                            <span>
                                <div>
                                    
                                        <span class="nav-link">
                                            <span class="logo-menu-1">
                                                <img style="width: 24px;height: 24px;"
                                                    src="../TongQuan/archive-book (2).png" alt="">
                                            </span>
                                            <span class="title-menu-1">Quản lý Đề tài</span>
                                        </span>
                                    
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>  <NuxtLink 
                        style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                        to="/QuanLyNhanSu"  class="nuxt-link_">
                        <span>
                            <div>
                                
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Profile_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Nhân sự</span>
                                    </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                    <li>
                        <span>
                            <div>
                                <NuxtLink 
                                style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                                to="/PhanQuyen">
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Setting_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Cài đặt phân quyền</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </span>
                    </li>
                </ul>
            </nav>
            <div class="menu-logout">
                <span>
                    <div class="menu-logout-box">
                        <NuxtLink 
                        style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                        to="/">
                            <span class="logout-box">
                                <span class="logout-box-img">
                                    <img style="width: 24px;height: 24px;" src="../TongQuan/logout.png" alt="">
                                </span>
                                <span class="logout-box-text">Đăng xuất</span>
                            </span>
                        </NuxtLink>
                    </div>
                </span>
            </div>
        </div>
        <div class="page-content-main">
            <main class="page-main-1">
                <!-- /////////////////////// -->
                <div class="box-box-quan-ly-to-trinh">
                    <div class="box-to-trinh-title">
                        <span>Quản lý Tờ trình <spann class="so-luong">(<span>56 tờ trình</span>)</spann>
                        </span>
                    </div>
                    <div class="search-box-12345">
                        <div>
                            <ul>
                                <li>
                                    <img class="icon-search icon-search-2" style="width: 24px;height: 24px;"
                                        src="../TongQuan/search-normal.png" alt="">
                                    <input id="" class="search-input-" type="text" name=""
                                        placeholder="Tìm kiếm theo tên, mã số,...">
                                </li>
                                <li>
                                    <select name="" id="">
                                        <option>Người ký</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </li>
                                <li>
                                    <select name="" id="">
                                        <option>Trạng thái</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </li>
                                <li>
                                    <select name="" id="">
                                        <option>Phiên bản</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </li>
                            </ul>
                            <NuxtLink to="/QuanLyToTrinh/_ThemToTrinh">
                                <span class="btn-btn-them-moi">
                                    <button type="button">+ Thêm mới</button>
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="quan-ly-to-trinh-table">
                        <div>
                            <table border="1"
                            style="color: black;"
                            >
                                <tr>
                                    <th style="text-align: center;
                                        width:48px;height: 48px;">TT</th>
                                    <th style="width:126px;">Số tờ trình
                                        <span class="btn-btn-sx-1">
                                            <img src="../QuanLyDeTai/Vector_1.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                        </span>
                                    </th>
                                    <th style="width:285px;">Tên tờ tình
                                        <span class="btn-btn-sx-2">
                                            <img src="../QuanLyDeTai/Vector_1.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                        </span>
                                    </th>
                                    <th style="width:126px;">Ngày
                                        <span class="btn-btn-sx-3">
                                            <img src="../QuanLyDeTai/Vector_1.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                        </span>
                                    </th>
                                    <th style="width:174px;">Người ký</th>
                                    <th style="width:128px;">Trạng thái
                                        <span class="btn-btn-sx-4">
                                            <img src="../QuanLyDeTai/Vector_1.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                            <img src="../QuanLyDeTai/Vector_2.png"
                                                style="width: 9.33px; height: 5.09px;" alt="">
                                        </span>
                                    </th>
                                    <th style="width:100px;">Phiên bản</th>
                                    <th style="width:20px;"></th>
                                </tr>
                                <tr class="tr-tr">
                                    <td class="stt">1</td>
                                    <td>
                                        <NuxtLink to="/QuanLyToTrinh/ChiTietToTrinh" class="nuxt-link-chitiet" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: black;
                                        text-decoration: none;">
                                            01-TTr-ĐTQT
                                        </NuxtLink>
                                    </td>
                                    <td
                                    style="padding-right: 20px;"
                                    >
                                        v/v Kế hoạch tổ chức đào tạo học kỳ II năm học 2023 - 2024 cho lớp LKĐT và cấp
                                        bằng cử nhân CNTT giữa Học viện CNBCVT và ĐH La Trobe ( Úc) khóa 2022 - 2023
                                    </td>
                                    <td>03/01/2024</td>
                                    <td>Đặng Hoài Bắc</td>
                                    <td > 
                                        <p style="background: rgba(255, 238, 238, 1);
                                                color:rgba(223, 0, 0, 1);
                                                padding: 6px 10px 6px 10px;
                                                text-align: center;
                                                border-radius: 20px;
                                                size: 16px;
                                                "
                                            >
                                            Chưa ký </p>
                                        </td>
                                    <td style="text-align: center">1</td>
                                    <td
                                            style="text-align: center;"
                                            >
                                            <NuxtLink 
                                            style="color:black;"
                                            to="/QuanLyToTrinh/ChiTietToTrinh">
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
<style>
@import "../styleCSS/style.css";

</style>