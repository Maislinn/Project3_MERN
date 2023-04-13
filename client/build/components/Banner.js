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
    alt: "arborvitae trees"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute flex flex-row text-left top-5 p-4 [width:100%] h-30 z-10 rounded"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "[width:50%] flex flex-row ml-5"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "[font-size:4.2vw] [color:rgba(242,241,233)]"
  }, "Create beautiful evergreen privacy with our premium trees."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute  opacity-70 gap-3 flex flex-row text-left -bottom-0  p-4 [background-color:rgba(242,241,233)] [width:100%] [height:90px] z-10 rounded "
  }, /*#__PURE__*/_react.default.createElement(ImageCard, {
    img: "/imgs/trees-icon.png",
    title: "Order",
    description: "Select the trees you want"
  }), /*#__PURE__*/_react.default.createElement(ImageCard, {
    img: "/imgs/deliver-icon.png",
    title: "Deliver",
    description: "We drive straight to your door"
  }), /*#__PURE__*/_react.default.createElement(ImageCard, {
    img: "/imgs/planter-icon.png",
    title: "Install",
    description: "We provide professional planting"
  })));
}
var _default = Banner;
exports.default = _default;