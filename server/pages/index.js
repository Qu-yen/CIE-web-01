exports.ids = [18,17];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5e28984a", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/LOGO.f41ba30.png";

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/login-business 123 1.272206a.png";

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ec6d8ff_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ec6d8ff_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ec6d8ff_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ec6d8ff_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6ec6d8ff_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "template{background-color:#000}.login-page{background-color:#fff;color:#000;font-family:Arial,Helvetica,sans-serif;gap:0;height:820px;margin:2% auto auto;opacity:0;position:relative;width:1280px}.login-page .login-content{gap:0;height:496px;left:5%;margin:auto auto 0;opacity:0;position:absolute;top:143px;width:521px}.login-page .img-logo img{height:87px;width:235.3px}.login-page .img-logo{margin-bottom:50px}.login-page .login-img-background{gap:0;height:353px;left:0;margin-left:555px;margin-top:126px;opacity:0;position:absolute;top:0;width:610px}.login-page .page-name{font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:600;height:24px;left:100px;margin-left:2px;text-align:center;top:299px;width:128px}.login-page .login-Email,.login-page .page-name{gap:0;letter-spacing:.01em;margin-bottom:23px;opacity:0}.login-page .login-Email{font-size:16px;font-weight:400;height:16px;height:72px;line-height:16px;text-align:left;width:41px;width:513px}.login-page .login-Email input{background:#f7fbff;border:1px solid #d4d7e3;border-radius:12px;gap:0;height:48px;margin-top:6px;opacity:0;padding-left:10px;width:503px}.login-page .login-pass{font-size:16px;font-weight:400;gap:0;height:16px;height:72px;letter-spacing:.01em;line-height:16px;margin-bottom:23px;opacity:0;text-align:left;width:41px;width:513px}.login-page .login-pass input{background:#f7fbff;border:1px solid #d4d7e3;border-radius:12px;gap:0;height:48px;margin-top:6px;opacity:0;padding-left:10px;width:503px}.login-page .login-remember{font-size:16px;height:16px;line-height:16px;margin-bottom:23px;width:117px}.login-page .login-remember,.login-page .login-submit input{font-weight:400;gap:0;letter-spacing:.01em;opacity:0;text-align:center}.login-page .login-submit input{background:#4285f4;background:var(--Blue,#4285f4);border:#fff;border-radius:12px;color:#fff;font-size:20px;height:52px;line-height:20px;padding:16px 0;width:513px}.login-page input:focus{outline:1px solid #d4d7e3}.login-page .login-Email input,.login-page .login-pass input{font-family:Helvetica,sans-serif;font-size:18px;font-weight:200}.login-page .login-remember a{color:#4285f4;color:var(--Blue,#4285f4);font-size:16px;margin-left:0;position:absolute;right:4px;text-align:center;-webkit-text-decoration:none;text-decoration:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6ec6d8ff
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "login-page"
  }, [_vm._ssrNode("<div class=\"login-content\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"img-logo\"><img" + _vm._ssrAttr("src", __webpack_require__(133)) + " alt=\"logo\" style=\" width: 235.3px;height: 87px\"></div> <div class=\"page-name\">Đăng nhập</div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"login-Email lg1\"><label for>Email</label> <input id=\"email\" type=\"email\" name placeholder=\"abc@gmail.com\"" + _vm._ssrAttr("value", _vm.login_email) + "></div> <div class=\"login-pass lg1\"><label for>Mật khẩu</label> <input id=\"password\" type=\"password\" name placeholder=\"...........\"" + _vm._ssrAttr("value", _vm.login_password) + "></div> "), _vm._ssrNode("<div class=\"login-remember lg1\">", "</div>", [_c('nuxt-link', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "to": "/ForgotPass"
    }
  }, [_c('a', [_vm._v("Quên mật khẩu")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"login-submit lg1\">", "</div>", [_c('NuxtLink', {
    attrs: {
      "to": "/TongQuan"
    }
  }, [_c('input', {
    attrs: {
      "id": "login-button",
      "type": "submit",
      "value": "Đăng nhập"
    }
  })])], 1)], 2)])], 2), _vm._ssrNode(" <div><div class=\"login-img-background\"><img" + _vm._ssrAttr("src", __webpack_require__(134)) + " alt=\"business 123 1.png\" style=\"width: 610px;height: 353px;\"></div></div>")], 2), _vm._ssrNode(" <h1></h1>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6ec6d8ff

// EXTERNAL MODULE: ./pages/action-login.js
var action_login = __webpack_require__(86);
var action_login_default = /*#__PURE__*/__webpack_require__.n(action_login);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  name: 'IndexPage',
  layout: 'auth',
  methods: {
    myFunction() {
      action_login_default.a.someFunction();
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "429d3982"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// console.log("login-Web");
//             // Lấy tham chiếu đến các phần tử trên giao diện
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const loginButton = document.getElementById('login-button');

//             // Xử lý sự kiện khi người dùng nhấn nút đăng nhập
// loginButton.addEventListener('click', () => {
// const email = emailInput.value;
// const password = passwordInput.value;

//     // Kiểm tra xem email và mật khẩu có hợp lệ hay không
// if (!email || !password) {
//     window.alert('Vui lòng nhập đầy đủ email và mật khẩu.');
// } else {
//     window.location.replace('/TongQuan');
//             // // Kiểm tra email và mật khẩu trong CSDL (giả sử là một hàm kiểm tra)
//             // const isValidUser = checkUserCredentials(email, password);
//             // if (isValidUser) {
//             // // Đăng nhập thành công
//             // window.alert('Đăng nhập thành công!');
//             // // Thực hiện các hành động khác sau khi đăng nhập
//             // }
//             //  else {
//             // // Sai email hoặc mật khẩu
//             // window.alert('Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.');
//             // }
// }    
// });
//             // Hàm kiểm tra email và mật khẩu trong CSDL (giả sử)
// function checkUserCredentials(email, password) {
//             // Thực hiện kiểm tra và trả về true nếu hợp lệ, ngược lại trả về false
//             // (Bạn cần thay thế hàm này bằng kiểm tra thực tế từ CSDL)
//             // Ví dụ:
//             // return (email === 'user@example.com' && password === 'secret');
// }

/***/ })

};;
//# sourceMappingURL=index.js.map