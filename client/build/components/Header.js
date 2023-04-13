"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _PetPalLogo = _interopRequireDefault(require("../assets/imgs/PetPalLogo.png"));
var _bs = require("react-icons/bs");
var _Cart = _interopRequireDefault(require("./Cart"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: ""
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "pb-4 flex-wrap items-center mt-auto flow-root"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "m-5 mr-4 md:mr-6 float-left"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: " hover:text-gray-800 duration-200",
    to: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "m-5 mr-4 md:mr-6 float-left"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: " hover:text-gray-800 duration-200",
    to: "/products"
  }, "Products")), /*#__PURE__*/_react.default.createElement("li", {
    className: "m-5 mr-4 md:mr-6 float-left"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: " hover:text-gray-800 duration-200",
    to: "/contact"
  }, "Contact")), /*#__PURE__*/_react.default.createElement("li", {
    className: "m-5 mr-4 md:mr-6 float-right"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: " hover:text-gray-800 duration-200",
    to: "/profile"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsPersonCircle, {
    className: "text-2xl"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    className: "mt-2 mr-4 md:mr-6 float-right"
  }, /*#__PURE__*/_react.default.createElement(_Cart.default, null)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "grid grid-cols-3 max-h-60 place-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-1"
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "col-span-1 max-w-xs",
    src: _PetPalLogo.default,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-1"
  })));
}
var _default = Header;
exports.default = _default;