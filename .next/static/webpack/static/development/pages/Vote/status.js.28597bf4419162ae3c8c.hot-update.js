webpackHotUpdate("static\\development\\pages\\Vote\\status.js",{

/***/ "./pages/Vote/status.js":
/*!******************************!*\
  !*** ./pages/Vote/status.js ***!
  \******************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-shadow-scroll */ "./node_modules/react-shadow-scroll/dist/index.js");
/* harmony import */ var react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_shadow_scroll__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ethereum/Vote/vote */ "./ethereum/Vote/vote.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var Status = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Status, _Component);

  var _super = _createSuper(Status);

  function Status(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Status);

    _this = _super.call(this, props);
    _this.state = {
      search: "",
      register: "",
      register_answer: "",
      loading: false,
      loading2: false,
      errorMessage: ''
    };
    _this.refresh_search = _this.refresh_search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.search_register = _this.search_register.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Status, [{
    key: "refresh_search",
    value: function refresh_search() {
      if (this.state.search != "") _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/status/".concat(this.state.search)); //console.log(this.props.address);
    }
  }, {
    key: "search_register",
    value: function search_register() {
      if (this.state.register == "") {
        this.setState({
          register_answer: ""
        });
        return;
      }

      for (var index = 0; index < this.props.voter_list.length; index++) {
        if (this.state.register == this.props.voter_list[index]) {
          this.setState({
            register_answer: "Already Registered !"
          });
          this.setState({
            register: ""
          });
          return;
        }
      } //console.log(this.state.register_answer);


      this.setState({
        register_answer: "Voter not found !"
      });
      this.setState({
        register: ""
      }); //this.setState({register_answer:""});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
        crossorigin: "anonymous"
      }), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        bg: "dark",
        variant: "dark",
        style: {
          width: "100%"
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"].Brand, null, "Vote"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "mr-auto"
      }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/home/" + this.props.mb_addr
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Home")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/vote/" + this.props.mb_addr + "/" + this.props.address
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Vote")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        route: "/Vote/index"
      }, __jsx("a", {
        style: {
          color: "white",
          width: "100px"
        }
      }, "Logout"))), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true,
        style: {
          margin: "auto"
        }
      }, __jsx("div", {
        style: {
          color: "white"
        }
      }, " insert your vote contract address here  ->   "), __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      }, "Search"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%',
          height: '30%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Eligible Voters"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "voter quantity : ", this.props.voter_list.length), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        inline: true,
        style: {
          margin: "auto"
        }
      }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "text",
        placeholder: "Search",
        className: "mr-sm-2",
        value: this.state.register,
        onChange: function onChange(event) {
          return _this2.setState({
            register: event.target.value
          });
        }
      }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "outline-info",
        onClick: this.search_register
      }, "Search"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted",
        style: {
          marginTop: "1%",
          margin: "2%"
        }
      }, this.state.register_answer)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true,
        style: {
          'height': '200px',
          "width": "100%",
          'overflowY': 'scroll',
          'display': 'block'
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Voting Address"), __jsx("th", null, "Register or not"))), __jsx("tbody", null, __jsx(Voter_listQQ, {
        list: this.props.voter_list
      }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting Illustration"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Vote address : ", this.props.address), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Text, null, "View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true,
        style: {
          'height': '200px',
          "width": "100%",
          'overflowY': 'scroll',
          'display': 'block'
        }
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Start time"), __jsx("th", null, "End time"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", null, "Register time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[0] : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[1] : "")), __jsx("tr", null, __jsx("th", null, "Vote time"), __jsx("th", null, this.props.time !== undefined ? this.props.time[2] : ""), __jsx("th", null, this.props.time !== undefined ? this.props.time[3] : "")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Voting result"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "The Vote result is shown below"), __jsx(Vote_result, {
        results: this.props.options,
        stage: this.props.stage,
        winner: this.props.winner,
        stage_str: this.props.stage_str,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
        style: {
          width: '46%',
          margin: '1.5%'
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Title, null, "Retally"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "You can retally the vote for assuring the result"), __jsx(Retally, {
        stage: this.props.stage,
        address: this.props.address,
        mb_addr: this.props.mb_addr
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var _props$query, address, mb_addr, Vote_event, stage, option_length, result, voter_list, _winner, time, correct_time, i, a, options, stage_str, index, temp, arr;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$query = props.query, address = _props$query.address, mb_addr = _props$query.mb_addr;
                console.log(address, mb_addr);
                _context.next = 4;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(address);

              case 4:
                Vote_event = _context.sent;
                console.log(Vote_event);
                _context.next = 8;
                return Vote_event.methods.return_stage().call();

              case 8:
                stage = _context.sent;
                console.log(stage);
                _context.next = 12;
                return Vote_event.methods.return_options_length().call();

              case 12:
                option_length = _context.sent;
                console.log(option_length);
                _context.next = 16;
                return Vote_event.methods.return_result().call();

              case 16:
                result = _context.sent;
                console.log(result); //console.log(Vote_event);

                _context.next = 20;
                return Vote_event.methods.return_msgsender_voter_list().call();

              case 20:
                voter_list = _context.sent;
                console.log(voter_list);

                if (!(stage == 4)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 25;
                return Vote_event.methods.return_winner().call();

              case 25:
                _winner = _context.sent;
                console.log(_winner);

              case 27:
                _context.next = 29;
                return Vote_event.methods.return_time().call();

              case 29:
                time = _context.sent;
                correct_time = [];
                i = 0;

              case 32:
                if (!(i < 4)) {
                  _context.next = 42;
                  break;
                }

                console.log(time[i]);
                _context.next = 36;
                return new Date(time[i] * 1);

              case 36:
                a = _context.sent;
                console.log(a.toString());
                correct_time.push(a.toString());

              case 39:
                i++;
                _context.next = 32;
                break;

              case 42:
                console.log(correct_time);
                time = correct_time;
                options = [];
                stage_str = stage == 0 ? "stage : Setup" : stage == 1 ? "stage : Register" : stage == 2 ? "stage : Vote" : stage == 3 ? "stage : Tally" : stage == 4 ? "stage : Finish" : "stage : Setup";
                index = 0;

              case 47:
                if (!(index < option_length)) {
                  _context.next = 59;
                  break;
                }

                _context.next = 50;
                return Vote_event.methods.return_options(index).call();

              case 50:
                temp = _context.sent;
                arr = [];
                arr[0] = (index + 1).toString();
                arr[1] = temp;
                arr[2] = result[index];
                options.push(arr);

              case 56:
                index++;
                _context.next = 47;
                break;

              case 59:
                if (!(stage == 4)) {
                  _context.next = 63;
                  break;
                }

                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list,
                  winner: winner,
                  time: time
                });

              case 63:
                return _context.abrupt("return", {
                  address: address,
                  mb_addr: mb_addr,
                  stage: stage,
                  result: result,
                  options: options,
                  stage_str: stage_str,
                  voter_list: voter_list,
                  time: time
                });

              case 64:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Retally = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Retally, _Component2);

  var _super2 = _createSuper(Retally);

  function Retally(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Retally);

    _this3 = _super2.call(this, props);
    _this3.state = {};
    _this3.go_tally = _this3.go_tally.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Retally, [{
    key: "go_tally",
    value: function () {
      var _go_tally = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var accounts, Vote_event;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_17__["default"].eth.getAccounts();

              case 2:
                accounts = _context2.sent;
                _context2.next = 5;
                return Object(_ethereum_Vote_vote__WEBPACK_IMPORTED_MODULE_18__["default"])(this.props.address);

              case 5:
                Vote_event = _context2.sent;
                _context2.prev = 6;
                _context2.next = 9;
                return Vote_event.methods.compute().send({
                  from: accounts[0]
                });

              case 9:
                _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/Vote/status/".concat(this.props.mb_addr, "/").concat(this.props.address));
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](6);
                alert(_context2.t0.message);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 12]]);
      }));

      function go_tally() {
        return _go_tally.apply(this, arguments);
      }

      return go_tally;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.props.stage <= 2) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "primary",
        size: "lg",
        style: {
          margin: "auto"
        },
        onClick: this.go_tally
      }, "Retally button"), ' ');
    }
  }]);

  return Retally;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Vote_result = /*#__PURE__*/function (_Component3) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vote_result, _Component3);

  var _super3 = _createSuper(Vote_result);

  function Vote_result() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Vote_result);

    return _super3.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Vote_result, [{
    key: "render",
    //const vote_btn =function (stage ){
    value: function render() {
      //console.log(this.props.results);
      if (this.props.stage < 3) return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h3", null, "Have not reach the stage can Tally"), __jsx("h3", null, "Please wait for a while"));else return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, "Elected Candidate : ", this.props.stage == 4 ? this.props.winner : "wait for tally", " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"].Subtitle, {
        className: "mb-2 text-muted"
      }, this.props.stage_str), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        responsive: true
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Option's Name"), __jsx("th", null, "Totol votes to the option"))), __jsx("tbody", null, this.props.results.map(function (result) {
        return __jsx("tr", null, __jsx(Vote_result_Unit, {
          details: result
        }));
      }))));
    }
  }]);

  return Vote_result;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;

