(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contentanimation: '',
      links: {},
      showlistani: false,
      showheaderinfo: false,
      showcontactinfo: false,
      showsocialinfo: false,
      showlinknodejs: false,
      objheaderanimation: [],
      website_name: '',
      website_link: '',
      errors: []
    };
  },
  created: function created() {
    this.getData();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    settings: 'setting/settings'
  })),
  methods: {
    addAnimation: function addAnimation() {
      if (this.contentanimation.trim().length != 0) {
        this.objheaderanimation.push({
          "val": this.contentanimation
        });
        this.contentanimation = '';
      }
    },
    removeElement: function removeElement(ind) {
      this.objheaderanimation.splice(ind, 1);
    },
    showHeader: function showHeader() {
      this.showheaderinfo = !this.showheaderinfo;
      this.showlistani = !this.showlistani;
    },
    showContact: function showContact() {
      this.showcontactinfo = !this.showcontactinfo;
    },
    showSocial: function showSocial() {
      this.showsocialinfo = !this.showsocialinfo;
    },
    showLinkNode: function showLinkNode() {
      this.showlinknodejs = !this.showlinknodejs;
    },
    getData: function getData() {
      var _this = this;

      this.$store.dispatch('setting/setSettings', this.settings);
      this.axios.get('/api/listhomeinfo').then(function (response) {
        _this.links = response.data.links;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //=============================Links=========================================
    createLinks: function createLinks() {
      var _this2 = this;

      this.$Progress.start();
      var uri = "http://127.0.0.1:8000/api/admins/links";
      var obj = {};
      obj.name = this.website_name;
      obj.link = this.website_link;
      this.axios.post(uri, obj).then(function (response) {
        _this2.getData();

        _this2.website_name = '';
        _this2.website_link = '';

        _this2.$Progress.finish();
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;

        _this2.$Progress.fail();
      });
    },
    deleteLink: function deleteLink(id, index) {
      var _this3 = this;

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          var uri = "http://127.0.0.1:8000/api/admins/links/".concat(id);

          _this3.axios["delete"](uri).then(function (response) {
            _this3.links.splice(index, 1);

            _this3.$swal('Deleted!', 'Tệp của bạn đã bị xóa.', 'success');
          })["catch"](function (data) {
            this.$swal("Failed! Xóa không thành công", data.message, "warning");
          });
        }
      });
    },
    //=============================Settings=========================================
    update: function update() {
      var _this4 = this;

      this.$Progress.start();
      var uri = "http://127.0.0.1:8000/api/admins/settings";
      this.axios.patch(uri, this.settings).then(function (response) {
        window.location.href = '/admin/setting';
        _this4.errors = [];

        _this4.$Progress.finish();

        if (response.data.message) {
          _this4.$notify({
            type: 'success',
            title: 'Setting',
            text: 'Sửa thành công!'
          });
        }
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;

        _this4.$Progress.fail();

        _this4.$notify({
          type: 'error',
          title: 'Setting',
          text: 'Sửa không thành công!'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hidden[data-v-1d71a145]{display:none;}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row mb-3" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", [
                  _c("i", { staticClass: "fa fa-book" }),
                  _vm._v(" Thông tin đầu trang"),
                  !_vm.showheaderinfo
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success float-right",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showHeader()
                            }
                          }
                        },
                        [_vm._m(0), _vm._v(" Chỉnh sửa")]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.update($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Tiêu đề")
                          ]),
                          _vm._v(" "),
                          !_vm.showheaderinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["header"],
                                    expression: "settings['header']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập tiêu đề",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["header"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "header",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showheaderinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["header"],
                                    expression: "settings['header']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập tiêu đề",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["header"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "header",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Nội dung")
                          ]),
                          _vm._v(" "),
                          !_vm.showheaderinfo
                            ? _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["header_content"],
                                    expression: "settings['header_content']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { rows: "12", readonly: "" },
                                domProps: {
                                  value: _vm.settings["header_content"]
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "header_content",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showheaderinfo
                            ? _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["header_content"],
                                    expression: "settings['header_content']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { rows: "12" },
                                domProps: {
                                  value: _vm.settings["header_content"]
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "header_content",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Danh sách trong phần hiệu ứng")
                          ]),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse",
                              attrs: { id: "collapseExample" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "card card-body" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.contentanimation,
                                        expression: "contentanimation"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { type: "text" },
                                    domProps: { value: _vm.contentanimation },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.contentanimation =
                                          $event.target.value
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  !_vm.showlistani
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary mt-2 mb-2",
                                          attrs: {
                                            type: "button",
                                            disabled: ""
                                          }
                                        },
                                        [_vm._v(" THÊM ")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.showlistani
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-primary mt-2 mb-2",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.addAnimation()
                                            }
                                          }
                                        },
                                        [_vm._v(" THÊM ")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm._l(_vm.objheaderanimation, function(
                                    value,
                                    index
                                  ) {
                                    return _c(
                                      "ul",
                                      { key: index, staticClass: "list-group" },
                                      [
                                        _c(
                                          "li",
                                          { staticClass: "list-group-item" },
                                          [
                                            _c("div", { staticClass: "row" }, [
                                              _c(
                                                "div",
                                                { staticClass: "col-md-10" },
                                                [
                                                  !_vm.showlistani
                                                    ? _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: value.val,
                                                            expression:
                                                              "value.val"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: {
                                                          type: "text",
                                                          readonly: ""
                                                        },
                                                        domProps: {
                                                          value: value.val
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              value,
                                                              "val",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.showlistani
                                                    ? _c("input", {
                                                        directives: [
                                                          {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: value.val,
                                                            expression:
                                                              "value.val"
                                                          }
                                                        ],
                                                        staticClass:
                                                          "form-control",
                                                        attrs: { type: "text" },
                                                        domProps: {
                                                          value: value.val
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              value,
                                                              "val",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      })
                                                    : _vm._e()
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "col-md-2" },
                                                [
                                                  !_vm.showlistani
                                                    ? _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger btn-small",
                                                          attrs: {
                                                            type: "button",
                                                            disabled: ""
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.removeElement(
                                                                index
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-times"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.showlistani
                                                    ? _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger btn-small",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.removeElement(
                                                                index
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-times"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm.showheaderinfo
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "submit" }
                              },
                              [_vm._m(2), _vm._v(" Lưu lại")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _vm.showheaderinfo
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.showHeader()
                                  }
                                }
                              },
                              [_vm._m(3), _vm._v("Hủy bỏ")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-3" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", [
                  _c("i", { staticClass: "fa fa-book" }),
                  _vm._v(" Thông tin liên hệ"),
                  !_vm.showcontactinfo
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success float-right",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showContact()
                            }
                          }
                        },
                        [_vm._m(4), _vm._v(" Chỉnh sửa")]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.update($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
                          !_vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["email"],
                                    expression: "settings['email']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  "aria-describedby": "",
                                  placeholder: "Nhập email",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["email"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["email"],
                                    expression: "settings['email']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập email",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["email"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Điện thoại")
                          ]),
                          _vm._v(" "),
                          !_vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["phone"],
                                    expression: "settings['phone']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập số điện thoại",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["phone"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["phone"],
                                    expression: "settings['phone']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập số điện thoại",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["phone"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Địa chỉ")
                          ]),
                          _vm._v(" "),
                          !_vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["address"],
                                    expression: "settings['address']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["address"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "address",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["address"],
                                    expression: "settings['address']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["address"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "address",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Fax")
                          ]),
                          _vm._v(" "),
                          !_vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["fax"],
                                    expression: "settings['fax']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập fax",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["fax"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "fax",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showcontactinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["fax"],
                                    expression: "settings['fax']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập fax",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["fax"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "fax",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm.showcontactinfo
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "submit" }
                              },
                              [_vm._m(5), _vm._v(" Lưu")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _vm.showcontactinfo
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.showContact()
                                  }
                                }
                              },
                              [_vm._m(6), _vm._v("Hủy bỏ")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-3" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", [
                  _c("i", { staticClass: "fa fa-book" }),
                  _vm._v(" Liên kết mạng xã hội"),
                  !_vm.showsocialinfo
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success float-right",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showSocial()
                            }
                          }
                        },
                        [_vm._m(7), _vm._v(" Chỉnh sửa")]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.update($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Facebook")
                          ]),
                          _vm._v(" "),
                          !_vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["facebook"],
                                    expression: "settings['facebook']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ facebook",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["facebook"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "facebook",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["facebook"],
                                    expression: "settings['facebook']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ facebook",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["facebook"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "facebook",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Twitter")
                          ]),
                          _vm._v(" "),
                          !_vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["twitter"],
                                    expression: "settings['twitter']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ twitter",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["twitter"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "twitter",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["twitter"],
                                    expression: "settings['twitter']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ twitter",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["twitter"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "twitter",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Linkedin")
                          ]),
                          _vm._v(" "),
                          !_vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["linkedin"],
                                    expression: "settings['linkedin']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ linkedin",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["linkedin"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "linkedin",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["linkedin"],
                                    expression: "settings['linkedin']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ linkedin",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["linkedin"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "linkedin",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Youtube")
                          ]),
                          _vm._v(" "),
                          !_vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["youtube"],
                                    expression: "settings['youtube']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ youtube",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: { value: _vm.settings["youtube"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "youtube",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["youtube"],
                                    expression: "settings['youtube']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder: "Nhập địa chỉ youtube",
                                  required: ""
                                },
                                domProps: { value: _vm.settings["youtube"] },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "youtube",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Link video youtube")
                          ]),
                          _vm._v(" "),
                          !_vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["video_youtube_intro"],
                                    expression:
                                      "settings['video_youtube_intro']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder:
                                    "Nhập link youtube giới thiệu tpack",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: {
                                  value: _vm.settings["video_youtube_intro"]
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "video_youtube_intro",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showsocialinfo
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings["video_youtube_intro"],
                                    expression:
                                      "settings['video_youtube_intro']"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  "aria-describedby": "",
                                  placeholder:
                                    "Nhập link youtube giới thiệu tpack",
                                  required: ""
                                },
                                domProps: {
                                  value: _vm.settings["video_youtube_intro"]
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "video_youtube_intro",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm.showsocialinfo
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "submit" }
                              },
                              [_vm._m(8), _vm._v(" Lưu lại")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _vm.showsocialinfo
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.showSocial()
                                  }
                                }
                              },
                              [_vm._m(9), _vm._v("Hủy bỏ")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-3" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _vm._m(10),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(11),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.links, function(value, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(value.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(value.link))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-small",
                              staticStyle: {
                                display: "block",
                                "margin-left": "auto",
                                "margin-right": "auto"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteLink(value.id, index)
                                }
                              }
                            },
                            [_vm._m(12, true)]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.update($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Tên trang web")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.website_name,
                                expression: "website_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              "aria-describedby": "",
                              placeholder: "Nhập tên trang web",
                              required: ""
                            },
                            domProps: { value: _vm.website_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.website_name = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Link trang web")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.website_link,
                                expression: "website_link"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              "aria-describedby": "",
                              placeholder: "Nhập link trang web",
                              required: ""
                            },
                            domProps: { value: _vm.website_link },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.website_link = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(13)
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-5" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", [
                  _c("i", { staticClass: "fa fa-book" }),
                  _vm._v(" Server NodeJS"),
                  !_vm.showcontactinfo
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success float-right btn-small",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.showLinkNode()
                            }
                          }
                        },
                        [_vm._m(14), _vm._v(" Chỉnh sửa")]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.update($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "font-weight-bold" }, [
                            _vm._v("Đường dẫn liên kết")
                          ]),
                          _vm._v(" "),
                          !_vm.showlinknodejs
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings.link_serve_nodejs,
                                    expression: "settings.link_serve_nodejs"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "",
                                  "aria-describedby": "",
                                  placeholder: "Nhập liên kết",
                                  required: "",
                                  readonly: ""
                                },
                                domProps: {
                                  value: _vm.settings.link_serve_nodejs
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "link_serve_nodejs",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showlinknodejs
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.settings.link_serve_nodejs,
                                    expression: "settings.link_serve_nodejs"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  id: "",
                                  "aria-describedby": "",
                                  placeholder: "Nhập đường dẫn liên kết",
                                  required: ""
                                },
                                domProps: {
                                  value: _vm.settings.link_serve_nodejs
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.settings,
                                      "link_serve_nodejs",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-3" }, [
                        _vm.showlinknodejs
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary float-right",
                                attrs: { type: "submit" }
                              },
                              [_vm._m(15), _vm._v(" Lưu")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _vm.showlinknodejs
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.showLinkNode()
                                  }
                                }
                              },
                              [_vm._m(16), _vm._v("Hủy bỏ")]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-pencil" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#collapseExample",
            "aria-expanded": "true",
            "aria-controls": "collapseExample"
          }
        },
        [_vm._v("\n\t\t\t\t\t\t\t\t\tXem danh sách\n\t\t\t\t\t\t\t\t\t")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-save" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-times" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-pencil" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-save" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-times" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-pencil" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-save" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-times" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [
        _c("i", { staticClass: "fa fa-book" }),
        _vm._v(" Website liên kết")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("STT")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tên trang web")]),
        _vm._v(" "),
        _c("th", [_vm._v("Link")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tùy chọn")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-times" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-small mt-4",
          attrs: { type: "submit" }
        },
        [
          _c("span", { staticClass: "btn-label" }, [
            _c("i", { staticClass: "fa fa-plus" })
          ]),
          _vm._v("Thêm trang liên kết")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label btn-small" }, [
      _c("i", { staticClass: "fa fa-pencil" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-save" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-label" }, [
      _c("i", { staticClass: "fa fa-times" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admins/setting/setting.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admins/setting/setting.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=1d71a145&scoped=true& */ "./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& */ "./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d71a145",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admins/setting/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=style&index=0&id=1d71a145&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_1d71a145_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=1d71a145&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/setting/setting.vue?vue&type=template&id=1d71a145&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_1d71a145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);