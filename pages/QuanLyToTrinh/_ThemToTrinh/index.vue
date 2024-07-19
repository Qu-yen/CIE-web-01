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
                    
                        <li><NuxtLink to="/TongQuan"   class="nuxt-link_">
                            <span  class="nuxt-linksss">
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
                    
                    
                        <li    style="background: #e6f0ff; color: #4285f4;"
                        ><NuxtLink to="/QuanLyToTrinh"   class="nuxt-link_  nuxt-link_vvv">
                            <span  class="nuxt-linksss">
                                <div>
                                    <span class="nav-link">
                                        <span class="logo-menu-1">
                                            <img style="width: 24px;height: 24px;" src="../Sheet_Icon_UIA (2).png" alt="">
                                        </span>
                                        <span class="title-menu-1">Quản lý Tờ trình</span>
                                    </span>
                                </div>
                            </span> </NuxtLink>
                            
                        </li>
                   
                    
                        <li><NuxtLink to="/QuanLyDeTai"   class="nuxt-link_">
                            <span  class="nuxt-linksss">
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
                    
                    
                        <li><NuxtLink to="/QuanLyNhanSu"   class="nuxt-link_">
                            <span  class="nuxt-linksss">
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
                    
                    
                        <li><NuxtLink to="/PhanQuyen"   class="nuxt-link_">
                            <span class="nuxt-linksss">
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
                
                    <span  class="nuxt-linksss">
                        <div  class="menu-logout-box">
                            <NuxtLink 
                            style="background: rgba(230, 240, 255, 0); color:rgba(98, 98, 98, 1);"
                            to="/" >
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
                 <div class="them-moi-to-trinh-box-box">
                    <div>
                        
                        <div class="box-title-them-moi-to-trinh">
                            <div class="them-moi-title">
                                <span>Thêm mới Tờ trình</span>
                            </div>
                            <NuxtLink to="/QuanLyToTrinh/ChiTietToTrinh">
                                <div class="btn-xac-nhan-them">
                                    <button>Thêm mới</button>
                                </div>

                            </NuxtLink>
                            
                        </div>
                        <div class="box-thong-tin-to-trinh">
                            <div class="box-con">
                                <div class="title-box-con ">
                                    <span>Thông tin tờ trình</span>
                                </div>
                                <div class="box-con-1">
                                    <div class="box-con-1-1-title">
                                        <span>Tên tờ trình:</span>
                                    </div>
                                    <div class="box-con-1-1-input">
                                        <textarea name="" id=""   placeholder="Nhập tên tờ trình"></textarea>
                                        <!-- <input type="text" name="" id="" placeholder="Nhập tên tờ trình"> -->
                                    </div>
                                    <div class="box-con-1-2">
                                        <div class="bx bx1">
                                            <div class="label">
                                                <span>Số</span>
                                            </div>
                                            <div class="input">
                                                <input type="text" name="" id="" placeholder="Nhập số">
                                            </div>
                                        </div>
                                        <div class="bx bx2">
                                            <div>
                                                <span  class="label">Ngày</span>
                                            </div>
                                            <div  class="input">
                                                <!-- <input type="date" name="" id="" placeholder="Chọn ngày"> -->
                                                <input type="text" placeholder="Chọn ngày" onfocus="(this.type='date')">
                                            </div>
                                        </div>
                                        <div class="bx bx3">
                                            <div>
                                                <span  class="label">Người ký</span>
                                            </div>
                                            <div  class="input">
                                                <input type="text" name="" id="" placeholder="Nhập người ký">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-tai-lieu">
                            <div  class="noi-dung-tai">
                                <div class="title-name">
                                    <span>Tài liệu</span>
                                </div>
                                <div class="tai-lieu-tai-box">
                                    <div class=" bx-bx bx__01">
                                        <div class="label">
                                            <span>File chưa ký</span>
                                        </div>
                                        <div>
                                            <span class="btn-upload">
                                                <button>
                                                    <img src="../ChiTietToTrinh/export.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Tải lên file</button>
                                            </span>
                                            <span class="btn-view">
                                                <button>
                                                    <img src="../ChiTietToTrinh/eye.png" 
                                                    style="width:24px;height:24px;"
                                                    alt="">
                                                    Xem file</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div  class=" bx-bx bx__02">
                                        <div class="label">
                                            <span  class="btn-upload">Quyển báo cáo</span>
                                        </div>
                                        <div>
                                            <span  class="btn-upload">
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
                                    <div  class=" bx-bx bx__03">
                                        <div class="label">
                                            <span>Trạng thái</span>
                                        </div>
                                        <div>
                                            
                                            <select >
                                                <option value="">Chọn trạng thái</option>
                                                <option value="">Đã ký</option>
                                                <option value="">Chưa ký</option>
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
                                                <th  style="width: 120px;">???</th>
                                                <th  style="width: 120px;">File</th>
                                            </tr>
                                            <tr class="tr-tr">
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
@import "../_ThemToTrinh/style-1.css";
</style>