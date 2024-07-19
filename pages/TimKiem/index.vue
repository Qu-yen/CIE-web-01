<template>
    <div class="page-content">

        <div class="h-header">
            <div class="h-header-content">
                <div class="header-box">

                    <div class="header-box-search">

                        <input id="" type="text" name="" placeholder="Tìm kiếm theo từ khóa">
                    </div>
                    <NuxtLink to="/TimKiem">
                        <img class="icon-search" src="../TongQuan/search-normal.png" style="width: 28px;height: 24px;"
                            alt="">
                    </NuxtLink>

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
                    <li style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);">
                        <span>
                            <div>
                                <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                                    to="/TongQuan">
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Apartment_Home_Icon_UIA (2).png" alt="">

                                        </span>
                                        <span class="title-menu-1">Tổng quan</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </span>
                    </li>
                    <li>
                        <span>
                            <div>
                                <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(98, 98, 98, 1);"
                                    to="/QuanLyToTrinh">
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Sheet_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Tờ trình</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </span>

                    </li>
                    <li>
                        <span>
                            <div>
                                <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(98, 98, 98, 1);"
                                    to="/QuanLyDeTai">
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/archive-book (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Đề tài</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </span>
                    </li>
                    <li>
                        <span>
                            <div>
                                <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(98, 98, 98, 1);"
                                    to="/QuanLyNhanSu">
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;"
                                                src="../TongQuan/Profile_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Nhân sự</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </span>
                    </li>
                    <li>
                        <span>
                            <div>
                                <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(98, 98, 98, 1);"
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
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/">
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
        <div class="page-content-main-search">
            <main class="page-main-1">
                <div class="page-main-2">
                    <div class="page-main-2-1">
                        <div class="page-main-2-1-title">
                            <div>
                                Kết quả tìm kiếm có chứa từ khóa "
                                <span>CLC</span>"
                            </div>
                        </div>
                    </div>
                    <div class="page-main-2-2_xx">
                        <div class="totrinh-table-1_xx">
                            <div class="title-table-1_xx" style="color:black; ">
                                <span>Tờ trình</span>
                            </div>
                            <div class="div-table-1_xx">
                                <table class="table-1_xx" style="font-size: 16px; 
                                color: rgba(18, 18, 18, 1);
                                ">
                                    <tr class="tr-table-1_xx">
                                        <th style="text-align: center;width:48px;">TT</th>
                                        <th style="width:126px;">Số tờ trình</th>
                                        <th style="width:285px;">Tên tờ tình</th>
                                        <th style="width:126px;">Ngày</th>
                                        <th style="width:160px;">Người ký</th>
                                        <th style="width:128px;">Trạng thái</th>
                                        <th style="width:100px;">Phiên bản</th>
                                        <th style="width:36px;"></th>
                                    </tr>
                                    <tr class="tr-table-2_xx">
                                        <td style="text-align: center;">1</td>
                                        <td>02-TTr-ĐTQT</td>
                                        <td style="padding-right: 18px;">
                                            v/v Kế hoạch tổ chức đào tạo học kỳ II năm học 2023 - 2024 cho lớp LKĐT và
                                            cấp bằng cử nhân CNTT giữa Học viện CNBCVT và ĐH La Trobe ( Úc) khóa 2022 -
                                            2023</td>
                                        <td>03/01/2024</td>
                                        <td>Đặng Hoài Bắc</td>
                                        <td>
                                            <p style="background: rgba(255, 238, 238, 1);
                                                color:rgba(223, 0, 0, 1);
                                                padding: 6px 10px 6px 10px;
                                                text-align: center;
                                                border-radius: 20px;
                                                size: 16px;
                                                ">
                                                Chưa ký </p>
                                        </td>
                                        <td style="text-align: center;">
                                            2</td>
                                        <td style="text-align: center;">
                                            <NuxtLink style="color:black;" to="/QuanLyToTrinh/ChiTietToTrinh">
                                                <b>&#8285;</b>
                                            </NuxtLink>
                                        </td>
                                    </tr>


                                    <style>
                                        .tr-table-2_xx {
                                            cursor: pointer;
                                        }

                                        .tr-table-2_xx:link {}

                                        .tr-table-2_xx:active {
                                            background-color: rgba(215, 230, 255, 1);
                                            color: rgba(66, 133, 244, 1);
                                            cursor: progress;
                                        }
                                    </style>
                                </table>


                            </div>
                        </div>
                    </div>
                    <div class="page-main-2-3_xx">
                        <div class="detai-table-x1">
                            <div class="title-table-x1" style="color:black;">
                                <span>Đề tài</span>
                            </div>
                            <div class="div-table-x1">
                                <table class="table-x1">
                                    <tr class="tr-table-x1" style="color:black;">
                                        <th style="  text-align: center; width:48px;">TT</th>
                                        <th style="width:285px;">Tên đề tài/nhiệm vụ</th>
                                        <th style="width:114px;">Loại hình</th>
                                        <th style="width:120px;">Mã số</th>
                                        <th style="width:128px;">Cấp quản lý</th>
                                        <th style="width:162px;">Chủ trì</th>
                                        <th style="width:120px;">Năm thực hiện</th>
                                        <th style="width: 30px;"></th>
                                    </tr>
                                    <tr class="tr-table-2-x1">
                                        <td style="text-align: center;">1</td>
                                        <td style="padding-right: 22px;">
                                            Nghiên cứu ứng dụng thử nghiệm bộ công cụ biên tập bài giảng số H5P để xây
                                            dựng bài giảng số về giáo dục Đại học Châu Âu tại Học viện Công nghệ Bưu
                                            chính Viễn thông</td>
                                        <td style="padding-left: 0px;">Đề tài </td>
                                        <td style="padding-left: 0px;">06-2022-HV-ĐTQT-QL</td>
                                        <td style="padding-left: 0px;">Cấp học viện</td>
                                        <td style="padding-left: 0px;">Phạm Vũ Minh Tú</td>
                                        <td style="padding-left: 0px;">2024</td>
                                        <td style="text-align: center;">
                                            <NuxtLink style="color:black;" to="/QuanLyDeTai/ChiTietDeTai">
                                                <b>&#8285;</b>
                                            </NuxtLink>
                                        </td>
                                    </tr>


                                    <style>
                                        .tr-table-2-x1 {
                                            cursor: pointer;
                                        }

                                        .tr-table-2-x1 td {
                                            color: rgba(18, 18, 18, 1);
                                        }

                                        .tr-table-2-x1:active {
                                            background-color: rgba(215, 230, 255, 1);
                                            color: rgba(66, 133, 244, 1);
                                            cursor: progress;
                                        }
                                    </style>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style>
/* ---------TONG QUAN---------- */
.page-content {
    position: relative;
    margin: auto;
    width: 1280px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: #ffffff;

}

/* ////////////////header///////////////// */
.h-header {
    position: fixed;
    top: 0px;
    width: 1066px;
    height: 64px;
    margin-left: 214px;
    gap: 0px;
    opacity: 0px;
    color: rgba(98, 98, 98, 1);
    background-color: rgb(255, 255, 255);
}

.h-header-content {
    position: relative;
}

.h-header .h-header-content .header-box {
    position: absolute;
    top: 0px;
    left: 55%;
    width: 500px;
    display: inline-block;
}

.h-header .h-header-content .header-box {
    position: absolute;
    top: 12px;
    right: 3%;
    width: 700px;
}

.h-header .header-box .header-box-search input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 284px;
    padding-left: 50px;
    height: 40px;
    gap: 0px;
    font-size: 16px;
    border-radius: 30px;
    color: rgb(0, 0, 0);
    border: 1px solid rgba(211, 211, 211, 1);
}

