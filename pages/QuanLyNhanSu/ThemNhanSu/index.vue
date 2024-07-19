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
                                <img style="width: 24px;height: 24px;" 
                                src="../profile-circle.png" alt="">
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
                        <img style="width: 125px;height: 46.22px;" src="../LOGO.png" alt="">
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
                                                src="../Apartment_Home_Icon_UIA (2).png" alt="">

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
                                            <img style="width: 24px;height: 24px;" src="../Sheet_Icon_UIA (2).png"
                                                alt="">
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
                                            <img style="width: 24px;height: 24px;" src="../archive-book (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Đề tài</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li style="background: #e6f0ff; color: #4285f4;">
                        <NuxtLink style="background: rgba(230, 240, 255, 1); color:rgba(66, 133, 244, 1);"
                            to="/QuanLyNhanSu" class="nuxt-link_ nuxt-link_vvv">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;" src="../Profile_Icon_UIA (2).png"
                                                alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Nhân sự</span>
                                    </span>
                                </div>
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/PhanQuyen" class="nuxt-link_">
                            <span>
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;" src="../Setting_Icon_UIA (2).png"
                                                alt="">
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
                        <NuxtLink style="color:rgba(98, 98, 98, 1);" to="/" class="nuxt-link_">
                            <span class="logout-box">
                                <span class="logout-box-img">
                                    <img style="width: 24px;height: 24px;" src="../logout.png" alt="">
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
                <div class="box-them-moi-nhan-su">
                    <div class="title-all">
                        <div class="tt-text">
                            <span>Thêm mới Nhân sự</span>
                        </div>
                        <div class="tt-btn-them">
                            <button>Thêm mới </button>
                        </div>
                    </div>
                    <div class="box-thong-tin-ca-nhan">
                        <div class="title-con-ttcn">
                            <span class="titlexx">Thông tin cá nhân</span>
                        </div>
                        <div class="box-box-input-ttcn-1">
                            <div>
                                <div class="labelxx">Họ và tên khai sinh</div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập tên">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">Ngày sinh</div>
                                <!-- <div>
                                    <input type="text" name="" id="" placeholder="Chọn ngày">
                                </div> -->
                                <div>
                                    <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">Giới tính</div>
                                <div>
                                    <!-- <input type="text" name="" id="" placeholder="Chọn giới tính"> -->
                                    <select>
                                        <option style="color:#999999">Chọn giới tính</option>
                                        <option value="" style="color:black">Nam</option>
                                        <option value="" style="color:black">Nữ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-2">
                            <div>
                                <div class="labelxx">
                                    <span>Nơi sinh: Xã/Phường</span>
                                </div>
                                <div>
                                    
                                    <select>
                                        <option style="color:#999999">Chọn Xã/Phường </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">
                                    <span>Huyện/Quận</span>
                                </div>
                                <div>
                                    <select>
                                        <option style="color:#999999">Chọn Huyện/Quận </option>
                                    </select>    
                                </div>
                            </div>
                            <div>
                                <div  class="labelxx">
                                    <span>Tỉnh/TP</span>
                                </div>
                                <div>
                                    <select>
                                        <option style="color:#999999">Chọn Tỉnh/TP </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-3">
                            <div>
                                <div class="labelxx">
                                    <span>Dân tộc</span>
                                </div>
                                <div>
                                    <select>
                                        <option style="color:#999999">Chọn dân tộc </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">
                                    <span>Tôn giáo</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập Tôn Giáo">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">
                                    <span>Nơi ở hiện nay</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập nơi ở hiện nay">
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-4">
                            <div>
                                <div class="labelxx">
                                    <span>Số CMND/CCCD</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập số">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">
                                    <span>Ngày cấp</span>
                                </div>
                                <div>
                                    <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx">
                                    <span>Số BHXH</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập số">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-thong-tin-tuyen-dung">
                        <div class="title-con-ttcn-x">
                            <span class="titlexxx">Thông tin tuyển dụng </span>
                        </div>
                        <div class="box-box-input-ttcn-1x">
                            <div>
                                <div class="labelxx--">
                                    <span>Ngày tuyển dụng</span>
                                </div>
                                <div>
                                    <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Chức vụ hiện tại</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập chức vụ">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Chức vụ kiêm nhiệm </span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập chức vụ">
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-2x">
                            <div>
                                <div class="labelxx--">
                                    <span>Công việc chính được giao</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập công việc">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Chức danh nghề nghiệp viên chức </span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập chức danh">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Mã số </span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập mã số">
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-3x">
                            <div>
                                <div class="labelxx--">
                                    <span>Bậc lương</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập bậc lương">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Hệ số</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập hệ số">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Ngày hưởng </span>
                                </div>
                                <div>
                                    <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                </div>
                            </div>
                        </div>
                        <div class="box-box-input-ttcn-4x">
                            <div>
                                <div class="labelxx--">
                                    <span>Phụ cấp chức danh</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập phụ cấp">
                                </div>
                            </div>
                            <div>
                                <div class="labelxx--">
                                    <span>Phụ cấp khác</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập phụ cấp">
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="box-trinh-do-hoc-van">
                        <div class="title-con-tdhv">
                            <span class="titlexxx">Trình độ học vấn</span>
                        </div>
                        <div class="box-box-input-ttcn-10 ">
                            <div>
                                <div class="labelxx-0">
                                    <span>Trình độ giáo dục phổ thông</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Chọn trình độ">
                                </div>
                            </div>
                            <div>
                                <div  class="labelxx-0">
                                    <span>Trình độ chuyên môn cao nhất</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Chọn ngày">
                                </div>
                            </div>
                            <div>
                                <div  class="labelxx-0">
                                    <span>Trình độ theo nghiệp vụ chuyên ngành</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Chọn trình độ">
                                </div>
                            </div>
                        </div>
                        <div  class="box-box-input-ttcn-20 ">
                            <div>
                                <div  class="labelxx-0">
                                    <span>Ngoại ngữ</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Chọn trình độ">
                                </div>
                            </div>
                            <div>
                                <div  class="labelxx-0">
                                    <span>Tin học</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Chọn trình độ">
                                </div>
                            </div>
                        </div>
                        <div  class="box-box-input-ttcn-30 ">
                            <div>
                                <div  class="labelxx-0">
                                    <span>Ngày vào Đảng Cộng sản Việt Nam</span>
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder="Nhập số">
                                </div>
                            </div>
                            <div>
                                <div  class="labelxx-0">
                                    <span>Ngày chính thức</span>
                                </div>
                                <div>
                                    <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="box-tai-lieu-ns">
                        <div class="box-tai-lieu-ns-xx">
                            <div class="title-con-xx">
                                <span class="titlexxx">Tài liệu <span style="color:red;">*</span> </span>
                            </div>
                            <div class="tai-len-tai-lieu" >
                                <div class="btn-bx-tt">
                                    <div  class="btn-bx-title">CMND/CCCD (1 file PDF)</div>
                                    <div class="class-btn-tai-lieu">
                                        <span class="file-up">
                                            <button>
                                                <img src="../ThemNhanSu/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span class="file-view">
                                            <button>
                                                <img src="../ThemNhanSu/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Xem file</button>
                                        </span>
                                    </div>
                                </div>
                                <div  class="btn-bx-tt">
                                    <div  class="btn-bx-title">Bằng cấp (1 file PDF)</div>
                                    <div  class="class-btn-tai-lieu">
                                        <span class="file-up">
                                            <button>
                                                <img src="../ThemNhanSu/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span class="file-view">
                                            <button>
                                                <img src="../ThemNhanSu/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Xem file</button>
                                        </span>
                                    </div>
                                </div >
                                <div  class="btn-bx-tt">
                                    <div  class="btn-bx-title">Hợp đồng nhân sự</div>
                                    <div  class="class-btn-tai-lieu">
                                        <span class="file-up">
                                            <button>
                                                <img src="../ThemNhanSu/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                Tải lên file</button>
                                        </span>
                                        <span class="file-view">
                                            <button>
                                                <img src="../ThemNhanSu/eye.png" 
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

<style>
@import "../style.css";
@import "../ThemNhanSu/style-ns.css";
</style>