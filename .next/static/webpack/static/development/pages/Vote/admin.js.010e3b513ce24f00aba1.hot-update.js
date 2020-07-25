webpackHotUpdate("static\\development\\pages\\Vote\\admin.js",{

/***/ "./pages/Vote/admin.js":
/*!*****************************!*\
  !*** ./pages/Vote/admin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Admin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Admin, _Component);

  var _super = _createSuper(Admin);

  function Admin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Admin);

    _this = _super.call(this, props);
    _this.state = {
      register_start_date: new Date(),
      register_end_date: new Date(),
      vote_start_date: new Date(),
      vote_end_date: new Date(),
      requirement: '',
      question: '',
      option: '',
      loading: false,
      loading2: false,
      search: '',
      errorMessage: ''
    }; //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this.submit_setting = _this.submit_setting.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.submit_option = _this.submit_option.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.refresh_search = _this.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //const [ register_start_date, setDate ] = useState(new Date());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Admin, [{
    key: "submit_setting",
    value: function () {
      var _submit_setting = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var Vote, _this$state, register_start_date, register_end_date, vote_start_date, vote_end_date, requirement, question, accounts;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.address);
                _this$state = this.state, register_start_date = _this$state.register_start_date, register_end_date = _this$state.register_end_date, vote_start_date = _this$state.vote_start_date, vote_end_date = _this$state.vote_end_date, requirement = _this$state.requirement, question = _this$state.question; //console.log(this.state.register_end_date.getTime());
                //console.log(register_start_date);

                this.setState({
                  loading: true,
                  errorMessage: ''
                });
                _context.prev = 4;
                _context.next = 7;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return Vote.methods.set_up_all(question, register_start_date.getTime(), register_end_date.getTime(), vote_start_date.getTime(), vote_end_date.getTime(), requirement).send({
                  from: accounts[0]
                });

              case 10:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Successfully");
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);
                alert(_context.t0);

              case 16:
                this.setState({
                  loading: false
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 13]]);
      }));

      function submit_setting(_x) {
        return _submit_setting.apply(this, arguments);
      }

      return submit_setting;
    }()
  }, {
    key: "submit_option",
    value: function () {
      var _submit_option = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var Vote, option, accounts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                Vote = Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(this.props.address);
                option = this.state.option;
                console.log(option);
                this.setState({
                  loading2: true
                });
                _context2.prev = 5;
                _context2.next = 8;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_16__["default"].eth.getAccounts();

              case 8:
                accounts = _context2.sent;
                _context2.next = 11;
                return Vote.methods.set_up_options(option.toString()).send({
                  from: accounts[0]
                });

              case 11:
                //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
                alert("Setting Option Successfully");
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](5);
                alert(_context2.t0);

              case 17:
                this.setState({
                  loading: false
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 14]]);
      }));

      function submit_option(_x2) {
        return _submit_option.apply(this, arguments);
      }

      return submit_option;
    }()
  }, {
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") {
        _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/admin/".concat(this.props.mb_addr, "/").concat(this.state.search));
        console.log(this.props.address);
      }
    } //還可能要有顯示目前option的功能

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //const [date, setDate] = useState(new Date());
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.1.3/react-datepicker.min.css",
        integrity: "sha512-Nc2rvPMo6xXLoInVUZRxo3qMVFCQ8o1PzK/9eGjutJvr0Y/PM6u4Gg5Rg3xO33jsAq9L4Uc/PM0bitnlOh0wpw==",
        crossorigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/vote/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Vote"))), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto",
        style: {
          width: "50%"
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/home/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/status/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Status")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true
      }, __jsx("div", {
        style: {
          color: "white"
        }
      }, " inesrt your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.search,
        onChange: function onChange(event) {
          return _this2.setState({
            search: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        onClick: this.refresh_search
      }, "Search"))), __jsx("div", {
        style: {
          margin: "auto"
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          margin: "auto",
          marginTop: "3%"
        },
        onSubmit: this.submit_setting
      }, __jsx("h2", null, "Edit Setting"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "new_vote",
        controlId: "Issue"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "The Issue you want to vote"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "Enter issue",
        value: this.state.question,
        onChange: function onChange(event) {
          return _this2.setState({
            question: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "register_start_date",
        controlId: "register_start_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "register_start_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.register_start_date,
        onChange: function onChange(date) {
          _this2.setState({
            register_start_date: date
          });
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "register_end_date",
        controlId: "register_end_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "register_end_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.register_end_date,
        onChange: function onChange(date) {
          _this2.setState({
            register_end_date: date
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "vote_start_date",
        controlId: "vote_start_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote_start_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.vote_start_date,
        onChange: function onChange(date) {
          _this2.setState({
            vote_start_date: date
          });
        }
      })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "vote_end_date",
        controlId: "vote_end_date"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote_end_date"), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        selected: this.state.vote_end_date,
        onChange: function onChange(date) {
          _this2.setState({
            vote_end_date: date
          });
        }
      }))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        as: "requirement",
        controlId: "requirement"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "vote requirement"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "Enter requirement",
        value: this.state.requirement,
        onChange: function onChange(event) {
          return _this2.setState({
            requirement: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        type: "submit"
      }, "Setting")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          margin: "auto",
          marginTop: "3%"
        },
        onSubmit: this.submit_option
      }, __jsx("h2", null, "Set options one by one"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Row, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
        controlId: "option"
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "option"), console.log(this.props.options), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Control, {
        type: "text",
        placeholder: "option",
        value: this.state.option,
        onChange: function onChange(event) {
          return _this2.setState({
            option: event.target.value
          });
        }
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        type: "submit"
      }, "Set options")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(props) {
        var _props$query, address, mb_addr, Vote_event, option_length, options, index, temp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                _context3.next = 3;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_17__["default"])(address);

              case 3:
                Vote_event = _context3.sent;
                _context3.next = 6;
                return Vote_event.methods.return_options_length().call();

              case 6:
                option_length = _context3.sent;
                options = [];
                index = 0;

              case 9:
                if (!(index < option_length)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 12;
                return Vote_event.methods.return_options(index).call();

              case 12:
                temp = _context3.sent;
                options.push(temp);

              case 14:
                index++;
                _context3.next = 9;
                break;

              case 17:
                console.log(options);
                return _context3.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  options: options
                });

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Admin);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL2FkbWluLmpzIl0sIm5hbWVzIjpbIkFkbWluIiwicHJvcHMiLCJzdGF0ZSIsInJlZ2lzdGVyX3N0YXJ0X2RhdGUiLCJEYXRlIiwicmVnaXN0ZXJfZW5kX2RhdGUiLCJ2b3RlX3N0YXJ0X2RhdGUiLCJ2b3RlX2VuZF9kYXRlIiwicmVxdWlyZW1lbnQiLCJxdWVzdGlvbiIsIm9wdGlvbiIsImxvYWRpbmciLCJsb2FkaW5nMiIsInNlYXJjaCIsImVycm9yTWVzc2FnZSIsInN1Ym1pdF9zZXR0aW5nIiwiYmluZCIsInN1Ym1pdF9vcHRpb24iLCJyZWZyZXNoX3NlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJWb3RlIiwidm90ZSIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInNldF91cF9hbGwiLCJnZXRUaW1lIiwic2VuZCIsImZyb20iLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJzZXRfdXBfb3B0aW9ucyIsInRvU3RyaW5nIiwiUm91dGVyIiwicHVzaFJvdXRlIiwibWJfYWRkciIsIndpZHRoIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImRhdGUiLCJvcHRpb25zIiwicXVlcnkiLCJWb3RlX2V2ZW50IiwicmV0dXJuX29wdGlvbnNfbGVuZ3RoIiwiY2FsbCIsIm9wdGlvbl9sZW5ndGgiLCJpbmRleCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FB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SSxDQUFDQyxPQUFELEM7OztBQUF0QjRCLDBCOzt1QkFDc0JBLFVBQVUsQ0FBQ3RCLE9BQVgsQ0FBbUJ1QixxQkFBbkIsR0FBMkNDLElBQTNDLEU7OztBQUF0QkMsNkI7QUFDRkwsdUIsR0FBVSxFO0FBQ0xNLHFCLEdBQVEsQzs7O3NCQUFHQSxLQUFLLEdBQUdELGE7Ozs7Ozt1QkFDUEgsVUFBVSxDQUFDdEIsT0FBWCxDQUFtQjJCLGNBQW5CLENBQWtDRCxLQUFsQyxFQUF5Q0YsSUFBekMsRTs7O0FBQWJJLG9CO0FBQ0pSLHVCQUFPLENBQUNTLElBQVIsQ0FBYUQsSUFBYjs7O0FBRnVDRixxQkFBSyxFOzs7OztBQUloRHBCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWWEsT0FBWjtrREFDTTtBQUFDMUIseUJBQU8sRUFBUEEsT0FBRDtBQUFTa0IseUJBQU8sRUFBUEEsT0FBVDtBQUFpQlEseUJBQU8sRUFBUEE7QUFBakIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQ01VLCtDOztBQWdOTDNELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFxhZG1pbi5qcy4wMTBlM2I1MTNjZTI0ZjAwYWJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcblxyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHJlZ2lzdGVyX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlZ2lzdGVyX2VuZF9kYXRlOm5ldyBEYXRlKCksXHJcbiAgICAgICAgICB2b3RlX3N0YXJ0X2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHZvdGVfZW5kX2RhdGU6bmV3IERhdGUoKSxcclxuICAgICAgICAgIHJlcXVpcmVtZW50OicnLFxyXG4gICAgICAgICAgcXVlc3Rpb246JycsXHJcbiAgICAgICAgICBvcHRpb246JycsXHJcbiAgICAgICAgICBsb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICBsb2FkaW5nMjogZmFsc2UsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JydcclxuICAgICAgICB9O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOy8v5pO35Y+W6YCZ5YCL57ay5Z2A55qEdXJs6YKjcGFydOeahGFkZHJlc3MoZnJvbSByb3V0ZXM/PykgIFxyXG4gICAgICB0aGlzLnN1Ym1pdF9zZXR0aW5nID0gdGhpcy5zdWJtaXRfc2V0dGluZy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnN1Ym1pdF9vcHRpb24gPSB0aGlzLnN1Ym1pdF9vcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5yZWZyZXNoX3NlYXJjaCA9IHRoaXMucmVmcmVzaF9zZWFyY2guYmluZCh0aGlzKTtcclxuICAgICAgLy9jb25zdCBbIHJlZ2lzdGVyX3N0YXJ0X2RhdGUsIHNldERhdGUgXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBvcHRpb25fbGVuZ3RoID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zX2xlbmd0aCgpLmNhbGwoKTtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgICAgICByZXR1cm57YWRkcmVzcyxtYl9hZGRyLG9wdGlvbnN9O1xyXG4gICAgfVxyXG4gICAgYXN5bmMgc3VibWl0X3NldHRpbmcoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IFZvdGUgPSB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHtyZWdpc3Rlcl9zdGFydF9kYXRlLHJlZ2lzdGVyX2VuZF9kYXRlLHZvdGVfc3RhcnRfZGF0ZSx2b3RlX2VuZF9kYXRlLHJlcXVpcmVtZW50LHF1ZXN0aW9ufSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZWdpc3Rlcl9zdGFydF9kYXRlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWUsZXJyb3JNZXNzYWdlOicnfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGUubWV0aG9kcy5zZXRfdXBfYWxsKFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl9zdGFydF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyX2VuZF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHZvdGVfc3RhcnRfZGF0ZS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICB2b3RlX2VuZF9kYXRlLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50XHJcbiAgICAgICAgICAgICkuc2VuZChcclxuICAgICAgICAgICAgICAgIHtmcm9tOmFjY291bnRzWzBdfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL1JvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYClcclxuICAgICAgICAgICAgYWxlcnQoXCJTZXR0aW5nIFN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBhbGVydChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzdWJtaXRfb3B0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBWb3RlID0gdm90ZSh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCB7b3B0aW9ufSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nMjp0cnVlfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFZvdGUubWV0aG9kcy5zZXRfdXBfb3B0aW9ucyhcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50b1N0cmluZygpXHJcbiAgICAgICAgICAgICkuc2VuZChcclxuICAgICAgICAgICAgICAgIHtmcm9tOmFjY291bnRzWzBdfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL1JvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYClcclxuICAgICAgICAgICAgYWxlcnQoXCJTZXR0aW5nIE9wdGlvbiBTdWNjZXNzZnVsbHlcIilcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKXtcclxuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvYWRtaW4vJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5zdGF0ZS5zZWFyY2h9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mChOWPr+iDveimgeaciemhr+ekuuebruWJjW9wdGlvbueahOWKn+iDvVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZWFjdC1kYXRlcGlja2VyLzMuMS4zL3JlYWN0LWRhdGVwaWNrZXIubWluLmNzc1wiIGludGVncml0eT1cInNoYTUxMi1OYzJydlBNbzZ4WExvSW5WVVpSeG8zcU1WRkNROG8xUHpLLzllR2p1dEp2cjBZL1BNNnU0R2c1UmczeE8zM2pzQXE5TDRVYy9QTTBiaXRubE9oMHdwdz09XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPjxMaW5rIHJvdXRlPXtcIi92b3RlL1wiK3RoaXMucHJvcHMuYWRkcmVzcyB9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPjwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgc3R5bGU9e3t3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvaG9tZS9cIit0aGlzLnByb3BzLmFkZHJlc3MgfT48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL3N0YXR1cy9cIit0aGlzLnByb3BzLmFkZHJlc3MgfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL2luZGV4XCIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+TG9nb3V0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICA8Rm9ybSBpbmxpbmU+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwid2hpdGVcIn19ID4gaW5lc3J0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiYXV0b1wifX0+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3sgbWFyZ2luIDpcImF1dG9cIixtYXJnaW5Ub3AgOlwiMyVcIn19IG9uU3VibWl0ID0ge3RoaXMuc3VibWl0X3NldHRpbmd9PlxyXG4gICAgICAgIDxoMj5FZGl0IFNldHRpbmc8L2gyPlxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cIm5ld192b3RlXCIgY29udHJvbElkPVwiSXNzdWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRoZSBJc3N1ZSB5b3Ugd2FudCB0byB2b3RlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgaXNzdWVcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdWVzdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cXVlc3Rpb246ZXZlbnQudGFyZ2V0LnZhbHVlfSl9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+ey8qXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwiZ2FwXCIgY29udHJvbElkPVwiZ2FwXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5nYXAgdGltZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ2FwIHRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJlbnRyYW5jZV9mZWVcIiBjb250cm9sSWQ9XCJlbnRyYW5jZV9mZWVcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPmVudHJhbmNlIGZlZTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiZW50cmFuY2UgZmVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz4qL31cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz1cInJlZ2lzdGVyX3N0YXJ0X2RhdGVcIiBjb250cm9sSWQ9XCJyZWdpc3Rlcl9zdGFydF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5yZWdpc3Rlcl9zdGFydF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUucmVnaXN0ZXJfc3RhcnRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfc3RhcnRfZGF0ZTogZGF0ZX0pfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJyZWdpc3Rlcl9lbmRfZGF0ZVwiICBjb250cm9sSWQ9XCJyZWdpc3Rlcl9lbmRfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+cmVnaXN0ZXJfZW5kX2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS5yZWdpc3Rlcl9lbmRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfZW5kX2RhdGU6IGRhdGV9KX19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5Sb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwidm90ZV9zdGFydF9kYXRlXCIgY29udHJvbElkPVwidm90ZV9zdGFydF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlX3N0YXJ0X2RhdGU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzZWxlY3RlZD17dGhpcy5zdGF0ZS52b3RlX3N0YXJ0X2RhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2RhdGUgPT4ge3RoaXMuc2V0U3RhdGUoe3ZvdGVfc3RhcnRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPVwidm90ZV9lbmRfZGF0ZVwiICBjb250cm9sSWQ9XCJ2b3RlX2VuZF9kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlX2VuZF9kYXRlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudm90ZV9lbmRfZGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZGF0ZSA9PiB7dGhpcy5zZXRTdGF0ZSh7dm90ZV9lbmRfZGF0ZTogZGF0ZX0pfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9XCJyZXF1aXJlbWVudFwiIGNvbnRyb2xJZD1cInJlcXVpcmVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD52b3RlIHJlcXVpcmVtZW50PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVxdWlyZW1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXF1aXJlbWVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVxdWlyZW1lbnQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNldHRpbmdcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbiA6XCJhdXRvXCIsbWFyZ2luVG9wIDpcIjMlXCJ9fSBvblN1Ym1pdCA9IHt0aGlzLnN1Ym1pdF9vcHRpb259PlxyXG4gICAgICAgIDxoMj5TZXQgb3B0aW9ucyBvbmUgYnkgb25lPC9oMj5cclxuICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+b3B0aW9uPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLm9wdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyp0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PjxoMz57b3B0aW9ufTwvaDM+KSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm9wdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vcHRpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtvcHRpb246ZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIFNldCBvcHRpb25zXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluOyJdLCJzb3VyY2VSb290IjoiIn0=