.h-header .header-box .header-box-search input::placeholder {
    font-size: 16px;
}

.h-header input:focus {
    outline: none;
}

.h-header .header-box .icon-search {
    position: absolute;
    top: 9px;
    left: 13px;
}

.h-header .header-box .notification-box {
    position: absolute;
    top: 9px;
    left: 370px;
}

.h-header .header-box .profile-box {
    position: absolute;
    top: 9px;
    left: 350px;
    left: 420px;
}

/* ////////////menu bar/////////////// */
.main-menu {
    position: fixed;
    top: 0px;
    width: 214px;
    height: 100%;
    gap: 0px;
    opacity: 0px;
    color: rgba(98, 98, 98, 1);

    background-color: rgb(255, 255, 255);
}

.menu-main-logo {
    position: relative;
    top: 7px;
    left: 19px;
    margin-bottom: 35px;
}

.main-menu nav ul {
    list-style: none;
    padding-left: 0px;
}

.main-menu nav ul li {
    position: relative;
    text-align: left;
    height: 48px;
    margin-bottom: 12px;
    background-color: rgb(255, 255, 255);
    padding-left: 25px;

}

.main-menu nav ul li:hover {
    background: rgba(230, 240, 255, 1);
    color: var(--Blue, rgba(66, 133, 244, 1));

}

