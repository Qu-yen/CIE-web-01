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
                    <a >
                        <img style="width: 125px;height: 46.22px;" src="../LOGO.png" alt="">
                    </a>
                </NuxtLink>
            </div>
            <nav>
                <ul>
                    <li> <NuxtLink to="/TongQuan"  class="nuxt-link_">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../Apartment_Home_Icon_UIA (2).png"
                                            alt="">

                                    </span>
                                    <span class="title-menu-1">Tổng quan</span>
                                </span>
                            </div>
                        </span></NuxtLink>
                    </li>
                    <li   style="background: #e6f0ff; color: #4285f4;"
                    > <NuxtLink to="/QuanLyToTrinh"  class="nuxt-link_ nuxt-link_vvv">
                        <span>
                            <div>
                                <span class="nav-link">
                                    <span class="logo-menu-1">
                                        <img style="width: 24px;height: 24px;" src="../Sheet_Icon_UIA (2).png" alt="">
                                    </span>
                                    <span class="title-menu-1">Quản lý Tờ trình</span>
                                </span>
                            </div>
                        </span></NuxtLink>

                    </li>
                    <li> <NuxtLink to="/QuanLyDeTai"  class="nuxt-link_">
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
                    <li> <NuxtLink to="/QuanLyNhanSu"  class="nuxt-link_">
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
                    <li> <NuxtLink to="/PhanQuyen"  class="nuxt-link_">
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
                    <div class="menu-logout-box">
                        <NuxtLink to="/"  class="nuxt-link_">
                            <span class="logout-box" >
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
                <div class="box-chi-tiet-to-trinh">
                    <div class="nd-chi-tiet">

                        <div class="box-title-chi-tiet-to-trinh">
                            <div  class="label-001">
                                <span>Chi tiết Tờ trình</span>
                            </div>
                            <div class="btn-btn-nut-chinh-sua">
                                <button>
                                    <span style=" display: inline-block; transform: rotate(90deg);">&#9998;</span>
                                    
                                    Chỉnh sửa </button>
                            </div>
                        </div>
                        <!-- -------- -->
                        <div class="box-thong-tin-to-trinh">
                            <div class="box-nd-thong-tin-to-trinh">
                                <div class="label-1">
                                    <span>Thông tin tờ trình</span>
                                </div>
                                <div class="box-title-to-trinh">
                                    <div class="label-2">
                                        <span>Tên tờ trình:</span>
                                    </div>
                                    <div class="textarea-ten">
                                        <!-- <input type="text" name="" id="" placeholder="Nhập tên tờ trình"> -->
                                        <textarea name="" id=""  placeholder="Nhập tên tờ trình"></textarea>
                                    </div>
                                    <div class="input-1-2-3">
                                        <div class="tt-bx ">
                                            <div class="label__">
                                                <span>Số</span>
                                            </div>
                                            <div>
                                                <input 
                                                type="text" name="" id="" placeholder="Nhập số">
                                            </div>
                                        </div>
                                        <div  class="tt-bx ">
                                            <div  class="label__">
                                                <span>Ngày</span>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                            </div>
                                        </div>
                                        <div  class="tt-bx ">
                                            <div  class="label__">
                                                <span>Người ký</span>
                                            </div>
                                            <div>
                                                <input type="text" name="" id="" placeholder="Nhập người ký">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- -------- ---------- -------- -->
                        <div class="box-tai-lieu">
                            <div class="chi-tiet-tt-box-tai-lieu">
                                <div class="title-label-tai-lieu">
                                    <span>Tài liệu</span>
                                </div>
                                <div class="box-box-1-2-3-tai-lieu">
                                    <div class="file">
                                        <div class="label-">
                                            <span>File chưa ký</span>
                                        </div>
                                        <div class="bx">
                                            <span class="btn-upload">
                                                <button>
                                                    <img src="../ChiTietToTrinh/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Tải lên file</button>
                                            </span>
                                            <span  class="btn-view">
                                                <button>
                                                    <img src="../ChiTietToTrinh/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Xem file</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div  class="file">
                                        <div  class="label-">
                                            <span>Quyển báo cáo</span>
                                        </div>
                                        <div  class="bx">
                                            <span   class="btn-upload">
                                                <button>
                                                    <img src="../ChiTietToTrinh/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Tải lên file</button>
                                            </span>
                                            <span   class="btn-view">
                                                <button>
                                                    <img src="../ChiTietToTrinh/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Xem file</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div  class="file">
                                        <div  class="label-">
                                            <span>Trạng thái</span>
                                        </div>
                                        <div  class="bx">
                                            <select >
                                                <option value="">Chọn trạng thái</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                                <option value="">6</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-table-phien-ban__">
                                    <div class="box-table-phien-ban">
                                        <span class="label">Phiên bản của tờ trình</span>
                                    </div>
                                    <div class="div-table">
                                        <table  border="1">
                                            <tr  class="tr-tr">
                                                <th class="stt" style="width: 48px; height: 48px;">STT</th>
                                                <th  style="width: 180px;">Số tờ trình</th>
                                                <th  style="width: 280px;">Tên tờ trình</th>
                                                <th  style="width: 120px;">Ngày</th>
                                                <th  style="width: 150px;">Người ký</th>
                                                <th  style="width: 120px;">...</th>
                                                <th  style="width: 120px;">File</th>
                                            </tr>
                                            <tr class="tr-tr"
                                                style="color:rgba(18, 18, 18, 1);
                                                size:14px;"
                                                >
                                                <td  class="stt"  style="height: 48px;">1</td>
                                                <td>Nhập số tờ trình</td>
                                                <td>Nhập tên tờ trình</td>
                                                <td>Chọn ngày</td>
                                                <td>Nhập vào</td>
                                                <td>Nhập vào</td>
                                                <td>
                                                    <button
                                                    style="
                                                    color:rgba(66, 133, 244, 1); 
                                                    border:1px solid rgba(66, 133, 244, 1); 
                                                    border-radius: 16px; 
                                                    padding-left: 12px; 
                                                    padding-right: 12px; 
                                                    width: 150px;
                                                    background-color: rgba(255, 255, 255, 1);"
                                                    ><img src="../ChiTietToTrinh/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                        Tải lên file</button>

                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <div  class="btn-btn-them">
                                            <button>Thêm phiên bản mới + </button>    
                                        </div>
                                        
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

<script>
  
</script>
<style>


@import "../_ThemToTrinh/style.css";
@import "../ChiTietToTrinh/style-1.css";


</style>