var Vote_result_Unit = /*#__PURE__*/function (_Component4) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vote_result_Unit, _Component4);

  var _super4 = _createSuper(Vote_result_Unit);

  function Vote_result_Unit() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Vote_result_Unit);

    return _super4.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Vote_result_Unit, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.details.map(function (detail) {
        return __jsx("td", null, detail);
      }));
    }
  }]);

  return Vote_result_Unit;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Voter_listQQ = /*#__PURE__*/function (_Component5) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Voter_listQQ, _Component5);

  var _super5 = _createSuper(Voter_listQQ);

  function Voter_listQQ() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Voter_listQQ);

    return _super5.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Voter_listQQ, [{
    key: "render",
    value: function render() {
      //console.log(this.props.list);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.list.map(function (item, index) {
        return __jsx("tr", null, __jsx("td", null, index + 1), __jsx("td", null, item), __jsx("td", null, "Yes"));
      }));
    }
  }]);

  return Voter_listQQ;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Status);
/**暫時性垃圾
 * <Table responsive style={{'height': '200px',"width":"50%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>items</th>
                        <th>link</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>register or not</td>
                        <td>True</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Status</td>
                        <td>Vote</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Candidate 1</td>
                        <td><Card.Link href="#">policy</Card.Link></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Wb3RlL3N0YXR1cy5qcyJdLCJuYW1lcyI6WyJTdGF0dXMiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVnaXN0ZXIiLCJyZWdpc3Rlcl9hbnN3ZXIiLCJsb2FkaW5nIiwibG9hZGluZzIiLCJlcnJvck1lc3NhZ2UiLCJyZWZyZXNoX3NlYXJjaCIsImJpbmQiLCJzZWFyY2hfcmVnaXN0ZXIiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJzZXRTdGF0ZSIsImluZGV4Iiwidm90ZXJfbGlzdCIsImxlbmd0aCIsIndpZHRoIiwibWJfYWRkciIsImNvbG9yIiwiYWRkcmVzcyIsIm1hcmdpbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJzdGFnZV9zdHIiLCJ0aW1lIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsInN0YWdlIiwid2lubmVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidm90ZSIsIlZvdGVfZXZlbnQiLCJtZXRob2RzIiwicmV0dXJuX3N0YWdlIiwiY2FsbCIsInJldHVybl9vcHRpb25zX2xlbmd0aCIsIm9wdGlvbl9sZW5ndGgiLCJyZXR1cm5fcmVzdWx0IiwicmVzdWx0IiwicmV0dXJuX21zZ3NlbmRlcl92b3Rlcl9saXN0IiwicmV0dXJuX3dpbm5lciIsInJldHVybl90aW1lIiwiY29ycmVjdF90aW1lIiwiaSIsIkRhdGUiLCJhIiwidG9TdHJpbmciLCJwdXNoIiwicmV0dXJuX29wdGlvbnMiLCJ0ZW1wIiwiYXJyIiwiQ29tcG9uZW50IiwiUmV0YWxseSIsImdvX3RhbGx5Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb21wdXRlIiwic2VuZCIsImZyb20iLCJhbGVydCIsIm1lc3NhZ2UiLCJWb3RlX3Jlc3VsdCIsInJlc3VsdHMiLCJtYXAiLCJWb3RlX3Jlc3VsdF9Vbml0IiwiZGV0YWlscyIsImRldGFpbCIsIlZvdGVyX2xpc3RRUSIsImxp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Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUNKLGFBQ0ksbUVBQ0MsS0FBS3hFLEtBQUwsQ0FBV3lFLE9BQVgsQ0FBbUJGLEdBQW5CLENBQXVCLFVBQUFHLE1BQU07QUFBQSxlQUFJLGtCQUFLQSxNQUFMLENBQUo7QUFBQSxPQUE3QixDQURELENBREo7QUFLSDs7OztFQVAwQmpCLCtDOztJQVN6QmtCLFk7Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFDSjtBQUNBLGFBQ0ksbUVBQ0MsS0FBSzNFLEtBQUwsQ0FBVzRFLElBQVgsQ0FBZ0JMLEdBQWhCLENBQW9CLFVBQUNNLElBQUQsRUFBTS9ELEtBQU47QUFBQSxlQUNqQixrQkFDQSxrQkFBS0EsS0FBSyxHQUFDLENBQVgsQ0FEQSxFQUVBLGtCQUFLK0QsSUFBTCxDQUZBLEVBR0Esd0JBSEEsQ0FEaUI7QUFBQSxPQUFwQixDQURELENBREo7QUFXSDs7OztFQWRzQnBCLCtDOztBQWlCWjFELHFFQUFmO0FBR0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFZvdGVcXHN0YXR1cy5qcy4yODU5N2JmNDQxOTE2MmFlM2M4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0e0xpbmt9ZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCB7Q2FyZCxUYWJsZX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFJlYWN0U2hhZG93U2Nyb2xsIGZyb20gJ3JlYWN0LXNoYWRvdy1zY3JvbGwnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQge1JvdXRlcn1mcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgdm90ZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9Wb3RlL3ZvdGUnO1xyXG5cclxuY2xhc3MgU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgICAgIHNlYXJjaCA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3RlciA6IFwiXCIsXHJcbiAgICAgICAgICByZWdpc3Rlcl9hbnN3ZXIgOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgbG9hZGluZzI6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOicnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfc2VhcmNoID0gdGhpcy5yZWZyZXNoX3NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoX3JlZ2lzdGVyID0gdGhpcy5zZWFyY2hfcmVnaXN0ZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xyXG4gICAgICAgIGNvbnN0e2FkZHJlc3MsbWJfYWRkcn0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzLG1iX2FkZHIpO1xyXG4gICAgICAgIGNvbnN0IFZvdGVfZXZlbnQgPSBhd2FpdCB2b3RlKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHN0YWdlID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9zdGFnZSgpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGFnZSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uX2xlbmd0aCA9IGF3YWl0IFZvdGVfZXZlbnQubWV0aG9kcy5yZXR1cm5fb3B0aW9uc19sZW5ndGgoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uX2xlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9yZXN1bHQoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFZvdGVfZXZlbnQpO1xyXG4gICAgICAgIGxldCB2b3Rlcl9saXN0ID0gYXdhaXQgVm90ZV9ldmVudC5tZXRob2RzLnJldHVybl9tc2dzZW5kZXJfdm90ZXJfbGlzdCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2b3Rlcl9saXN0KTtcclxuICAgICAgICBpZihzdGFnZT09NCl7XHJcbiAgICAgICAgICAgIGxldCB3aW5uZXIgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3dpbm5lcigpLmNhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2lubmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRpbWUgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX3RpbWUoKS5jYWxsKCk7XHJcbiAgICAgICAgbGV0IGNvcnJlY3RfdGltZSA9W107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPDQ7aSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbWVbaV0pO1xyXG4gICAgICAgICAgICBsZXQgYSA9YXdhaXQgbmV3IERhdGUodGltZVtpXSoxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgY29ycmVjdF90aW1lLnB1c2goYS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY29ycmVjdF90aW1lKTtcclxuICAgICAgICB0aW1lID0gY29ycmVjdF90aW1lO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YWdlX3N0ciA9ICAoc3RhZ2UgPT0gMCk/XCJzdGFnZSA6IFNldHVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAxKT9cInN0YWdlIDogUmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDIpP1wic3RhZ2UgOiBWb3RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFnZSA9PSAzKT9cInN0YWdlIDogVGFsbHlcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0YWdlID09IDQpP1wic3RhZ2UgOiBGaW5pc2hcIjpcInN0YWdlIDogU2V0dXBcIjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG9wdGlvbl9sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHRlbXAgPSBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMucmV0dXJuX29wdGlvbnMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBhcnJbMF0gPSAoaW5kZXgrMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYXJyWzFdID0gdGVtcDtcclxuICAgICAgICAgICAgYXJyWzJdID0gcmVzdWx0W2luZGV4XTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YWdlPT00KVxyXG4gICAgICAgICAgICByZXR1cm57YWRkcmVzcyxtYl9hZGRyLHN0YWdlLHJlc3VsdCxvcHRpb25zLHN0YWdlX3N0cix2b3Rlcl9saXN0LHdpbm5lcix0aW1lfTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm57YWRkcmVzcyxtYl9hZGRyLHN0YWdlLHJlc3VsdCxvcHRpb25zLHN0YWdlX3N0cix2b3Rlcl9saXN0LHRpbWV9O1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaF9zZWFyY2goKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiKVxyXG4gICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvVm90ZS9zdGF0dXMvJHt0aGlzLnN0YXRlLnNlYXJjaH1gKTtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgIH1cclxuICAgIHNlYXJjaF9yZWdpc3Rlcigpe1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZ2lzdGVyX2Fuc3dlcjpcIlwifSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucHJvcHMudm90ZXJfbGlzdC5sZW5ndGg7aW5kZXgrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucmVnaXN0ZXIgPT0gdGhpcy5wcm9wcy52b3Rlcl9saXN0W2luZGV4XSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3Rlcl9hbnN3ZXI6XCJBbHJlYWR5IFJlZ2lzdGVyZWQgIVwifSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWdpc3RlcjpcIlwifSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlZ2lzdGVyX2Fuc3dlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyIDogXCJWb3RlciBub3QgZm91bmQgIVwifSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6XCJcIn0pO1xyXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXJfYW5zd2VyOlwiXCJ9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjUuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtOWFJdDJuUnBDMTJVazlnUzliYURsNDExTlFBcEZtQzI2RXdBT0g4V2dabDVNWVl4RmZjK05jUGIxZEtHajdTa1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCJzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgIDxOYXZiYXIuQnJhbmQgPlZvdGU8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS9ob21lL1wiKyB0aGlzLnByb3BzLm1iX2FkZHIgfSAgPjxhIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgd2lkdGg6XCIxMDBweFwifX0+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17XCIvVm90ZS92b3RlL1wiK3RoaXMucHJvcHMubWJfYWRkcitcIi9cIit0aGlzLnByb3BzLmFkZHJlc3N9ID48YSBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCIsIHdpZHRoOlwiMTAwcHhcIn19PlZvdGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1ZvdGUvaW5kZXhcIiB9ICA+PGEgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB3aWR0aDpcIjEwMHB4XCJ9fT5Mb2dvdXQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGlubGluZSBzdHlsZT17e21hcmdpbiA6XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yIDogXCJ3aGl0ZVwifX0gPiBpbnNlcnQgeW91ciB2b3RlIGNvbnRyYWN0IGFkZHJlc3MgaGVyZSAgLSZndDsgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBjbGFzc05hbWU9XCJtci1zbS0yXCIgXHJcbiAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IFxyXG4gICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOmV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaF9zZWFyY2h9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnICxoZWlnaHQ6ICczMCUnIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+RWxpZ2libGUgVm90ZXJzPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+dm90ZXIgcXVhbnRpdHkgOiB7dGhpcy5wcm9wcy52b3Rlcl9saXN0Lmxlbmd0aH08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBpbmxpbmUgc3R5bGU9e3ttYXJnaW4gOlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVnaXN0ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7cmVnaXN0ZXI6ZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17dGhpcy5zZWFyY2hfcmVnaXN0ZXJ9PlNlYXJjaDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIiBzdHlsZT17e21hcmdpblRvcCA6XCIxJVwiLG1hcmdpbiA6XCIyJVwifX0+e3RoaXMuc3RhdGUucmVnaXN0ZXJfYW5zd2VyfTwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlIHN0eWxlPXt7J2hlaWdodCc6ICcyMDBweCcsXCJ3aWR0aFwiOlwiMTAwJVwiLCAnb3ZlcmZsb3dZJzonc2Nyb2xsJywgJ2Rpc3BsYXknOiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGluZyBBZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIG9yIG5vdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWb3Rlcl9saXN0UVEgbGlzdCA9e3RoaXMucHJvcHMudm90ZXJfbGlzdH0+PC9Wb3Rlcl9saXN0UVE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnNDYlJyAsIG1hcmdpbjogJzEuNSUnfX0+XHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Wb3RpbmcgSWxsdXN0cmF0aW9uPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LW11dGVkXCI+Vm90ZSBhZGRyZXNzIDoge3RoaXMucHJvcHMuYWRkcmVzc308L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9XCJtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5zdGFnZV9zdHJ9PC9DYXJkLlN1YnRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZSBsYXRlc3QgMjAyMCBwcmVzaWRlbnRpYWwgcG9sbHMgYW5kIGhlYWQtdG8taGVhZCBtYXRjaC11cCBiZXR3ZWVuIEpvZSBCaWRlbiBhbmQgRG9uYWxkIFRydW1wLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdmlldyBjbm4uY29tL2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBzdHlsZT17eydoZWlnaHQnOiAnMjAwcHgnLFwid2lkdGhcIjpcIjEwMCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGFydCB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVuZCB0aW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJlZ2lzdGVyIHRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnsodGhpcy5wcm9wcy50aW1lICE9PSB1bmRlZmluZWQpP3RoaXMucHJvcHMudGltZVswXTpcIlwifTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+eyh0aGlzLnByb3BzLnRpbWUgIT09IHVuZGVmaW5lZCk/dGhpcy5wcm9wcy50aW1lWzFdOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlZvdGUgdGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+eyh0aGlzLnByb3BzLnRpbWUgIT09IHVuZGVmaW5lZCk/dGhpcy5wcm9wcy50aW1lWzJdOlwiXCJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57KHRoaXMucHJvcHMudGltZSAhPT0gdW5kZWZpbmVkKT90aGlzLnByb3BzLnRpbWVbM106XCJcIn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Vm90aW5nIHJlc3VsdDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPlRoZSBWb3RlIHJlc3VsdCBpcyBzaG93biBiZWxvdzwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZvdGVfcmVzdWx0IHJlc3VsdHMgPSB7dGhpcy5wcm9wcy5vcHRpb25zfSBzdGFnZSA9e3RoaXMucHJvcHMuc3RhZ2V9IHdpbm5lcj17dGhpcy5wcm9wcy53aW5uZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZV9zdHI9e3RoaXMucHJvcHMuc3RhZ2Vfc3RyfSBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gbWJfYWRkcj17dGhpcy5wcm9wcy5tYl9hZGRyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Wb3RlX3Jlc3VsdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQ2JScgLCBtYXJnaW46ICcxLjUlJ319PlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+UmV0YWxseTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPllvdSBjYW4gcmV0YWxseSB0aGUgdm90ZSBmb3IgYXNzdXJpbmcgdGhlIHJlc3VsdDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxSZXRhbGx5IHN0YWdlID0ge3RoaXMucHJvcHMuc3RhZ2V9IGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfSBtYl9hZGRyPXt0aGlzLnByb3BzLm1iX2FkZHJ9PjwvUmV0YWxseT5cclxuICAgICAgICAgICAgICAgIHsvKjxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBzdHlsZT17eyBtYXJnaW46XCJhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgUmV0YWxseSBidXR0b25cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXRhbGx5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ29fdGFsbHkgPSB0aGlzLmdvX3RhbGx5LmJpbmQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgZ29fdGFsbHkoKXtcclxuICAgICAgICAgICAgLy8weDQyMzA5ZjkyNDIzN0JhYzY2MkFmNjQ5NjVBMmVmQUY4YzA4ZkU0ZDJcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgICAgICBjb25zdCBWb3RlX2V2ZW50ID1hd2FpdCB2b3RlKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2ViMy51dGlscy5mcm9tQXNjaWkoaGFzaCkpO1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBWb3RlX2V2ZW50Lm1ldGhvZHMuY29tcHV0ZSgpLnNlbmQoe2Zyb206YWNjb3VudHNbMF19KTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9Wb3RlL3N0YXR1cy8ke3RoaXMucHJvcHMubWJfYWRkcn0vJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhZ2UgPD0yICkgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgbm90IHJlYWNoIHRoZSBzdGFnZSBjYW4gVGFsbHk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzPlBsZWFzZSB3YWl0IGZvciBhIHdoaWxlPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHN0eWxlPXt7IG1hcmdpbjpcImF1dG9cIn19IG9uQ2xpY2s9e3RoaXMuZ29fdGFsbHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICBSZXRhbGx5IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICB9O1xyXG5cclxuY2xhc3MgVm90ZV9yZXN1bHQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICAvL2NvbnN0IHZvdGVfYnRuID1mdW5jdGlvbiAoc3RhZ2UgKXtcclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMucmVzdWx0cyk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGFnZSA8MyApIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMz5IYXZlIG5vdCByZWFjaCB0aGUgc3RhZ2UgY2FuIFRhbGx5PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5QbGVhc2Ugd2FpdCBmb3IgYSB3aGlsZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPkVsZWN0ZWQgQ2FuZGlkYXRlIDogeyh0aGlzLnByb3BzLnN0YWdlPT00KT90aGlzLnByb3BzLndpbm5lcjpcIndhaXQgZm9yIHRhbGx5XCJ9IDwvQ2FyZC5TdWJ0aXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLnN0YWdlX3N0cn08L0NhcmQuU3VidGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+T3B0aW9uJ3MgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RvbCB2b3RlcyB0byB0aGUgb3B0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVzdWx0cy5tYXAocmVzdWx0ID0+IDx0cj48Vm90ZV9yZXN1bHRfVW5pdCBkZXRhaWxzPXtyZXN1bHR9PjwvVm90ZV9yZXN1bHRfVW5pdD48L3RyPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgfTtcclxuY2xhc3MgVm90ZV9yZXN1bHRfVW5pdCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGV0YWlscy5tYXAoZGV0YWlsID0+IDx0ZD57ZGV0YWlsfTwvdGQ+KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZvdGVyX2xpc3RRUSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpc3QubWFwKChpdGVtLGluZGV4KT0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2luZGV4KzF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlllczwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcclxuXHJcblxyXG4vKirmmqvmmYLmgKflnoPlnL5cclxuICogPFRhYmxlIHJlc3BvbnNpdmUgc3R5bGU9e3snaGVpZ2h0JzogJzIwMHB4JyxcIndpZHRoXCI6XCI1MCVcIiwgJ292ZXJmbG93WSc6J3Njcm9sbCcsICdkaXNwbGF5JzogJ2Jsb2NrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5pdGVtczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5saW5rPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5yZWdpc3RlciBvciBub3Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VHJ1ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlZvdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNhbmRpZGF0ZSAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxDYXJkLkxpbmsgaHJlZj1cIiNcIj5wb2xpY3k8L0NhcmQuTGluaz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5UYWJsZSBjZWxsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRhYmxlIGNlbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VGFibGUgY2VsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=