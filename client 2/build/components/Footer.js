"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _fa = require("react-icons/fa");
var _im = require("react-icons/im");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Footer = function Footer() {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "mt-auto [background-color:#f5bcb1]  [color:#9c9897]"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap items-center mt-3  sm:mt-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "mr-4 hover:text-lime-500 duration-200 md:mr-6"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Home"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "mr-4 hover:text-lime-500 duration-200 md:mr-6"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/products"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Sitters"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "mr-4 hover:text-lime-500 duration-200 md:mr-6"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/contact"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Contact"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "mr-4 hover:text-lime-500 duration-200 md:mr-6"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/profile"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Profile"))), /*#__PURE__*/_react.default.createElement("li", {
    className: "mr-4 hover:text-lime-500 duration-200 md:mr-6"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/payment"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Cart")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "hover:text-lime-500 duration-200",
    href: "https://www.facebook.com/",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFacebookF, null)), /*#__PURE__*/_react.default.createElement("a", {
    className: "hover:text-lime-500 duration-200",
    href: "https://www.instagram.com/",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_im.ImInstagram, null)))), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-6 m-4 w-10/12 [border-color:#979293] border-gray-200 sm:mx-auto lg:my-8"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full mx-auto container pb-4 md:flex md:items-center md:justify-center"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-sm sm:text-center"
  }, "\xA9 2023 Pet Pal LLC. All Rights Reserved.")));
};
var _default = Footer;
exports.default = _default;