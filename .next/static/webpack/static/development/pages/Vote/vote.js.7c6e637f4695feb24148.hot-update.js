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
        var accounts, Vote_event, requirements, hash;
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
                _context.next = 8;
                return Vote_event.methods.requirement();

              case 8:
                requirements = _context.sent;
                console.log(requirements);
                hash = CryptoJS.SHA3("human", {
                  outputLength: 256
                }).toString(); //console.log(web3.utils.fromAscii(hash));

                _context.prev = 11;
                _context.next = 14;
                return Vote_event.methods.register('0x' + hash, this.state.registry_addr).send({
                  from: accounts[0]
                });

              case 14:
                _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](11);
                alert(_context.t0.message);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 17]]);
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
        var accounts, Vote_event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.vote_value);
                _context2.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                _context2.next = 6;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);

              case 6:
                Vote_event = _context2.sent;
                _context2.prev = 7;
                _context2.next = 10;
                return Vote_event.methods.can_vote(this.state.vote_value).send({
                  from: accounts[0]
                });

              case 10:
                _routes__WEBPACK_IMPORTED_MODULE_10__["Router"].pushRoute("/Vote/vote/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](7);
                alert(_context2.t0.message);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 13]]);
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
        }
      }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Group, null, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_13__["default"].Control, {
        as: "select",
        size: "lg",
        onChange: function onChange(event) {
          return _this4.setState({
            vote_value: event.target.value
          });
        }
      }, this.props.ops.map(function (op, index) {
        return __jsx("option", {
          value: index
        }, op);
      }))), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        variant: "outline-info",
        style: {
          margin: "2%"
        },
        onClick: this.go_vote
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3ZvdGUuanMiXSwibmFtZXMiOlsic2hvd19idG4iLCJzdGFnZSIsIlJlZ2lzdGVyX2J0biIsInByb3BzIiwic3RhdGUiLCJyZWdpc3RyeV9hZGRyIiwicmVnaXN0ZXIiLCJiaW5kIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ2b3RlIiwiYWRkcmVzcyIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwicmVxdWlyZW1lbnQiLCJyZXF1aXJlbWVudHMiLCJjb25zb2xlIiwibG9nIiwiaGFzaCIsIkNyeXB0b0pTIiwiU0hBMyIsIm91dHB1dExlbmd0aCIsInRvU3RyaW5nIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtYl9hZGRyIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiQ29tcG9uZW50IiwiVm90ZV9idG4iLCJ2b3RlX3ZhbHVlIiwiZ29fdm90ZSIsImNhbl92b3RlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJvcHMiLCJtYXAiLCJvcCIsImluZGV4IiwiVm90ZXNzcyIsInNlYXJjaCIsImxvYWRpbmciLCJsb2FkaW5nMiIsInJlZnJlc2hfc2VhcmNoIiwiY29sb3IiLCJzdGFnZV9zdHIiLCJvcHRpb25zIiwicXVlcnkiLCJyZXR1cm5fc3RhZ2UiLCJjYWxsIiwicmV0dXJuX29wdGlvbnNfbGVuZ3RoIiwib3B0aW9uX2xlbmd0aCIsInJldHVybl9vcHRpb25zIiwidGVtcCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxLQUFWLEVBQWlC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QUQsQzs7O0FBQXRCQywwQjs7dUJBQ2NBLFVBQVUsQ0FBQ0MsT0FBWCxDQUFtQjBDLFlBQW5CLEdBQWtDQyxJQUFsQyxFOzs7QUFBZHpELHFCOzt1QkFFc0JhLFVBQVUsQ0FBQ0MsT0FBWCxDQUFtQjRDLHFCQUFuQixHQUEyQ0QsSUFBM0MsRTs7O0FBQXRCRSw2QjtBQUNBTix5QixHQUFjckQsS0FBSyxJQUFJLENBQVYsR0FBYSxlQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsa0JBQWIsR0FDQ0EsS0FBSyxJQUFJLENBQVYsR0FBYSxjQUFiLEdBQ0NBLEtBQUssSUFBSSxDQUFWLEdBQWEsZUFBYixHQUNDQSxLQUFLLElBQUksQ0FBVixHQUFhLGdCQUFiLEdBQThCLGU7QUFDN0NzRCx1QixHQUFVLEU7QUFDTFIscUIsR0FBUSxDOzs7c0JBQUdBLEtBQUssR0FBR2EsYTs7Ozs7O3VCQUNQOUMsVUFBVSxDQUFDQyxPQUFYLENBQW1COEMsY0FBbkIsQ0FBa0NkLEtBQWxDLEVBQXlDVyxJQUF6QyxFOzs7QUFBYkksb0I7QUFDSlAsdUJBQU8sQ0FBQ1EsSUFBUixDQUFhRCxJQUFiOzs7QUFGdUNmLHFCQUFLLEU7Ozs7O2tEQUkxQztBQUFDbEMseUJBQU8sRUFBUEEsT0FBRDtBQUFTQyw0QkFBVSxFQUFWQSxVQUFUO0FBQW9CYix1QkFBSyxFQUFMQSxLQUFwQjtBQUEwQjJELCtCQUFhLEVBQWJBLGFBQTFCO0FBQXdDTiwyQkFBUyxFQUFUQSxTQUF4QztBQUFrREMseUJBQU8sRUFBUEEsT0FBbEQ7QUFBMEQxQix5QkFBTyxFQUFQQTtBQUExRCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhDUVEsK0M7O0FBc0ZQVyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcVm90ZVxcdm90ZS5qcy43YzZlNjM3ZjQ2OTVmZWIyNDE0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7Um91dGVyfWZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB2b3RlIGZyb20gJy4uLy4uL2V0aGVyZXVtL1ZvdGUvdm90ZSc7XHJcbmltcG9ydCByZWdpc3RyeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3JlZ2lzdHJ5JztcclxuXHJcbmNvbnN0IHNob3dfYnRuID0gZnVuY3Rpb24oIHN0YWdlICl7XHJcbiAgICBpZiAoc3RhZ2UgIT0gMCApIHJldHVybiBudWxsO1xyXG4gICAgLy9jb25zb2xlLmxvZyhzdGFnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+dGhpcyB2b3RlIHN0aWxsIG5lZWRzIHNldHRpbmcgcGxlYXNlIHdhaXQ8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbmNsYXNzIFJlZ2lzdGVyX2J0biBleHRlbmRzIENvbXBvbmVudHtcclxuLy9jb25zdCByZWdpc3Rlcl9idG4gPWZ1bmN0aW9uICggc3RhZ2UgKXtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgICAgcmVnaXN0cnlfYWRkcjpcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyID0gdGhpcy5yZWdpc3Rlci5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGFzeW5jIHJlZ2lzdGVyKCl7XHJcbiAgICAgICAgICAvLzB4NDIzMDlmOTI0MjM3QmFjNjYyQWY2NDk2NUEyZWZBRjhjMDhmRTRkMlxyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgbGV0IHJlcXVpcmVtZW50cyA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXF1aXJlbWVudCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVpcmVtZW50cyk7XHJcbiAgICAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEzKFwiaHVtYW5cIiwgeyBvdXRwdXRMZW5ndGg6IDI1NiB9KS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cod2ViMy51dGlscy5mcm9tQXNjaWkoaGFzaCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJlZ2lzdGVyKCcweCcraGFzaCx0aGlzLnN0YXRlLnJlZ2lzdHJ5X2FkZHIpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5zdGFnZSApO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhZ2UgIT0gMSApIHJldHVybiBudWxsO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciByZWdpc3RyeSBudW1iZXJcIiBjbGFzc05hbWU9XCJtci1zbS0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlZ2lzdHJ5X2FkZHJ9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0cnlfYWRkcjpldmVudC50YXJnZXQudmFsdWV9KX0gLz5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cInN0eWxlPXt7bWFyZ2luIDpcIjIlXCJ9fSBvbkNsaWNrPXt0aGlzLnJlZ2lzdGVyfT5yZWdpc3RlcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIH1cclxufTtcclxuY2xhc3MgVm90ZV9idG4gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgICAgICAgIHZvdGVfdmFsdWU6MFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nb192b3RlID0gdGhpcy5nb192b3RlLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIGFzeW5jIGdvX3ZvdGUoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZvdGVfdmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuY2FuX3ZvdGUodGhpcy5zdGF0ZS52b3RlX3ZhbHVlKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdfSk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3ZvdGUvJHt0aGlzLnByb3BzLm1iX2FkZHJ9LyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGFnZSAhPSAyICkgcmV0dXJuIG51bGw7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3t3aWR0aDonMzMlJywgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcCA6IFwiMiVcIn19ID5cclxuICAgICAgICA8Rm9ybS5Hcm91cCA+XHJcbiAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgYXM9XCJzZWxlY3RcIiBzaXplPVwibGdcIiAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dm90ZV92YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm9wcy5tYXAoKG9wLCBpbmRleCkgPT4gPG9wdGlvbiB2YWx1ZT17aW5kZXh9PntvcH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgey8qPG9wdGlvbj5Lb3JlYW4gRmlzaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Eb25hbGQgVHJ1bXA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+WGkgREFEQTwvb3B0aW9uPiovfVxyXG4gICAgICAgICAgICA8L0Zvcm0uQ29udHJvbD5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCJzdHlsZT17e21hcmdpbiA6XCIyJVwifX0gIG9uQ2xpY2s9e3RoaXMuZ29fdm90ZX0+Vm90ZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jbGFzcyBWb3Rlc3NzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaDpcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgc3RhZ2U6JycsXHJcbiAgICAgICAgICBzZWFyY2g6JycsXHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6JycsXHJcbiAgICAgICAgICBodG1sX3Rlc3Q6bnVsbCxcclxuICAgICAgICAgIG1haWxib3hfYWRkcjonJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIC8vY29uc29sZS5sb2cocHJvcHMucXVlcnkuYWRkcmVzcyk7Ly/mk7flj5bpgJnlgIvntrLlnYDnmoR1cmzpgqNwYXJ055qEYWRkcmVzcyhmcm9tIHJvdXRlcz8/KSAgXHJcbiAgICAgIHRoaXMucmVmcmVzaF9zZWFyY2ggPSB0aGlzLnJlZnJlc2hfc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsIG1iX2FkZHJ9ID0gcHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgVm90ZV9ldmVudCA9YXdhaXQgdm90ZShhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdGFnZSA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fc3RhZ2UoKS5jYWxsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhZ2Vfc3RyID0gIChzdGFnZSA9PSAwKT9cInN0YWdlIDogU2V0dXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDEpP1wic3RhZ2UgOiBSZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gMik/XCJzdGFnZSA6IFZvdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDMpP1wic3RhZ2UgOiBUYWxseVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhZ2UgPT0gNCk/XCJzdGFnZSA6IEZpbmlzaFwiOlwic3RhZ2UgOiBTZXR1cFwiO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57YWRkcmVzcyxWb3RlX2V2ZW50LHN0YWdlLG9wdGlvbl9sZW5ndGgsc3RhZ2Vfc3RyLG9wdGlvbnMsbWJfYWRkcn07XHJcbiAgICB9XHJcbiAgICByZWZyZXNoX3NlYXJjaCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9IFwiXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL1ZvdGUvdm90ZS8ke3RoaXMuc3RhdGUuc2VhcmNofWApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2NyeXB0by1qcy8zLjEuOS0xL2NyeXB0by1qcy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIHN0eWxlPXt7d2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaG9tZS9cIisgdGhpcy5wcm9wcy5tYl9hZGRyIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvc3RhdHVzL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlN0YXR1czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9pbmRleFwiIH0gID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PkxvZ291dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cclxuXHJcbiAgICAgICAgPEZvcm0gaW5saW5lIHN0eWxlPXt7IHdpZHRoOiAnMzMlJyAsIG1hcmdpbjogJ2F1dG8nICwgbWFyZ2luVG9wIDogXCIyJVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvciA6IFwiYmxhY2tcIn19ID4gaW5lc3J0IHlvdXIgdm90ZSBjb250cmFjdCBhZGRyZXNzIGhlcmUgIC0mZ3Q7ICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfSAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hfc2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMzMlJyAsIG1hcmdpbjogJ2F1dG8nICwgbWFyZ2luVG9wIDogXCIyJVwifX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5FbGVjdGlvbjwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnZvdGVyIGFkZHJlc3MgOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyB0aGUgbGF0ZXN0IDIwMjAgcHJlc2lkZW50aWFsIHBvbGxzIGFuZCBoZWFkLXRvLWhlYWQgbWF0Y2gtdXAgYmV0d2VlbiBKb2UgQmlkZW4gYW5kIERvbmFsZCBUcnVtcC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpZXcgY25uLmNvbS9lbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICB7c2hvd19idG4odGhpcy5wcm9wcy5zdGFnZSl9XHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJfYnRuIHN0YWdlID17dGhpcy5wcm9wcy5zdGFnZX0gYWRkcmVzcyA9IHt0aGlzLnByb3BzLmFkZHJlc3N9IG1iX2FkZHI9e3RoaXMucHJvcHMubWJfYWRkcn0+PC9SZWdpc3Rlcl9idG4+XHJcbiAgICAgICAgICAgICAgICA8Vm90ZV9idG4gc3RhZ2UgPXt0aGlzLnByb3BzLnN0YWdlfSBvcHMgPSB7dGhpcy5wcm9wcy5vcHRpb25zfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT48L1ZvdGVfYnRuPlxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm90ZXNzczsiXSwic291cmNlUm9vdCI6IiJ9