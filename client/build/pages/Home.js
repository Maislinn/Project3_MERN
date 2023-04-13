"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Banner = _interopRequireDefault(require("../components/Banner"));
var _Reviews = _interopRequireDefault(require("../components/Reviews"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Home"
  }, /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_Reviews.default, null));
}
var _default = Home;
exports.default = _default;