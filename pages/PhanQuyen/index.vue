<template>

    <div class="page-content">
        <div class="h-header">
            <div class="h-header-content">
                <div class="header-box">

                    <div class="header-box-search">

                        <input type="text" name="" id="" placeholder="Tìm kiếm theo từ khóa">
                    </div>
                    <img class="icon-search" src="../QuanLyNhanSu/search-normal.png" style="width: 24px;height: 24px;"
                        alt="">
                    <div>
                        <div class="notification-box">
                            <img style="width: 24px;height: 24px;" src="../QuanLyNhanSu/notification.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="profile-box">
                            <NuxtLink to="/Profile">
                                <img style="width: 24px;height: 24px;" src="../QuanLyNhanSu/profile-circle.png" alt="">
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
                        <img style="width: 125px;height: 46.22px;" src="../QuanLyNhanSu/LOGO.png" alt="">
                    </a>
                </NuxtLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/TongQuan" class="nuxt-link_">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../QuanLyNhanSu/Apartment_Home_Icon_UIA (2).png" alt="">

                                        </span>
                                        <span class="title-menu-1">Tổng quan</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/QuanLyToTrinh" class="nuxt-link_">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../QuanLyNhanSu/Sheet_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Tờ trình</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/QuanLyDeTai" class="nuxt-link_">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../QuanLyNhanSu/archive-book (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Đề tài</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/QuanLyNhanSu"
                            class="nuxt-link_ nuxt-link_vvv">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../QuanLyNhanSu/Profile_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Nhân sự</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li style="background: #e6f0ff; color: #4285f4;">
                        <NuxtLink style=" color: #4285f4;" to="/PhanQuyen" class="nuxt-link_">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../QuanLyNhanSu/Setting_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Cài đặt phân quyền</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="menu-logout">
                <span>
                    <div class="menu-logout-box">
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/">
                            <span class="logout-box">
                                <span class="logout-box-img">
                                    <img style="width: 24px;height: 24px;" src="../QuanLyNhanSu/logout.png" alt="">
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

                <div class="box-box-quan-ly-nhan-su">
                    <div class="box-title-quan-ly-nhan-su">
                        <div class="title-box">
                            <span>Cài đặt Phân quyền</span>
                        </div>
                        <div class="search-box">
                            <div class="search-1-2-3">
                                <ul>
                                    <li>
                                        <img class="icon-search icon-search-2" src="../QuanLyNhanSu/search-normal.png"
                                            style="width: 24px;height: 24px;" alt="">
                                        <input style="width:300px;" class="input-search" type="text" name="" id=""
                                            placeholder="Tìm kiếm theo tên, mã số,...">
                                    </li>
                                    <li>
                                        <select style="width:140px;">
                                            <option>Chức vụ</option>
                                            <option>
                                                <button>Giám đốc</button>
                                            </option>

                                        </select>
                                    </li>
                                    <li>
                                        <select style="width:140px;">
                                            <option>Giới tính</option>
                                            <option>
                                                <button>Nam</button>
                                            </option>
                                            <option>
                                                <button>Nữ</button>
                                            </option>
                                        </select>
                                    </li>
                                </ul>
                                <NuxtLink to="/QuanLyNhanSu/ThemNhanSu">
                                    <div class="btn-btn-div-them-moi">
                                        <button type="button">+ Thêm mới</button>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="box-table-nhan-su">
                        <div class="nhan-su-nd-nd">
                            <table border="1" style="color:black;">
                                <tr>
                                    <th style="text-align: center;
                                    width:48px; height: 48px;">TT</th>
                                    <th style="width:247px;">Họ và tên
                                        <span class="btn-btn-sx">
                                            <span>▴</span>
                                            <span>▾</span>
                                        </span>
                                    </th>
                                    <th style="width:202px;">Chức vụ hiện tại</th>
                                    <th style="width:178px;">Mã nhân viên
                                        <span class="btn-btn-sx">
                                            <span>▴</span>
                                            <span>▾</span>
                                        </span>
                                    </th>
                                    <th style="width:174px;">Số điện thoại </th>
                                    <th style="width:120px;">Giới tính </th>
                                    <th style="width:40px;"> </th>
                                </tr>
                                <tr class="trtr-tr">
                                    <td class="stt">1</td>
                                    <td>
                                        <NuxtLink to="/QuanLyNhanSu/ChiTietNhanSu" style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: black;
                                        text-decoration: none;">
                                            Hoàng Hữu Hạnh
                                        </NuxtLink>
                                    </td>
                                    <td>Giám đốc</td>
                                    <td>TTDT100192</td>
                                    <td>0984567835</td>
                                    <td>Nam</td>
                                    <td style="text-align: center;">
                                        <NuxtLink style="color:black;" to="/QuanLyToTrinh/ChiTietToTrinh">
                                            <b>&#8285;</b>
                                        </NuxtLink>
                                    </td>
                                </tr>
                                <style>
                                    .page-content-main .page-main-1 .box-box-quan-ly-nhan-su .box-table-nhan-su .nhan-su-nd-nd table .trtr-tr:active {
                                        background: rgba(230, 240, 255, 1);

                                    }
                                </style>

                            </table>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    </div>
</template>
<style>
.nuxt-link_ {
    background: #4286f400;
    color: #626262;
}

.nuxt-link_:hover {
    background: #e6f0ff;
    /* color: #4285f4; */
}

.nuxt-link_vvv {
    background: #e6f0ff;
    color: #4285f4;
}

.li_vvv {
    background: #e6f0ff;
    color: #4285f4;
}

/* .page-content-main  .page-main-1
.box-box-quan-ly-nhan-su .box-table-nhan-su
.nhan-su-nd-nd table  .trtr-tr:active{
    background: rgba(230, 240, 255, 1); 
    color:rgba(66, 133, 244, 1);
} */





@import "../QuanLyNhanSu/style.css";
</style>