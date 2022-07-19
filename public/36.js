(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // discussion: {},
      // discussionTypes: '',
      errors: [],
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {}
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch('Discussion/getDiscussion', this.$route.params.id);
    this.$store.dispatch('DiscussionType/getDiscussionTypes');
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    discussion: 'Discussion/discussion'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    discussion_types: 'DiscussionType/discussion_types'
  })),
  methods: {
    update: function update() {
      var _this = this;

      this.$Progress.start();
      this.$store.dispatch('Discussion/editDiscussion', this.discussion).then(function (response) {
        _this.$router.push({
          name: 'DiscussionList'
        });

        _this.errors = [];

        _this.$Progress.finish();

        _this.$notify({
          type: 'success',
          title: 'Discussion',
          text: 'Sửa thành công!'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;

        _this.$Progress.fail();

        _this.$notify({
          type: 'error',
          title: 'Discussion',
          text: 'Sửa không thành công!'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-12" },
          [
            _c("div", { staticClass: "card mb-3" }, [
              _vm._m(0),
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
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.discussion.title,
                                expression: "discussion.title"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.title },
                            attrs: {
                              type: "text",
                              id: "",
                              "aria-describedby": "",
                              placeholder: "Nhập tiêu đề"
                            },
                            domProps: { value: _vm.discussion.title },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.discussion,
                                  "title",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.title
                            ? _c("span", { class: ["text text-danger"] }, [
                                _vm._v(_vm._s(_vm.errors.title))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("label", { staticClass: "col-form-label" }, [
                          _vm._v("Trạng thái")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.discussion.status,
                                  expression: "discussion.status"
                                }
                              ],
                              staticClass: "form-control select2",
                              staticStyle: { width: "100%" },
                              attrs: { name: "status" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.discussion,
                                    "status",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "active" } }, [
                                _vm._v("active")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "inactive" } }, [
                                _vm._v("inactive")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors.status
                            ? _c("span", { class: ["text text-danger"] }, [
                                _vm._v(_vm._s(_vm.errors.status))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { staticClass: "font-weight-bold" }, [
                              _vm._v("Nội dung")
                            ]),
                            _vm._v(" "),
                            _c("ckeditor", {
                              class: { "is-invalid": _vm.errors.content },
                              attrs: {
                                editor: _vm.editor,
                                config: _vm.editorConfig
                              },
                              model: {
                                value: _vm.discussion.content,
                                callback: function($$v) {
                                  _vm.$set(_vm.discussion, "content", $$v)
                                },
                                expression: "discussion.content"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.content
                              ? _c("span", { class: ["text text-danger"] }, [
                                  _vm._v(_vm._s(_vm.errors.content))
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-2 col-form-label",
                            attrs: { for: "example-text-input" }
                          },
                          [_vm._v("Type")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.discussion.discussion_type_id,
                                  expression: "discussion.discussion_type_id"
                                }
                              ],
                              staticClass: "form-control input-width",
                              attrs: { name: "discussion_type_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.discussion,
                                    "discussion_type_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.discussion_types, function(type, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: {
                                    value: type.id,
                                    selected:
                                      type.id ==
                                      _vm.discussion.discussion_type_id
                                  }
                                },
                                [_vm._v(_vm._s(type.name))]
                              )
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { to: { name: "DiscussionList" } }
                            },
                            [
                              _c("span", { staticClass: "btn-label" }, [
                                _c("i", { staticClass: "fa fa-times" })
                              ]),
                              _vm._v("Hủy bỏ")
                            ]
                          )
                        ],
                        1
                      )
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_c("i", { staticClass: "fa fa-pencil" }), _vm._v(" Chỉnh sửa")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary float-right",
          attrs: { type: "submit" }
        },
        [
          _c("span", { staticClass: "btn-label" }, [
            _c("i", { staticClass: "fa fa-save" })
          ]),
          _vm._v(" Lưu lại")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admins/discussion/discussion/Edit.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/admins/discussion/discussion/Edit.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=79cfc646& */ "./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admins/discussion/discussion/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=79cfc646& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/discussion/discussion/Edit.vue?vue&type=template&id=79cfc646&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_79cfc646___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);