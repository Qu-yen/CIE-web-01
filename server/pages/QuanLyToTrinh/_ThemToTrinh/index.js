exports.ids = [13];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("32ca1926", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_406e69ec_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_406e69ec_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_406e69ec_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_406e69ec_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_406e69ec_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{background-color:#82a5e7}.page-content{background-color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:16px;margin:auto;position:relative;width:1280px}.h-header{background-color:#fff;color:#626262;gap:0;height:64px;margin-left:214px;opacity:0;position:fixed;top:0;width:1066px}.h-header-content{position:relative}.h-header .h-header-content .header-box{display:inline-block;left:55%;position:absolute;right:3%;top:0;top:12px;width:500px;width:700px}.h-header .header-box .header-box-search input{border:1px solid #d3d3d3;border-radius:30px;color:#000;font-size:16px;gap:0;height:40px;left:0;padding-left:50px;padding-right:16px;position:absolute;top:0;width:278px}.h-header .header-box .header-box-search input::-moz-placeholder{font-size:16px}.h-header .header-box .header-box-search input::placeholder{font-size:16px}.h-header input:focus{outline:none}.h-header .header-box .icon-search{left:13px;position:absolute;top:9px}.h-header .header-box .notification-box{left:370px;position:absolute;top:9px}.h-header .header-box .profile-box{left:350px;left:420px;position:absolute;top:9px}.main-menu{background-color:#fff;color:#626262;gap:0;height:100%;opacity:0;position:fixed;top:0;width:214px}.menu-main-logo{left:19px;margin-bottom:35px;position:relative;top:7px}.main-menu nav ul{list-style:none;padding-left:0}.main-menu nav ul li{background-color:#fff;height:48px;margin-bottom:12px;padding-left:25px;position:relative;text-align:left}.main-menu nav ul li .nav-link{position:relative;top:0}.main-menu nav ul li .nav-link .logo-menu-1{background-color:rgba(255,46,46,0);position:absolute;top:10px}.main-menu nav ul li .nav-link .title-menu-1{background-color:rgba(255,46,46,0);left:30px;position:absolute;top:15px;width:174px}.main-menu .menu-logout{bottom:3%;margin-left:20px;position:fixed}.main-menu .menu-logout .menu-logout-box{background-color:#fff;border-radius:12px;padding-bottom:14px;padding-top:5px;width:170px}.main-menu .logout-box{background-color:rgba(143,23,255,0);margin-left:30px;position:relative;top:0}.main-menu .logout-box .logout-box-img{background-color:rgba(204,149,255,0);position:absolute;top:0}.main-menu .logout-box .logout-box-text{background-color:rgba(182,139,223,0);left:30px;position:absolute;top:5px;width:120px}.page-content-main{background:#f6f6f6;height:100%;margin:56px 0 0 214px;overflow-y:scroll;padding:0;position:fixed;width:1066px}.page-content-main::-webkit-scrollbar{display:none}.page-content-main .page-main-2{background-color:hsla(0,0%,100%,0);margin:0}.page-content-main .page-main-2-1{margin-bottom:0;margin-left:28px;margin-top:40px}.page-content-main .page-main-2-1 .page-main-2-1-title>div{color:#000;font-family:Helvetica,Arial,sans-serif;font-size:28px;font-weight:600;gap:0;height:24px;line-height:24px;margin-bottom:0;margin-left:28px;margin-top:40px;opacity:0;text-align:left;width:400px}.page-content-main .page-main-2-1-nd-1 ul{list-style:none;margin-bottom:0;padding-left:0}.page-content-main .page-main-2-1-nd-1 ul li{background-color:#fff;border-radius:40px;color:#4285f4;color:var(--Blue,#4285f4);display:inline-flex;font-size:16px;font-weight:500;line-height:24px;margin-bottom:24px;margin-right:5%;padding:12px 39px;text-align:center}.page-main-2-2{background-color:hsla(0,100%,91%,0);position:relative;top:0}.totrinh-table-1{background-color:#fff;border-radius:20px;height:616px;margin-left:30px;width:1010px}.page-main-2-2 .title-table-1{font-size:20px;font-weight:600;left:58px;line-height:30px;position:absolute;text-align:left;top:28px}.div-table-1 .tr-table-1 th{font-size:16px;font-weight:600;height:48px;line-height:24px;padding-left:10px;text-align:left}.div-table-1 table{border-collapse:collapse;padding-left:10px;position:absolute;top:60px}.div-table-1 .tr-table-2 td{border-top:1px solid #ddd;font-size:16px;font-weight:400;height:143px;line-height:24px;padding-left:10px;text-align:left}.page-main-2-3{background-color:hsla(0,100%,91%,0);height:740px;margin-top:30px;position:relative;top:0}.detai-table-2{background-color:#fff;border-radius:20px;height:616px;margin-left:30px;width:1010px}.page-main-2-3 .title-table-2{font-size:20px;font-weight:600;left:58px;line-height:30px;position:absolute;text-align:left;top:28px}.div-table-2 .tr-table-1 th{font-size:16px;font-weight:600;height:48px;line-height:24px;text-align:left}.div-table-2 table{border-collapse:collapse;position:absolute;top:60px}.div-table-2 .tr-table-2 td{border-top:1px solid #ddd;font-size:16px;font-weight:400;height:156px;line-height:24px;padding-left:10px;text-align:left}.box-box-quan-ly-nhan-su{left:0;position:relative;top:0}.box-box-quan-ly-nhan-su\r\n.box-title-quan-ly-nhan-su{background-color:hsla(0,35%,61%,0);font-family:Arial,Helvetica,sans-serif;height:120px;left:28px;margin-bottom:60px;position:relative;top:40px;width:1010px}.box-box-quan-ly-nhan-su\r\n.box-title-quan-ly-nhan-su\r\n.title-box{color:#000;font-size:28px;font-weight:600;line-height:24px;text-align:left}.box-box-quan-ly-nhan-su\r\n.box-title-quan-ly-nhan-su\r\n.search-box ul{list-style:none;margin:0;padding:0}.box-box-quan-ly-nhan-su\r\n.search-box ul li{display:inline;margin-right:10px}.box-box-quan-ly-nhan-su ul li input{background:#fff;border:1px solid #999;border-radius:36px;font-size:16px;font-weight:500;gap:10px;height:44px;line-height:20px;padding:0 16px 0 50px;text-align:left;width:230px}.box-box-quan-ly-nhan-su ul li input::-moz-placeholder{color:#999}.box-box-quan-ly-nhan-su ul li input::placeholder{color:#999}.search-box .icon-search-2{left:15px;position:absolute;top:12px}.box-box-quan-ly-nhan-su\r\n.search-1-2-3{position:relative;top:30px}.search-box select{border:1px solid #999;border-radius:36px;color:#999;gap:10px;height:44px;opacity:0;padding:8px 16px;width:130px}.search-box select,.search-box select>option{background:#fff;font-size:16px;font-weight:500;line-height:20px;text-align:left}.search-box .btn-btn-div-them-moi{position:absolute;right:0;top:0}.search-box .btn-btn-div-them-moi\r\nbutton{background:#4285f4;background:var(--Blue,#4285f4);border:1px solid #4285f4;border:1px solid var(--Blue,#4285f4);border-radius:36px;color:#fff;font-size:16px;font-weight:600;gap:10px;height:44px;left:1101px;line-height:20px;opacity:0;padding:8px 20px;text-align:center;top:160px;width:151px}.box-box-quan-ly-nhan-su\r\n.box-table-nhan-su{background-color:#fff;border-radius:20px;gap:0;left:28px;margin-bottom:100px;padding-bottom:20px;padding-top:10px;position:relative;top:0;width:1010px}.box-table-nhan-su table{border:1px solid rgba(255,192,203,0);border-bottom:2px solid #d3d3d3;border-collapse:collapse;font-size:16px;font-weight:600;line-height:24px;text-align:left}.box-table-nhan-su table tr th{padding-left:6px}.box-table-nhan-su table tr th\r\n.btn-btn-sx-1{display:flex;flex-direction:column;margin-left:80px;position:absolute;top:20px}.box-table-nhan-su table tr th\r\n.btn-btn-sx-1 img{border:1px solid hsla(0,0%,94%,0);padding:3px}.box-table-nhan-su table tr th\r\n.btn-btn-sx-1 img:active{background-color:transparent;border:1px solid #f0f0f0}.box-table-nhan-su table tr th\r\n.btn-btn-sx-2{display:flex;flex-direction:column;margin-left:110px;position:absolute;top:20px}.box-table-nhan-su table tr th\r\n.btn-btn-sx-2 img{border:1px solid hsla(0,0%,94%,0);padding:3px}.box-table-nhan-su table tr th\r\n.btn-btn-sx-2 img:active{background-color:transparent;border:1px solid #f0f0f0}.box-table-nhan-su table tr td{font-size:16px;font-weight:400;height:64px;line-height:24px;padding-left:6px;text-align:left}.box-table-nhan-su table .tr-tr{cursor:default}.box-table-nhan-su table .tr-tr:active{background:#e6f0ff;cursor:progress}.box-table-nhan-su table tr td.stt{text-align:center}.box-table-nhan-su table tr td.btn-btn-button{padding:0;text-align:left}.box-table-nhan-su table tr td.btn-btn-button button{background-color:hsla(0,0%,100%,0);border:1px solid hsla(0,0%,100%,0);border-radius:10px;height:20px;width:20px}.box-table-nhan-su table tr td.btn-btn-button button:hover{background-color:#f0f0f0;border:1px solid #f0f0f0}.box-box-quan-ly-to-trinh{background-color:rgba(100,185,121,0);margin-bottom:120px;margin-left:28px;padding:0;position:relative;top:40px;width:1010px}.box-box-quan-ly-to-trinh .box-to-trinh-title{font-size:28px;font-weight:600;line-height:24px;padding:0;text-align:left}.box-box-quan-ly-to-trinh .box-to-trinh-title .so-luong{font-size:16px;font-weight:400;line-height:24px;padding:0;text-align:left}.box-box-quan-ly-to-trinh\r\n.search-box-12345{background-color:rgba(216,195,255,0);height:44px;margin-top:30px;position:relative;top:0}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul{list-style:none;margin:0;padding:0}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li{display:inline;margin-right:10px}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\n.icon-search-2{left:14px;position:absolute;top:10px}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\ninput{background:#fff;border:1px solid #999;border-radius:36px;font-size:16px;font-weight:500;gap:10px;height:44px;line-height:20px;padding:0 16px 0 50px;text-align:left;width:230px}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\ninput::-moz-placeholder{color:#999}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\ninput::placeholder{color:#999}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\nselect{background:#fff;border:1px solid #999;border-radius:36px;color:#999;font-size:16px;font-weight:500;gap:10px;height:44px;line-height:20px;opacity:0;padding:8px 16px;text-align:left;width:135px}.box-box-quan-ly-to-trinh\r\n.search-box-12345 ul li\r\nselect option{color:#000;font-size:16px;font-weight:500;line-height:20px;text-align:left}.box-box-quan-ly-to-trinh\r\n.search-box-12345 .btn-btn-them-moi{position:absolute;right:0;top:0}.box-box-quan-ly-to-trinh\r\n.search-box-12345 .btn-btn-them-moi button{background:#4285f4;background:var(--Blue,#4285f4);border:2px solid #4285f4;border:2px solid var(--Blue,#4285f4);border-radius:36px;color:#fff;font-size:16px;font-weight:600;gap:10px;height:44px;line-height:20px;padding:8px 20px;text-align:center;width:151px}.box-box-quan-ly-to-trinh\r\n.quan-ly-to-trinh-table{background-color:#fff;border-radius:20px;gap:0;left:0;margin-bottom:100px;margin-top:20px;padding-bottom:20px;padding-top:10px;position:relative;top:0;width:1010px}.quan-ly-to-trinh-table table{border:1px solid rgba(255,0,0,0);border-bottom:2px solid #d3d3d3;border-collapse:collapse;font-size:16px;font-weight:600;line-height:24px;text-align:left}.quan-ly-to-trinh-table table tr td,.quan-ly-to-trinh-table table tr th{padding-right:6px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-1{display:flex;flex-direction:column;margin-left:90px;position:absolute;top:20px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-2{display:flex;flex-direction:column;margin-left:94px;position:absolute;top:20px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-3{display:flex;flex-direction:column;margin-left:48px;position:absolute;top:20px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-4{display:flex;flex-direction:column;margin-left:86px;position:absolute;top:20px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-1 img,.quan-ly-to-trinh-table table tr th .btn-btn-sx-2 img,.quan-ly-to-trinh-table table tr th .btn-btn-sx-3 img,.quan-ly-to-trinh-table table tr th .btn-btn-sx-4 img{border:1px solid rgba(255,192,203,0);padding:3px}.quan-ly-to-trinh-table table tr th .btn-btn-sx-1 img:hover,.quan-ly-to-trinh-table table tr th .btn-btn-sx-2 img:hover,.quan-ly-to-trinh-table table tr th .btn-btn-sx-3 img:hover,.quan-ly-to-trinh-table table tr th .btn-btn-sx-4 img:hover{background-color:transparent;border:1px solid #d1d1d1}.quan-ly-to-trinh-table table tr td{font-size:16px;font-weight:400;line-height:24px;padding-bottom:10px;padding-left:10px;padding-top:10px;text-align:left}.quan-ly-to-trinh-table table .tr-tr{cursor:default}.quan-ly-to-trinh-table table .tr-tr:active{background:#e6f0ff;cursor:progress}.quan-ly-to-trinh-table table tr td.stt{padding:0;text-align:center}.quan-ly-to-trinh-table table tr td.btn-btn-button{padding:0;text-align:left}.quan-ly-to-trinh-table table tr td.btn-btn-button button{background-color:hsla(0,0%,100%,0);border:1px solid hsla(0,0%,100%,0);border-radius:10px;height:20px;width:20px}.quan-ly-to-trinh-table table tr td.btn-btn-button button:hover{background-color:#f0f0f0;border:1px solid #f0f0f0}.box-box-quan-ly-de-tai{background-color:rgba(100,185,121,0);margin-bottom:120px;margin-left:28px;padding:0;position:relative;top:40px;width:1010px}.box-box-quan-ly-de-tai .box-de-tai-title{font-size:28px;font-weight:600;line-height:24px;padding:0;text-align:left}.box-box-quan-ly-de-tai .box-de-tai-title .so-luong-de-tai{font-size:16px;font-weight:400;line-height:24px;padding:0;text-align:left}.box-box-quan-ly-de-tai\r\n.search-box-12345{background-color:rgba(216,195,255,0);height:44px;margin-top:30px;position:relative;top:0}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul{list-style:none;margin:0;padding:0}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li{display:inline;margin-right:10px}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\n.icon-search-2{left:14px;position:absolute;top:10px}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\ninput{padding:0 16px 0 50px;width:230px}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\ninput,.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\nselect{background:#fff;border:1px solid #999;border-radius:36px;color:#999;font-size:16px;font-weight:500;gap:10px;height:44px;line-height:20px;text-align:left}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\nselect{opacity:0;padding:8px 16px;width:135px}.box-box-quan-ly-de-tai\r\n.search-box-12345 ul li\r\nselect option{color:#000;font-size:16px;font-weight:500;line-height:20px;text-align:left}.box-box-quan-ly-de-tai\r\n.search-box-12345 .btn-btn-div-them-moi{position:absolute;right:0;top:0}.box-box-quan-ly-de-tai\r\n.search-box-12345 .btn-btn-div-them-moi button{background:#4285f4;background:var(--Blue,#4285f4);border:2px solid #4285f4;border:2px solid var(--Blue,#4285f4);border-radius:36px;color:#fff;font-size:16px;font-weight:600;gap:10px;height:44px;line-height:20px;padding:8px 20px;text-align:center;width:151px}.box-box-quan-ly-de-tai\r\n.box-table-de-tai{background-color:#fff;border-radius:20px;gap:0;left:0;margin-bottom:100px;margin-top:20px;padding-bottom:20px;padding-top:10px;position:relative;top:0;width:1010px}.box-table-de-tai table{border:1px solid rgba(255,0,0,0);border-bottom:2px solid #d3d3d3;border-collapse:collapse;font-size:16px;font-weight:600;line-height:24px;text-align:left}.box-table-de-tai table tr th{padding:0 6px 0 0}.box-table-de-tai table tr td{padding:0 10px 0 0}.box-table-de-tai table tr th .btn-btn-sx-1{display:flex;flex-direction:column;margin-left:156px;position:absolute;top:20px}.box-table-de-tai table tr th .btn-btn-sx-2{display:flex;flex-direction:column;margin-left:51px;position:absolute;top:20px}.box-table-de-tai table tr th .btn-btn-sx-3{display:flex;flex-direction:column;margin-left:96px;position:absolute;top:20px}.box-table-de-tai table tr th .btn-btn-sx-4{display:flex;flex-direction:column;margin-left:118px;position:absolute;top:20px}.box-table-de-tai table tr th .btn-btn-sx-1 img,.box-table-de-tai table tr th .btn-btn-sx-2 img,.box-table-de-tai table tr th .btn-btn-sx-3 img,.box-table-de-tai table tr th .btn-btn-sx-4 img{border:1px solid rgba(255,192,203,0);padding:3px}.box-table-de-tai table tr th .btn-btn-sx-1 img:hover,.box-table-de-tai table tr th .btn-btn-sx-2 img:hover,.box-table-de-tai table tr th .btn-btn-sx-3 img:hover,.box-table-de-tai table tr th .btn-btn-sx-4 img:hover{background-color:transparent;border:1px solid #d1d1d1}.box-table-de-tai table tr td{font-size:16px;font-weight:400;line-height:24px;padding-bottom:10px;padding-left:0;padding-top:10px;text-align:left}.box-table-de-tai table .tr-tr{cursor:default}.box-table-de-tai table .tr-tr:active{background:#e6f0ff;cursor:progress}.box-table-de-tai table tr td.stt{padding:0;text-align:center}.box-table-de-tai table tr td.btn-btn-button{padding:0;text-align:left}.box-table-de-tai table tr td.btn-btn-button button{background-color:hsla(0,0%,100%,0);border:1px solid hsla(0,0%,100%,0);border-radius:10px;height:20px;width:20px}.box-table-de-tai table tr td.btn-btn-button button:hover{background-color:#f0f0f0;border:1px solid #f0f0f0}input:focus{outline:none}.nuxt-link_{background:rgba(66,134,244,0);color:#626262}.nuxt-link_:hover{background:#e6f0ff}.li_vvv,.nuxt-link_vvv{background:#e6f0ff;color:#4285f4}.them-moi-to-trinh-box-box{font-family:Arial,Helvetica,sans-serif;font-size:16px;left:28px;margin:0;padding:0;position:relative;top:40px;width:1010px}.them-moi-to-trinh-box-box\r\n.them-moi-title{font-size:28px;font-weight:600;gap:0;height:24px;line-height:24px;opacity:0;text-align:left}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh{background-color:#fff;border:0;border-radius:20px;height:314px;margin-bottom:58px;position:relative;top:30px;width:1010px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con{background-color:rgba(192,47,47,0);border:0;margin-left:28px;margin-right:28px;margin-top:0;position:absolute;top:30px;width:957px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.title-box-con{font-size:20px;font-weight:600;line-height:24px;margin-bottom:20px;padding:0;text-align:left}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh .box-con-1\r\n.box-con-1-1-title{font-size:16px;font-weight:600;line-height:24px;text-align:left}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-1-input textarea{border:1px solid #d3d3d3;border-radius:16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;height:48px;margin-top:10px;padding:12px 16px;width:923px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-1-input textarea::-moz-placeholder{font-family:Arial,Helvetica,sans-serif;font-size:16px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-1-input textarea::placeholder{font-family:Arial,Helvetica,sans-serif;font-size:16px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2{display:block;display:inline-flex;margin-top:20px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2 .bx{margin-right:11px;width:311px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2 .bx .label{font-size:16px;font-weight:600;line-height:24px;text-align:left}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2 .bx input{border:1px solid #d3d3d3;border-radius:16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;height:46px;margin-top:10px;padding:0 16px;width:279px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2 .bx input::-moz-placeholder{font-size:16px}.them-moi-to-trinh-box-box\r\n.box-thong-tin-to-trinh\r\n.box-con-1-2 .bx input::placeholder{font-size:16px}.box-tai-lieu{background-color:#fff;border:0;border-radius:20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;height:451px;left:0;margin:0 0 140px;padding:0;position:relative;top:0;width:1010px}.box-tai-lieu\r\n.noi-dung-tai{background-color:rgba(238,255,81,0);margin-left:28px;position:absolute;top:30px;width:961px}.box-tai-lieu\r\n.title-name{font-size:20px;font-weight:600;line-height:24px;margin-bottom:30px;text-align:left}.box-tai-lieu\r\n.tai-lieu-tai-box{display:block;display:inline-flex;margin-bottom:30px}.box-tai-lieu\r\n.tai-lieu-tai-box .bx-bx{width:320px}.box-tai-lieu\r\n.tai-lieu-tai-box .bx-bx\r\nbutton{font-weight:500;height:48px;line-height:24px;margin-right:6px;text-align:center;width:146px}.box-tai-lieu\r\n.tai-lieu-tai-box .bx-bx\r\nbutton,.box-tai-lieu\r\n.tai-lieu-tai-box .bx__03 select{border:1px solid #d3d3d3;border-radius:16px;font-family:Arial,Helvetica,sans-serif;font-size:16px}.box-tai-lieu\r\n.tai-lieu-tai-box .bx__03 select{color:#999;gap:10px;height:46px;padding:0 16px;width:311px}.box-tai-lieu\r\n.label{font-size:16px;font-weight:600;line-height:24px;margin-bottom:10px}.box-tai-lieu .btn-upload button{background:#d7e6ff;border:1px solid #d7e6ff;color:#4285f4;color:var(--Blue,#4285f4)}.box-tai-lieu .btn-upload button,.box-tai-lieu .btn-view button{font-size:16px;font-weight:500;line-height:24px;text-align:center}.box-tai-lieu .btn-view button{background:#fff;border:1px solid #4285f4;color:#4285f4}.box-table-phien-ban__{position:relative;top:0}.box-table-phien-ban__ table{border:rgba(255,192,203,0);border-collapse:collapse}.box-table-phien-ban__ .div-table{background-color:#fff;border:1px solid #d3d3d3;border-radius:16px;margin-top:10px;text-align:left}.box-table-phien-ban__ table .tr-tr{border-bottom:1px solid #d3d3d3}.box-table-phien-ban__ table td,.box-table-phien-ban__ table th{padding-right:20px}.box-table-phien-ban__ table tr .stt{text-align:center}.box-table-phien-ban__ .btn-btn-them{margin:30px;text-align:center}.box-table-phien-ban__ .btn-btn-them button{background-color:#fff;border:1px solid #4285f4;border-radius:16px;color:#4285f4;color:var(--Blue,#4285f4);font-size:14px;font-weight:600;gap:0;height:40px;line-height:21px;opacity:0;width:443px}.box-table-phien-ban__ .btn-btn-them button:active{background-color:#4285f4;background-color:var(--Blue,#4285f4);color:#fff}.box-title-them-moi-to-trinh\r\n.btn-xac-nhan-them{position:absolute;right:0;top:0}.box-title-them-moi-to-trinh\r\n.btn-xac-nhan-them button{background:#4285f4;background:var(--Blue,#4285f4);border:0;border-radius:16px;color:#fff;font-size:16px;font-weight:500;gap:10px;height:48px;line-height:24px;opacity:0;padding:0;text-align:center;width:138px}.box-title-them-moi-to-trinh\r\n.btn-xac-nhan-them button:active{background:#fff;border:1px solid #4285f4;color:#4285f4}input:focus,select:focus,textarea:focus{outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/QuanLyToTrinh/_ThemToTrinh/index.vue?vue&type=template&id=406e69ec
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "page-content"
  }, [_vm._ssrNode("<div class=\"h-header\">", "</div>", [_vm._ssrNode("<div class=\"h-header-content\">", "</div>", [_vm._ssrNode("<div class=\"header-box\">", "</div>", [_vm._ssrNode("<div class=\"header-box-search\"><input type=\"text\" name id placeholder=\"Tìm kiếm theo từ khóa\"></div> <img" + _vm._ssrAttr("src", __webpack_require__(72)) + " alt class=\"icon-search\" style=\"width: 24px;height: 24px;\"> <div><div class=\"notification-box\"><img" + _vm._ssrAttr("src", __webpack_require__(73)) + " alt style=\"width: 24px;height: 24px;\"></div></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"profile-box\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/Profile"
    }
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(74),
      "alt": ""
    }
  })])], 1)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main-menu\">", "</div>", [_vm._ssrNode("<div class=\"menu-main-logo\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/TongQuan"
    }
  }, [_c('a', [_c('img', {
    staticStyle: {
      "width": "125px",
      "height": "46.22px"
    },
    attrs: {
      "src": __webpack_require__(75),
      "alt": ""
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    staticClass: "nuxt-link_",
    attrs: {
      "to": "/TongQuan"
    }
  }, [_c('span', {
    staticClass: "nuxt-linksss"
  }, [_c('div', [_c('span', {
    staticClass: "nav-link"
  }, [_c('span', {
    staticClass: "logo-menu-1"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(76),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title-menu-1"
  }, [_vm._v("Tổng quan")])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li style=\"background: #e6f0ff; color: #4285f4;\">", "</li>", [_c('NuxtLink', {
    staticClass: "nuxt-link_ nuxt-link_vvv",
    attrs: {
      "to": "/QuanLyToTrinh"
    }
  }, [_c('span', {
    staticClass: "nuxt-linksss"
  }, [_c('div', [_c('span', {
    staticClass: "nav-link"
  }, [_c('span', {
    staticClass: "logo-menu-1"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(77),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title-menu-1"
  }, [_vm._v("Quản lý Tờ trình")])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    staticClass: "nuxt-link_",
    attrs: {
      "to": "/QuanLyDeTai"
    }
  }, [_c('span', {
    staticClass: "nuxt-linksss"
  }, [_c('div', [_c('span', {
    staticClass: "nav-link"
  }, [_c('span', {
    staticClass: "logo-menu-1"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(78),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title-menu-1"
  }, [_vm._v("Quản lý Đề tài")])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    staticClass: "nuxt-link_",
    attrs: {
      "to": "/QuanLyNhanSu"
    }
  }, [_c('span', {
    staticClass: "nuxt-linksss"
  }, [_c('div', [_c('span', {
    staticClass: "nav-link"
  }, [_c('span', {
    staticClass: "logo-menu-1"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(79),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title-menu-1"
  }, [_vm._v("Quản lý Nhân sự")])])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('NuxtLink', {
    staticClass: "nuxt-link_",
    attrs: {
      "to": "/PhanQuyen"
    }
  }, [_c('span', {
    staticClass: "nuxt-linksss"
  }, [_c('div', [_c('span', {
    staticClass: "nav-link"
  }, [_c('span', {
    staticClass: "logo-menu-1"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(80),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title-menu-1"
  }, [_vm._v("Cài đặt phân quyền")])])])])])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu-logout\">", "</div>", [_vm._ssrNode("<span class=\"nuxt-linksss\">", "</span>", [_vm._ssrNode("<div class=\"menu-logout-box\">", "</div>", [_c('NuxtLink', {
    staticStyle: {
      "background": "rgba(230, 240, 255, 0)",
      "color": "rgba(98, 98, 98, 1)"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "logout-box"
  }, [_c('span', {
    staticClass: "logout-box-img"
  }, [_c('img', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "src": __webpack_require__(81),
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "logout-box-text"
  }, [_vm._v("Đăng xuất")])])])], 1)])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"page-content-main\">", "</div>", [_vm._ssrNode("<main class=\"page-main-1\">", "</main>", [_vm._ssrNode("<div class=\"them-moi-to-trinh-box-box\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"box-title-them-moi-to-trinh\">", "</div>", [_vm._ssrNode("<div class=\"them-moi-title\"><span>Thêm mới Tờ trình</span></div> "), _c('NuxtLink', {
    attrs: {
      "to": "/QuanLyToTrinh/ChiTietToTrinh"
    }
  }, [_c('div', {
    staticClass: "btn-xac-nhan-them"
  }, [_c('button', [_vm._v("Thêm mới")])])])], 2), _vm._ssrNode(" <div class=\"box-thong-tin-to-trinh\"><div class=\"box-con\"><div class=\"title-box-con\"><span>Thông tin tờ trình</span></div> <div class=\"box-con-1\"><div class=\"box-con-1-1-title\"><span>Tên tờ trình:</span></div> <div class=\"box-con-1-1-input\"><textarea name id placeholder=\"Nhập tên tờ trình\"></textarea></div> <div class=\"box-con-1-2\"><div class=\"bx bx1\"><div class=\"label\"><span>Số</span></div> <div class=\"input\"><input type=\"text\" name id placeholder=\"Nhập số\"></div></div> <div class=\"bx bx2\"><div><span class=\"label\">Ngày</span></div> <div class=\"input\"><input type=\"text\" placeholder=\"Chọn ngày\" onfocus=\"(this.type='date')\"></div></div> <div class=\"bx bx3\"><div><span class=\"label\">Người ký</span></div> <div class=\"input\"><input type=\"text\" name id placeholder=\"Nhập người ký\"></div></div></div></div></div></div> <div class=\"box-tai-lieu\"><div class=\"noi-dung-tai\"><div class=\"title-name\"><span>Tài liệu</span></div> <div class=\"tai-lieu-tai-box\"><div class=\"bx-bx bx__01\"><div class=\"label\"><span>File chưa ký</span></div> <div><span class=\"btn-upload\"><button><img" + _vm._ssrAttr("src", __webpack_require__(46)) + " alt style=\"width:24px;height:24px;\">\r\n                                                    Tải lên file</button></span> <span class=\"btn-view\"><button><img" + _vm._ssrAttr("src", __webpack_require__(67)) + " alt style=\"width:24px;height:24px;\">\r\n                                                    Xem file</button></span></div></div> <div class=\"bx-bx bx__02\"><div class=\"label\"><span class=\"btn-upload\">Quyển báo cáo</span></div> <div><span class=\"btn-upload\"><button><img" + _vm._ssrAttr("src", __webpack_require__(46)) + " alt style=\"width:24px;height:24px;\">\r\n                                                    Tải lên file</button></span> <span class=\"btn-view\"><button><img" + _vm._ssrAttr("src", __webpack_require__(67)) + " alt style=\"width:24px;height:24px;\">\r\n                                                    Xem file</button></span></div></div> <div class=\"bx-bx bx__03\"><div class=\"label\"><span>Trạng thái</span></div> <div><select><option value>Chọn trạng thái</option> <option value>Đã ký</option> <option value>Chưa ký</option></select></div></div></div> <div class=\"box-table-phien-ban__\"><div class=\"box-table-phien-ban\"><span class=\"label\">Phiên bản của tờ trình</span></div> <div class=\"div-table\"><table border=\"1\"><tr class=\"tr-tr\"><th class=\"stt\" style=\"width: 48px; height: 48px;\">STT</th> <th style=\"width: 180px;\">Số tờ trình</th> <th style=\"width: 280px;\">Tên tờ trình</th> <th style=\"width: 120px;\">Ngày</th> <th style=\"width: 150px;\">Người ký</th> <th style=\"width: 120px;\">???</th> <th style=\"width: 120px;\">File</th></tr> <tr class=\"tr-tr\"><td class=\"stt\" style=\"height: 48px;\">1</td> <td>Nhập số tờ trình</td> <td>Nhập tên tờ trình</td> <td>Chọn ngày</td> <td>Nhập vào</td> <td>Nhập vào</td> <td><button style=\"\\r\\n                                                    color:rgba(66, 133, 244, 1); \\r\\n                                                    border:1px solid rgba(66, 133, 244, 1); \\r\\n                                                    border-radius: 16px; \\r\\n                                                    padding-left: 12px; \\r\\n                                                    padding-right: 12px; \\r\\n                                                    width: 150px;\\r\\n                                                    background-color: rgba(255, 255, 255, 1);\"><img" + _vm._ssrAttr("src", __webpack_require__(46)) + " alt style=\"width:24px;height:24px;\">\r\n                                                        Tải lên file</button></td></tr></table> <div class=\"btn-btn-them\"><button>Thêm phiên bản mới + </button></div></div></div></div></div>")], 2)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/QuanLyToTrinh/_ThemToTrinh/index.vue?vue&type=template&id=406e69ec


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_406e69ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_406e69ec__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _index_vue_vue_type_template_id_406e69ec__WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "6080e896"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/export.b1e9f84.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eye.3d1de26.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/search-normal.4e8d44b.png";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/notification.54f1cbc.png";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile-circle.932790f.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LOGO.f41ba30.png";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Apartment_Home_Icon_UIA (2).a7ee2c2.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Sheet_Icon_UIA (2).02af293.png";

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/archive-book (2).19aa59c.png";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Profile_Icon_UIA (2).481e044.png";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Setting_Icon_UIA (2).913d0f6.png";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logout.419cf63.png";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=index.js.map