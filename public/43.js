(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      libraries: [],
      type: 2,
      typeVideo: 2,
      typeDocument: '',
      typeImage: ''
    };
  },
  created: function created() {
    var _this = this;

    var uri = 'http://127.0.0.1:8000/api/admins/libraries';
    this.axios.get(uri).then(function (response) {
      _this.libraries = response.data.libraries;
    });
    console.log('data:' + this.libraries);
  },
  updated: function updated() {//tat DataTable: giup hien thi ra chinh xac nhung khong co paginate
    // $(document).ready(function() {
    // 	$('#example1').DataTable();
    // } );
    // if(this.type == 1){			
    // 	return this.activeLibraryTypeImages
    // }
    // if(this.type == 2){			
    // 	return  this.activeLibraryTypeVideos
    // }
    // if(this.type == 3){			
    // 	return  this.activeLibraryTypeDocuments
    // }
  },
  mounted: function mounted() {// this.$nextTick(() => {
    // 	// this.type
    // 	// return this.libraries
    // 	// if(this.type == 1){			
    // 	// 	return this.activeLibraryTypeImages
    // 	// }
    // 	// if(this.type == 2){			
    // 	// 	return  this.activeLibraryTypeVideos
    // 	// }
    // 	// if(this.type == 3){			
    // 	// 	return  this.activeLibraryTypeDocuments
    // 	// }
    // });
  },
  computed: {
    //thang cong nhung khong the chuyen tab
    activeLibraryTypeVideos: function activeLibraryTypeVideos() {
      return this.libraries.filter(function (value) {
        if (value.library_type_id == 2) {
          return value;
        }
      });
    },
    activeLibraryTypeImages: function activeLibraryTypeImages() {
      return this.libraries.filter(function (value) {
        if (value.library_type_id == 1) {
          return value;
        }
      });
    },
    activeLibraryTypeDocuments: function activeLibraryTypeDocuments() {
      return this.libraries.filter(function (value) {
        if (value.library_type_id == 3) {
          return value;
        }
      });
    } //https://vuilaptrinh.com/2019-10-04-huong-dan-viet-code-vue-chuan/
    //shop\resources\js\views\admins\blog\tag\list.vue

  },
  watch: {
    type: function type() {
      return this.type;
    } // type(){
    // 	if(this.type == 1){			
    // 		return this.libraries = this.activeLibraryTypeImages
    // 	}
    // 	if(this.type == 2){			
    // 		return this.libraries = this.activeLibraryTypeVideos
    // 	}
    // 	if(this.type == 3){			
    // 		return this.libraries = this.activeLibraryTypeDocuments
    // 	}
    // },
    // libraryImage(){
    //     return this.activeLibraryTypeImages
    // },
    // libraryVideo(){
    //     return this.activeLibraryTypeVideos
    // },
    // libraryDocument(){
    //     return this.activeLibraryTypeDocuments
    // },

  },
  methods: {
    //thang cong nhung nhung khi chuyen tab paginate sau do chuyen tab se bi error
    libraryVideo: function libraryVideo() {
      this.type = 2;
    },
    libraryImage: function libraryImage() {
      this.type = 1;
    },
    libraryDocument: function libraryDocument() {
      this.type = 3;
    },
    destroy: function destroy(id, index) {
      var _this2 = this;

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
          var uri = "http://127.0.0.1:8000/api/admins/libraries/".concat(id);
          var app = _this2;

          _this2.axios["delete"](uri).then(function (response) {
            app.libraries.splice(index, 1);

            _this2.$swal('Deleted!', 'T???p c???a b???n ???? b??? x??a.', 'success');
          })["catch"](function (data) {
            this.$swal("Failed! X??a kh??ng th??nh c??ng", data.message, "warning");
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mb-5" }, [
      _c(
        "div",
        { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
        [
          _c("div", { staticClass: "card mb-3" }, [
            _c("div", { staticClass: "card-header" }, [
              _c(
                "h3",
                [
                  _c("i", { staticClass: "fa fa-table" }),
                  _vm._v(" Th??nh ph???n Library\n                        "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-warning btn-sm fas fa-video text-red float-left",
                      on: { click: _vm.libraryVideo }
                    },
                    [_c("p", [_vm._v("Library Video")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-warning btn-sm fas fa-image text-blue float-left",
                      on: { click: _vm.libraryImage }
                    },
                    [_c("p", [_vm._v("Library Image")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-warning btn-sm fas fa-file text-green float-left",
                      on: { click: _vm.libraryDocument }
                    },
                    [_c("p", [_vm._v("Library Document")])]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary btn-sm float-right",
                      attrs: { to: { name: "LibraryCreate" } }
                    },
                    [_vm._v("Th??m")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered table-hover display",
                    attrs: { id: "example1" }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.type == 2
                      ? _c(
                          "tbody",
                          _vm._l(_vm.activeLibraryTypeVideos, function(
                            value,
                            index
                          ) {
                            return _c("tr", { key: value.id }, [
                              _c("td", [_vm._v(_vm._s(value.id))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.title))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: value.file_name,
                                      target: "blank"
                                    }
                                  },
                                  [_vm._v("Xem Video")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(value.library_type.name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.user.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("div", { staticClass: "form-check" }, [
                                      value.status == "inactive"
                                        ? _c("input", {
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            }
                                          })
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: value.status,
                                                expression: "value.status"
                                              }
                                            ],
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                value.status
                                              )
                                                ? _vm._i(value.status, null) >
                                                  -1
                                                : value.status
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = value.status,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(value, "status", $$c)
                                                }
                                              }
                                            }
                                          })
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-success btn-sm",
                                      attrs: {
                                        to: {
                                          name: "LibraryEdit",
                                          params: { id: value.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-edit",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger btn-sm",
                                      attrs: { role: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.destroy(value.id, index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-trash",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.type == 1
                      ? _c(
                          "tbody",
                          _vm._l(_vm.activeLibraryTypeImages, function(
                            value,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(value.id))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.title))]),
                              _vm._v(" "),
                              _c("td", [
                                _c("img", {
                                  attrs: {
                                    src:
                                      "images/library/images/" +
                                      value.file_name,
                                    alt: "Girl in a jacket",
                                    width: "100",
                                    height: "100"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(value.library_type.name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.user.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("div", { staticClass: "form-check" }, [
                                      value.status == "inactive"
                                        ? _c("input", {
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            }
                                          })
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: value.status,
                                                expression: "value.status"
                                              }
                                            ],
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                value.status
                                              )
                                                ? _vm._i(value.status, null) >
                                                  -1
                                                : value.status
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = value.status,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(value, "status", $$c)
                                                }
                                              }
                                            }
                                          })
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-success btn-sm",
                                      attrs: {
                                        to: {
                                          name: "LibraryEdit",
                                          params: { id: value.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-edit",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger btn-sm",
                                      attrs: { role: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.destroy(value.id, index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-trash",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.type == 3
                      ? _c(
                          "tbody",
                          _vm._l(_vm.activeLibraryTypeDocuments, function(
                            value,
                            index
                          ) {
                            return _c("tr", { key: index }, [
                              _c("td", [_vm._v(_vm._s(value.id))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.title))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "/public/library/documents/" +
                                        value.file_name,
                                      target: "blank"
                                    }
                                  },
                                  [_vm._v("Xem Documents")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(value.library_type.name))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(value.user.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "form-group clearfix" },
                                  [
                                    _c("div", { staticClass: "form-check" }, [
                                      value.status == "inactive"
                                        ? _c("input", {
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            }
                                          })
                                        : _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: value.status,
                                                expression: "value.status"
                                              }
                                            ],
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              id: "exampleCheck1",
                                              disabled: ""
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                value.status
                                              )
                                                ? _vm._i(value.status, null) >
                                                  -1
                                                : value.status
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = value.status,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        value,
                                                        "status",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(value, "status", $$c)
                                                }
                                              }
                                            }
                                          })
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-success btn-sm",
                                      attrs: {
                                        to: {
                                          name: "LibraryEdit",
                                          params: { id: value.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-edit",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger btn-sm",
                                      attrs: { role: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.destroy(value.id, index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-trash",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      : _vm._e()
                  ]
                )
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ti??u ?????")]),
        _vm._v(" "),
        _c("th", [_vm._v("Media")]),
        _vm._v(" "),
        _c("th", [_vm._v("Library Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("User")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tr???ng th??i")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "4em" } }, [_vm._v("T??y ch???n")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admins/library/library/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3a643e3e& */ "./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admins/library/library/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3a643e3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Index.vue?vue&type=template&id=3a643e3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3a643e3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);