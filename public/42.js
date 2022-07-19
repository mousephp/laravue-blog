(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      library: {
        status: '',
        title: '',
        user_id: '',
        photo: '',
        video: false,
        library_type_id: ''
      },
      // libraryTypes: '',
      // users: '',
      errors: [],
      errorLibrary: '',
      video: false,
      document: false,
      photo: false,
      errorImage: '',
      errorDocument: '',
      file: ''
    };
  },
  created: function created() {
    this.fetchLibrary();
  },
  beforeCreate: function beforeCreate() {
    // this.$store.dispatch('Library/getLibrary', this.$route.params.id);
    this.$store.dispatch('LibraryType/getLibraryTypes', this.library_types);
    this.$store.dispatch('User/getUsers');
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    library_types: 'LibraryType/library_types'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    users: 'User/users'
  })),
  methods: {
    fetchLibrary: function fetchLibrary() {
      var _this = this;

      var uri = "http://127.0.0.1:8000/api/admins/libraries/".concat(this.$route.params.id);
      this.axios.get(uri).then(function (response) {
        _this.library = response.data.library;
      });
    },
    videoHandle: function videoHandle() {
      this.video = true;
    },
    documentHandle: function documentHandle() {
      this.document = true;
    },
    photoHandle: function photoHandle() {
      this.photo = true;
    },
    onFileImageChange: function onFileImageChange(e) {
      var fileInput = document.getElementById('fileImage');
      var filePath = fileInput.value;
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

      if (!allowedExtensions.exec(filePath)) {
        fileInput.value = '';
        this.errorImage = 'Vui lòng đăng tài liệu với đuôi .jpg|\.jpeg|\.png';
      } else {
        if (fileInput.files && fileInput.files[0]) {
          this.library.photo = e.target.files[0];
        }
      }
    },
    onFileDocumentChange: function onFileDocumentChange() {
      var fileInput = document.getElementById('file');
      var filePath = fileInput.value;
      var allowedExtensions = /(\.doc|\.docx|\.pdf|\.txt|\.ppt|\.pptx)$/i;

      if (!allowedExtensions.exec(filePath)) {
        this.errorDocument = 'Vui lòng đăng tài liệu với đuôi .doc/.docx/.txt/.pdf/.ppt/.pptx';
        fileInput.value = '';
      } else {
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(fileInput.files[0]);
          this.file = fileInput.files[0];
        }
      }
    },
    updateLibraryDocument: function updateLibraryDocument() {
      var _this2 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('library_id', this.$route.params.id);
      formData.append('file_name', this.file);
      formData.append('title', this.library.title);
      formData.append('user_id', this.library.user_id);
      formData.append('status', this.library.status);
      formData.append('library_type_id', this.library.library_type_id = 3);
      formData.append('document', 'document');
      formData.append('_method', 'PUT');
      this.$store.dispatch('Library/editLibrary', formData, config).then(function (response) {
        if (response.data.status) {
          _this2.$notify({
            type: 'success',
            title: 'Library',
            text: 'Sửa thành công!'
          });

          _this2.errors = []; // this.$router.push({ name: 'LibraryList'})
        } else {
          _this2.$notify({
            type: 'error',
            title: 'Library',
            text: 'Sửa không thành công!'
          });
        }
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;

        _this2.$Progress.fail();
      });
    },
    updateLibraryImage: function updateLibraryImage() {
      var _this3 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('library_id', this.$route.params.id);
      formData.append('file_name', this.library.photo);
      formData.append('user_id', this.library.user_id);
      formData.append('status', this.library.status);
      formData.append('library_type_id', this.library.library_type_id = 1);
      formData.append('image', 'photo');
      formData.append('title', this.library.title);
      formData.append('_method', 'PUT');
      this.$store.dispatch('Library/editLibrary', formData, config).then(function (response) {
        if (response.data.status) {
          _this3.$notify({
            type: 'success',
            title: 'Library',
            text: 'Sửa thành công!'
          });

          _this3.errors = [];

          _this3.$router.push({
            name: 'LibraryList'
          });

          _this3.$Progress.finish();
        } else {
          _this3.$notify({
            type: 'error',
            title: 'Library',
            text: 'Sửa không thành công!'
          });
        }
      })["catch"](function (error) {
        _this3.errors = error.response.data.errors;

        _this3.$Progress.fail();
      });
    },
    updateLibraryVideo: function updateLibraryVideo() {
      var _this4 = this;

      var uri = "http://127.0.0.1:8000/api/admins/libraries/".concat(this.$route.params.id);
      axios.put(uri, this.library).then(function (response) {
        _this4.$router.push({
          name: 'LibraryList'
        });

        _this4.$Progress.finish();
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;

        _this4.$Progress.fail();
      });
    },
    update: function update() {
      this.$Progress.start();

      if (this.library.library_type_id == 2) {
        this.updateLibraryVideo();
      }

      if (this.library.library_type_id == 3) {
        this.updateLibraryDocument();
      }

      if (this.library.library_type_id == 1) {
        this.updateLibraryImage();
      }
    } // loadLibraryType(){
    // 	let uri = 'http://127.0.0.1:8000/api/admins/library-types';
    //   	axios.get(uri).then(({ data }) => (this.libraryTypes = data.libraryTypes));			  
    // },
    // loadUserType(){
    // 	let uri = 'http://127.0.0.1:8000/api/admins/users';
    //   	axios.get(uri).then(({ data }) => (this.users = data.data));			  
    // },

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                          _c("label", [_vm._v("Tiêu đề")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.library.title,
                                expression: "library.title"
                              }
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.title },
                            attrs: {
                              type: "text",
                              name: "title",
                              "aria-describedby": "",
                              placeholder: "Tiêu đề"
                            },
                            domProps: { value: _vm.library.title },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.library,
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
                                  value: _vm.library.status,
                                  expression: "library.status"
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
                                    _vm.library,
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
                          "label",
                          {
                            staticClass: "col-form-label",
                            attrs: { for: "example-text-input" }
                          },
                          [_vm._v("User")]
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
                                  value: _vm.library.user_id,
                                  expression: "library.user_id"
                                }
                              ],
                              staticClass: "form-control input-width",
                              attrs: { name: "library" },
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
                                    _vm.library,
                                    "user_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("Please select one")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.users, function(user, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: {
                                      value: user.id,
                                      selected: user.id == _vm.library.user_id
                                    }
                                  },
                                  [_vm._v(_vm._s(user.name))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.errors.user_id
                            ? _c("span", { class: ["text text-danger"] }, [
                                _vm._v(_vm._s(_vm.errors.user_id))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6 text-center" }, [
                        _vm.library.library_type_id == 2
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-success",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.videoHandle()
                                  }
                                }
                              },
                              [_vm._m(1), _vm._v(" Video")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.library.library_type_id == 3
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-success",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.documentHandle()
                                  }
                                }
                              },
                              [_vm._m(2), _vm._v(" Documen")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.library.library_type_id == 1
                          ? _c(
                              "a",
                              {
                                staticClass: "btn btn-success",
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    return _vm.photoHandle()
                                  }
                                }
                              },
                              [_vm._m(3), _vm._v(" Photo")]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm.document
                        ? _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Document")]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "file", id: "file" },
                                on: {
                                  change: function($event) {
                                    return _vm.onFileDocumentChange()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errorDocument
                                ? _c("span", { class: ["text text-danger"] }, [
                                    _vm._v(_vm._s(_vm.errorDocument))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.errors.file_name
                                ? _c("span", { class: ["text text-danger"] }, [
                                    _vm._v(_vm._s(_vm.errors.file_name))
                                  ])
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.video
                        ? _c("div", { staticClass: "col-md-6" }, [
                            _c("label", { staticClass: "col-form-label" }, [
                              _vm._v("Video")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.library.file_name,
                                    expression: "library.file_name"
                                  }
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.video },
                                attrs: {
                                  type: "text",
                                  name: "video_library",
                                  id: "",
                                  placeholder: "Nhập Link Video"
                                },
                                domProps: { value: _vm.library.file_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.library,
                                      "file_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.file_name
                                ? _c("span", { class: ["text text-danger"] }, [
                                    _vm._v(_vm._s(_vm.errors.file_name))
                                  ])
                                : _vm._e()
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.photo
                        ? _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "label",
                              {
                                staticClass: "col-form-label",
                                attrs: { for: "exampleInputFile" }
                              },
                              [_vm._v("Photo")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "file",
                                  id: "fileImage",
                                  name: "image_library"
                                },
                                on: { change: _vm.onFileImageChange }
                              })
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              attrs: {
                                src: "" + _vm.library.file_name,
                                alt: "Girl in a jacket",
                                width: "100",
                                height: "100"
                              }
                            }),
                            _vm._v(" "),
                            _vm.errorImage
                              ? _c("span", { class: ["text text-danger"] }, [
                                  _vm._v(_vm._s(_vm.errorImage))
                                ])
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }),
                      _vm._v(" "),
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { to: { name: "LibraryList" } }
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
      _c("h3", [
        _c("i", { staticClass: "fa fa-pencil" }),
        _vm._v("Sửa Library")
      ])
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
      _c("i", { staticClass: "fa fa-save" })
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

/***/ "./resources/js/views/admins/library/library/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Edit.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=5258254e& */ "./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admins/library/library/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=5258254e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admins/library/library/Edit.vue?vue&type=template&id=5258254e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_5258254e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);