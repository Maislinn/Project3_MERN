"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ImageCard(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "[width:33%] flex flex-row items-center gap-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "[width:50%]"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "rounded ",
    src: props.img,
    alt: "icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "h-max rounded [color:#9c9897]"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: ""
  }, props.title), /*#__PURE__*/_react.default.createElement("small", null, props.description)));
}
function Banner() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-screen pt-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: " w-screen z-0 ",
    src: "/imgs/Couple-with-Cat.png",
    alt: "couple with cat"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute flex flex-row text-left top-5 p-4 [width:100%] h-30 z-10 rounded"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "[width:50%] flex flex-row ml-5"
  })));
}
var _default = Banner;
exports.default = _default;