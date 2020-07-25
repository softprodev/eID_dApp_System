webpackHotUpdate("static\\development\\pages\\Vote\\vote.js",{

/***/ "./pages/Vote/vote.js":
/*!****************************!*\
  !*** ./pages/Vote/vote.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");
/* harmony import */ var _ethereum_Vote_registry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ethereum/Vote/registry */ "./ethereum/Vote/registry.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var show_btn = function show_btn(stage) {
  if (stage != 0) return null; //console.log(stage);

  return __jsx("div", null, "this vote still needs setting please wait");
};

var Register_btn = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Register_btn, _Component);

  var _super = _createSuper(Register_btn);

  //const register_btn =function ( stage ){
  function Register_btn(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Register_btn);

    _this = _super.call(this, props);
    _this.state = {
      registry_addr: ""
    };
    _this.register = _this.register.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Register_btn, [{
    key: "register",
    value: function () {
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var accounts, Vote_event, hash;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);

              case 5:
                Vote_event = _context.sent;
                hash = CryptoJS.SHA3("human", {
                  outputLength: 256
                }).toString(); //console.log(web3.utils.fromAscii(hash));

                _context.prev = 7;
                _context.next = 10;
                return Vote_event.methods.register('0x' + hash, this.state.registry_addr).send({
                  from: accounts[0]
                });

              case 10:
                _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                alert(_context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //console.log(this.props.stage );
      if (this.props.stage != 1) return null;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: "text",
        placeholder: "enter your registry number",
        className: "mr-sm-2",
        value: this.state.registry_addr,
        onChange: function onChange(event) {
          return _this2.setState({
            registry_addr: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        style: {
          margin: "2%"
        },
        onClick: this.register
      }, "register"));
    }
  }]);

  return Register_btn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var Vote_btn = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Vote_btn, _Component2);

  var _super2 = _createSuper(Vote_btn);

  //const vote_btn =function (stage ){
  function Vote_btn(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Vote_btn);

    _this3 = _super2.call(this, props);
    _this3.state = {
      vote_value: 0
    };
    _this3.go_vote = _this3.go_vote.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Vote_btn, [{
    key: "go_vote",
    value: function () {
      var _go_vote = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.vote_value); //const accounts = await web3.eth.getAccounts();
                //await this.props.Vote_event.methods.register().send({from:accounts[0]});

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function go_vote() {
        return _go_vote.apply(this, arguments);
      }

      return go_vote;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.stage != 2) return null;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        },
        onSubmit: this.go_vote
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        as: "select",
        size: "lg",
        onChange: function onChange(event) {
          return _this4.setState({
            vote_value: event.target.value
          });
        }
      }, __jsx("option", null, "\u8ACB\u9078\u64C7"), this.props.ops.map(function (op, index) {
        return __jsx("option", {
          value: index
        }, op);
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        style: {
          margin: "2%"
        },
        type: "submit"
      }, "Vote")));
    }
  }]);

  return Vote_btn;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

;

