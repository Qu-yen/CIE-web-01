<template>
    <div class="page-content">
        <div class="h-header">
            <div class="h-header-content">
                <div class="header-box">
                    
                    <div class="header-box-search">
                        
                        <input type="text" name="" id="" placeholder="Tìm kiếm theo từ khóa">
                    </div>
                    <img class="icon-search" style="width: 24px;height: 24px;" src="../search-normal.png" alt="">
                    <div>
                        <div class="notification-box">
                            <img style="width: 24px;height: 24px;" src="../notification.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="profile-box">
                            <NuxtLink to="/Profile">
                            <img style="width: 24px;height: 24px;" src="../profile-circle.png" alt="">
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
        <div class="main-menu">
            <div class="menu-main-logo">

                <nuxtlink to="/TongQuan">
                    <a >
                        <img style="width: 125px;height: 46.22px;" src="../LOGO.png" alt="">
                    </a>
                </nuxtlink>
            </div>
            <nav>
                <ul>
                    <li > <NuxtLink 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/TongQuan">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"  src="../Apartment_Home_Icon_UIA (2).png" alt=""> 
                                        
                                    </span>
                                    <span class="title-menu-1">Tổng quan</span>
                                </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                    <li> <NuxtLink 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/QuanLyToTrinh">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../Sheet_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Tờ trình</span>
                                </span>
                            </div>
                        </span>
                        </NuxtLink>
                    </li>
                    <li
                    style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                    > <NuxtLink 
                        style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                        to="/QuanLyDeTai">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../archive-book (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Đề tài</span>
                                </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                    <li> <NuxtLink 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/QuanLyNhanSu">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../Profile_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Nhân sự</span>
                                </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                    <li>  <NuxtLink 
                        style="color:rgba(98, 98, 98, 1);"
                        to="/PhanQuyen">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../Setting_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Cài đặt phân quyền</span>
                                </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="menu-logout">
                <span>
                    <div  class="menu-logout-box">
                        <span class="logout-box">
                            <NuxtLink 
                            style="color:rgba(98, 98, 98, 1);"
                            to="/">
                                <span class="logout-box-img">
                                    <img style="width: 24px;height: 24px;" src="../logout.png" alt="">
                                </span>
                                <span class="logout-box-text">Đăng xuất</span>
                            </NuxtLink>
                        </span>
                    </div>
                </span>
            </div>
        </div>
        <div class="page-content-main">
            <main class="page-main-1">
                <!-- /////////////////////// -->
                <div class="box-de-tai-them-moi">
                    <div class="title-them-moi-de-tai">
                        <div class="title-div">Chi tiết Đề tài</div>
                        <div class="btn-button-them-moi   btn-button-dt-chinh-sua">
                            <button
                            style="text-align: left;
                                    width:157px;
                                    border: 1px solid var(--Blue, rgba(66, 133, 244, 1));
                                    color: var(--Blue, rgba(66, 133, 244, 1));
                                    background-color:white;"
                                    >
                                    <span style=" display: inline-block; 
                                    transform: rotate(90deg);
                                    "
                                    >&#9998;</span>Chỉnh sửa </button>

                        </div>
                        <!-- ////////////// -->
                        <!-- ////////////// -->
                        <!-- ////////////// -->
                        <!-- ////////////// -->
                    </div>
                    <div class="box-thong-tin-de-tai">
                        <div class="title-1">
                            <span>Thông tin đề tài</span>
                        </div>
                        <div class="nd-nd-1">
                            <div class=" text-tx">Tên đề tài</div>
                            <div class="input-nhap-ten-dt">
                                <textarea name="txtTenDeTai"  placeholder="Nhập tên đề tài"></textarea>
                            </div>
                        </div>
                        <div class="nd-nd-2">
                            
                            <div class="select-loai-hinh_">
                                <div class=" text-tx">Loại hình</div>
                                <div >
                                    <select>
                                        <option>Chọn</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>2</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="input-ma-so_">
                                <div class=" text-tx">Mã số</div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập mã số">
                                </div>
                            </div>
                            <div class="input-don-vi-chu-tri_">
                                <div class=" text-tx">Đơn vị chủ trì</div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập đơn vị chủ trì">
                                </div>
                            </div>
                        </div>
                        <div class="nd-nd-3">
                            <div class="nhap--1 ">
                                <div class=" text-tx">Cấp quản lý</div>
                                <div>
                                    <select>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                    </select>
                                </div>
                            </div>
                            <div class="nhap--2">
                                <div class=" text-tx">Số lượng thành viên</div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập mã số">
                                </div>
                            </div>
                            <div class="nhap--3 ">
                                <div class=" text-tx">Thời gian thực hiện</div>
                                <div>
                                    <select>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                        <option>Chọn</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="nd-nd-4">
                            <div class="nhap--1">
                                <div class=" text-tx">Kinh phí thực hiện</div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập kinh phí">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-danh-sach-thanh-vien">
                        <div class="dstv-nd">
                            <div class="title-2">
                                <span>Danh sách thành viên</span>
                            </div>
                            <div class="box-table-ds-thanh-vien">
                                <table border="1">
                                    <tr>
                                        <th class="stt"
                                        style="text-align: center;
                                        width:48px; height: 48px;
                                            ">TT</th>
                                        <th style="width:238px;">Tên thành viên</th>
                                        <th style="width:171px;">Mã định danh</th>
                                        <th style="width:289px;">Đơn vị công tác</th>
                                        <th style="width:174px;">Vai trò</th>
                                        <th  style="width:48px;"></th>
                                    </tr>
                                    <tr>
                                        <td  class="stt"
                                            style="font-size: 16px; font-weight: 400;line-height: 24px;"
                                        >1</td>
                                        <td>Nhập tên thành viên</td>
                                        <td>Nhập mã</td>
                                        <td>Nhập đơn vị công tác</td>
                                        <td>Chọn vai trò</td>
                                        <td
                                            style="text-align: center;"
                                            >
                                            <NuxtLink 
                                            style="color:black;"
                                            to="/QuanLyDeTai/ThemDeTai">
                                                <b>&#8285;</b>
                                            </NuxtLink>
                                            </td>
                                    </tr>
                                    
                                </table>
                                <div class="btn-btn-them-thanh-vien">
                                    <button type="button">Thêm thành viên +</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-ho-so-thuc-hien">
                        <div class="box-nd-box-3">
                            <div class="title-text">
                                <span>Hồ sơ thực hiện</span>
                            </div>
                            <div class="ho-so-thuc-hien-upload">
                                <div class="nd--1 ">
                                    <div class="text">Thuyết minh đề tài</div>
                                    <div>
                                        <span class="btn-1">
                                            <button>
                                                <img src="../ThemDeTai/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span class="btn-2">
                                            <button>
                                                <img src="../ThemDeTai/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Xem file</button>
                                        </span>
                                    </div>
                                </div>
                                <div  class="nd--2 ">
                                    <div class="text">Đề cương</div>
                                    <div>
                                        <span class="btn-1">
                                            <button >
                                                <img src="../ThemDeTai/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span  class="btn-2">
                                            <button>
                                                <img src="../ThemDeTai/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Xem file</button>
                                        </span>
                                    </div>
                                </div>
                                <div  class="nd--3 ">
                                    <div class="text">Quyển báo cáo </div>
                                    <div>
                                        <span  class="btn-1">
                                            <button>
                                                <img src="../ThemDeTai/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span  class="btn-2">
                                            <button>
                                                <img src="../ThemDeTai/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Xem file</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /////////////////////// -->
            </main>
        </div>
    </div>
</template>
<style >
@import "../style.css";
@import "../ThemDeTai/style-1.css";

    .page-content-main
    .box-de-tai-them-moi
    .title-them-moi-de-tai
    .btn-button-dt-chinh-sua 
    button:active{
        color: white;
        background-color: #4285f4;
    }
    
</style>