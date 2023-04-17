"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _client = require("@apollo/client");
var _queries = require("../utils/queries");
var _auth = _interopRequireDefault(require("../utils/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var OrderHistory = function OrderHistory() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    userParam = _useParams.username;
  var _useQuery = (0, _client.useQuery)(_queries.QUERY_ME),
    loading = _useQuery.loading,
    data = _useQuery.data;
  var user = (data === null || data === void 0 ? void 0 : data.me) || (data === null || data === void 0 ? void 0 : data.user) || {};
  console.log(data === null || data === void 0 ? void 0 : data.me);
  // navigate to personal profile page if username is yours
  if (_auth.default.loggedIn() && _auth.default.getProfile().data.username === userParam) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Navigate, {
      to: "/profile"
    });
  }
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  if (!_auth.default.loggedIn()) {
    return /*#__PURE__*/_react.default.createElement("h4", {
      className: "text-center m-3"
    }, "You need to be logged in to see this. Use the navigation links above to sign up or log in!");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "m-5 grid place-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "px-6 py-4 max-w-sm rounded overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "font-bold text-center text-xl mb-2"
  }, "Viewing ", userParam ? "".concat(user.username, "'s") : 'your', " profile."), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-center text-3xl"
  }, "Your Orders"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center m-3"
  }, "Coming Soon!"))));
};
var _default = OrderHistory;
exports.default = _default;