var Votesss = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Votesss, _Component3);

  var _super3 = _createSuper(Votesss);

  function Votesss(props) {
    var _this5$state;

    var _this5;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Votesss);

    _this5 = _super3.call(this, props);
    _this5.state = (_this5$state = {
      search: "",
      loading: false,
      loading2: false,
      stage: ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "search", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "errorMessage", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "html_test", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_this5$state, "mailbox_addr", ''), _this5$state); //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  

    _this5.refresh_search = _this5.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this5));
    return _this5;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Votesss, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossOrigin: "anonymous"
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "mr-auto",
        style: {
          width: "50%"
        }
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/home/" + this.props.mb_addr
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/status/" + this.props.mb_addr + "/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Status")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/Vote/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout")))), __jsx("div", {
        style: {
          width: '100%'
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        inline: true,
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        }
      }, __jsx("div", {
        style: {
          color: "black"
        }
      }, " inesrt your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.search,
        onChange: function onChange(event) {
          return _this6.setState({
            search: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        onClick: this.refresh_search
      }, "Search")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"], {
        style: {
          width: '33%',
          margin: 'auto',
          marginTop: "2%"
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Title, null, "Election"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "voter address : ", this.props.address), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["Card"].Text, null, this.props.stage_str), show_btn(this.props.stage), __jsx(Register_btn, {
        stage: this.props.stage,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      }), __jsx(Vote_btn, {
        stage: this.props.stage,
        ops: this.props.options,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      })))), __jsx("div", {
        style: {
          width: '100%'
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(props) {
        var _props$query, address, mb_addr, Vote_event, stage, option_length, stage_str, options, index, temp;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                _context3.next = 3;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

              case 3:
                Vote_event = _context3.sent;
                _context3.next = 6;
                return Vote_event.methods.return_stage().call();

              case 6:
                stage = _context3.sent;
                _context3.next = 9;
                return Vote_event.methods.return_options_length().call();

              case 9:
                option_length = _context3.sent;
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                options = [];
                index = 0;

              case 13:
                if (!(index < option_length)) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 16;
                return Vote_event.methods.return_options(index).call();

              case 16:
                temp = _context3.sent;
                options.push(temp);

              case 18:
                index++;
                _context3.next = 13;
                break;

              case 21:
                return _context3.abrupt("return", {
                  address: address,
                  Vote_event: Vote_event,
                  stage: stage,
                  option_length: option_length,
                  stage_str: stage_str,
                  options: options,
                  mb_addr: mb_addr
                });

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Votesss;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Votesss);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwicmVnaXN0ZXIiLCJiaW5kIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ2b3RlIiwiYWRkcmVzcyIsIlZvdGVfZXZlbnQiLCJoYXNoIiwiQ3J5cHRvSlMiLCJTSEEzIiwib3V0cHV0TGVuZ3RoIiwidG9TdHJpbmciLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiQ29tcG9uZW50IiwiVm90ZV9idG4iLCJ2b3RlX3ZhbHVlIiwiZ29fdm90ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm9wcyIsIm1hcCIsIm9wIiwiaW5kZXgiLCJWb3Rlc3NzIiwic2VhcmNoIiwibG9hZGluZyIsImxvYWRpbmcyIiwicmVmcmVzaF9zZWFyY2giLCJjb2xvciIsInN0YWdlX3N0ciIsIm9wdGlvbnMiLCJxdWVyeSIsInJldHVybl9zdGFnZSIsImNhbGwiLCJyZXR1cm5fb3B0aW9uc19sZW5ndGgiLCJvcHRpb25fbGVuZ3RoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLEtBQVYsRUFBaUI7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLENBQWIsRUFBaUIsT0FBTyxJ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OztBQUFiSSxvQjtBQUNKUCx1QkFBTyxDQUFDUSxJQUFSLENBQWFELElBQWI7OztBQUZ1Q2YscUJBQUssRTs7Ozs7a0RBSTFDO0FBQUMvQix5QkFBTyxFQUFQQSxPQUFEO0FBQVNDLDRCQUFVLEVBQVZBLFVBQVQ7QUFBb0JiLHVCQUFLLEVBQUxBLEtBQXBCO0FBQTBCd0QsK0JBQWEsRUFBYkEsYUFBMUI7QUFBd0NOLDJCQUFTLEVBQVRBLFNBQXhDO0FBQWtEQyx5QkFBTyxFQUFQQSxPQUFsRDtBQUEwRDNCLHlCQUFPLEVBQVBBO0FBQTFELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENRUSwrQzs7QUFzRlBZLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxWb3RlXFx2b3RlLmpzLmZmOThjZGQ3YjhhZjE5OTUwOWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnR7TGlua31mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHtSb3V0ZXJ9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHZvdGUgZnJvbSAnLi4vLi4vZXRoZXJldW0vVm90ZS92b3RlJztcclxuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvcmVnaXN0cnknO1xyXG5cclxuY29uc3Qgc2hvd19idG4gPSBmdW5jdGlvbiggc3RhZ2UgKXtcclxuICAgIGlmIChzdGFnZSAhPSAwICkgcmV0dXJuIG51bGw7XHJcbiAgICAvL2NvbnNvbGUubG9nKHN0YWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj50aGlzIHZvdGUgc3RpbGwgbmVlZHMgc2V0dGluZyBwbGVhc2Ugd2FpdDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuY2xhc3MgUmVnaXN0ZXJfYnRuIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4vL2NvbnN0IHJlZ2lzdGVyX2J0biA9ZnVuY3Rpb24gKCBzdGFnZSApe1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICByZWdpc3RyeV9hZGRyOlwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgcmVnaXN0ZXIoKXtcclxuICAgICAgICAgIC8vMHg0MjMwOWY5MjQyMzdCYWM2NjJBZjY0OTY1QTJlZkFGOGMwOGZFNGQyXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoXCJodW1hblwiLCB7IG91dHB1dExlbmd0aDogMjU2IH0pLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWIzLnV0aWxzLmZyb21Bc2NpaShoYXNoKSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmVnaXN0ZXIoJzB4JytoYXNoLHRoaXMuc3RhdGUucmVnaXN0cnlfYWRkcikuc2VuZCh7ZnJvbTphY2NvdW50c1swXX0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS92b3RlLyR7dGhpcy5wcm9wcy5tYl9hZGRyfS8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0YWdlICk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGFnZSAhPSAxICkgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIHJlZ2lzdHJ5IG51bWJlclwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0cnlfYWRkcn0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHtyZWdpc3RyeV9hZGRyOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wic3R5bGU9e3ttYXJnaW4gOlwiMiVcIn19IG9uQ2xpY2s9e3RoaXMucmVnaXN0ZXJ9PnJlZ2lzdGVyPC9CdXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBWb3RlX2J0biBleHRlbmRzIENvbXBvbmVudHtcclxuLy9jb25zdCB2b3RlX2J0biA9ZnVuY3Rpb24gKHN0YWdlICl7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIHZvdGVfdmFsdWU6MFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nb192b3RlID0gdGhpcy5nb192b3RlLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIGFzeW5jIGdvX3ZvdGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZvdGVfdmFsdWUpO1xyXG4gICAgICAgIC8vY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIC8vYXdhaXQgdGhpcy5wcm9wcy5Wb3RlX2V2ZW50Lm1ldGhvZHMucmVnaXN0ZXIoKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgIGlmICh0aGlzLnByb3BzLnN0YWdlICE9IDIgKSByZXR1cm4gbnVsbDtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybSBzdHlsZT17e3dpZHRoOiczMyUnLCBtYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wIDogXCIyJVwifX0gb25TdWJtaXQ9e3RoaXMuZ29fdm90ZX0+XHJcbiAgICAgICAgPEZvcm0uR3JvdXAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwic2VsZWN0XCIgc2l6ZT1cImxnXCIgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3ZvdGVfdmFsdWU6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7oq4vpgbjmk4c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wcy5tYXAoKG9wLCBpbmRleCkgPT4gPG9wdGlvbiB2YWx1ZT17aW5kZXh9PntvcH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgey8qPG9wdGlvbj5Lb3JlYW4gRmlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Eb25hbGQgVHJ1bXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+WGkgREFEQTwvb3B0aW9uPiovfVxyXG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJzdHlsZT17e21hcmdpbiA6XCIyJVwifX0gdHlwZT1cInN1Ym1pdFwiPlZvdGU8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY2xhc3MgVm90ZXNzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICBzZWFyY2g6XCJcIixcclxuICAgICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgIGxvYWRpbmcyOiBmYWxzZSxcclxuICAgICAgICAgIHN0YWdlOicnLFxyXG4gICAgICAgICAgc2VhcmNoOicnLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnLFxyXG4gICAgICAgICAgaHRtbF90ZXN0Om51bGwsXHJcbiAgICAgICAgICBtYWlsYm94X2FkZHI6JydcclxuICAgICAgICB9O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOy8v5pO35Y+W6YCZ5YCL57ay5Z2A55qEdXJs6YKjcGFydOeahGFkZHJlc3MoZnJvbSByb3V0ZXM/PykgIFxyXG4gICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdHthZGRyZXNzLCBtYl9hZGRyfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPWF3YWl0IHZvdGUoYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3N0YWdlKCkuY2FsbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbl9sZW5ndGggPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnNfbGVuZ3RoKCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlX3N0ciA9ICAoc3RhZ2UgPT0gMCk/XCJzdGFnZSA6IFNldHVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAxKT9cInN0YWdlIDogUmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDIpP1wic3RhZ2UgOiBWb3RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAzKT9cInN0YWdlIDogVGFsbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDQpP1wic3RhZ2UgOiBGaW5pc2hcIjpcInN0YWdlIDogU2V0dXBcIjtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25fbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9vcHRpb25zKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJue2FkZHJlc3MsVm90ZV9ldmVudCxzdGFnZSxvcHRpb25fbGVuZ3RoLHN0YWdlX3N0cixvcHRpb25zLG1iX2FkZHJ9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9jcnlwdG8tanMvMy4xLjktMS9jcnlwdG8tanMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wic3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kID5Wb3RlPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBzdHlsZT17e3dpZHRoOlwiNTAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL2hvbWUvXCIrIHRoaXMucHJvcHMubWJfYWRkciB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtcIi9Wb3RlL3N0YXR1cy9cIit0aGlzLnByb3BzLm1iX2FkZHIrXCIvXCIrdGhpcy5wcm9wcy5hZGRyZXNzfSA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5TdGF0dXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XHJcblxyXG4gICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3IgOiBcImJsYWNrXCJ9fSA+IGluZXNydCB5b3VyIHZvdGUgY29udHJhY3QgYWRkcmVzcyBoZXJlICAtJmd0OyAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3NlYXJjaDpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5yZWZyZXNoX3NlYXJjaH0+U2VhcmNoPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzMzJScgLCBtYXJnaW46ICdhdXRvJyAsIG1hcmdpblRvcCA6IFwiMiVcIn19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxlY3Rpb248L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj52b3RlciBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgdGhlIGxhdGVzdCAyMDIwIHByZXNpZGVudGlhbCBwb2xscyBhbmQgaGVhZC10by1oZWFkIG1hdGNoLXVwIGJldHdlZW4gSm9lIEJpZGVuIGFuZCBEb25hbGQgVHJ1bXAuIEZvciBtb3JlIGluZm9ybWF0aW9uLCB2aWV3IGNubi5jb20vZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAge3Nob3dfYnRuKHRoaXMucHJvcHMuc3RhZ2UpfVxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyX2J0biBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvUmVnaXN0ZXJfYnRuPlxyXG4gICAgICAgICAgICAgICAgPFZvdGVfYnRuIHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gb3BzID0ge3RoaXMucHJvcHMub3B0aW9uc30gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9Wb3RlX2J0bj5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdGVzc3M7Il0sInNvdXJjZVJvb3QiOiIifQ==