.main-menu nav ul li .nav-link {
    position: relative;
    top: 0px;

}

.main-menu nav ul li .nav-link .logo-menu-1 {
    position: absolute;
    top: 10px;
    background-color: rgba(255, 46, 46, 0);

}

.main-menu nav ul li .nav-link .title-menu-1 {
    position: absolute;
    top: 15px;
    left: 30px;
    width: 174px;
    ;
    background-color: rgba(255, 46, 46, 0);

}

.main-menu .menu-logout {
    position: fixed;
    margin-left: 20px;
    bottom: 3%;
}

.main-menu .menu-logout .menu-logout-box {
    background-color: rgb(255, 255, 255);
    width: 170px;
    padding-top: 5px;
    padding-bottom: 14px;
    border-radius: 12px;

}

.main-menu .logout-box {
    position: relative;
    top: 0px;
    background-color: rgba(143, 23, 255, 0);
    margin-left: 30px;
}

.main-menu .logout-box:hover {
    background: rgba(230, 240, 255, 1);
    color: var(--Blue, rgba(66, 133, 244, 1));

}

.main-menu .logout-box .logout-box-img {
    position: absolute;
    top: 0px;
    background-color: rgba(204, 149, 255, 0);
}

.main-menu .logout-box .logout-box-text {
    position: absolute;
    top: 5px;
    left: 30px;
    width: 120px;
    background-color: rgba(182, 139, 223, 0);
}


/* ///////////---main---//////////// */
.page-content-main-search {
    position: fixed;
    width: 1066px;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin-left: 214px;
    margin-top: 56px;
    background-color: #f6f6f6;
}

.page-content-main-search {
    overflow-y: scroll;
}

.page-content-main-search::-webkit-scrollbar {
    display: none;
}

/* ///// */
.page-content-main-search .page-main-2-1 {

    font-size: 28px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;

    margin-top: 40px;
    margin-left: 28px;
    margin-right: 28px;
    margin-bottom: 30px;


}

.page-content-main-search .page-main-2-2_xx {
    width: 1010px;
    margin-left: 28px;
    border-radius: 20px;
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
}

.page-content-main-search .page-main-2-2_xx .totrinh-table-1_xx {
    width: 1010px;
    background-color: #df484800;
}

.page-content-main-search .totrinh-table-1_xx .title-table-1_xx {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    margin-left: 28px;
    margin-bottom: 16px;
}

.page-content-main-search .totrinh-table-1_xx .div-table-1_xx {
    font-size: 16px;
    font-weight: 400;
}

.page-content-main-search .totrinh-table-1_xx .div-table-1_xx table tr th {
    padding-top: 6px;
    padding-bottom: 6px;
}

.page-content-main-search .totrinh-table-1_xx .div-table-1_xx table tr td {
    border-top: 1px solid #e7e7ed;
    padding-top: 10px;
    padding-bottom: 10px;
}

/* /////// */

.page-content-main-search .page-main-2-3_xx {
    width: 1010px;
    margin-left: 28px;
    border-radius: 20px;
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 28px;
    margin-bottom: 100px;
}

.page-content-main-search .page-main-2-3_xx .totrinh-table-x1 {
    width: 1010px;
    background-color: #df484800;
}

.page-content-main-search .detai-table-x1 .title-table-x1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    margin-left: 28px;
    margin-bottom: 20px;
}

.page-content-main-search .detai-table-x1 .div-table-x1 {
    font-size: 16px;
    line-height: 30px;
    text-align: left;
}

.page-content-main-search .detai-table-x1 .div-table-x1 table tr th {
    padding-top: 6px;
    padding-bottom: 6px;
}

.page-content-main-search .detai-table-x1 .div-table-x1 table tr td {
    border-top: 1px solid #e7e7ed;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
