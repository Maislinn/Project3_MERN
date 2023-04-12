"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _emailjsCom = _interopRequireDefault(require("emailjs-com"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ContactForm = function ContactForm() {
  var form = (0, _react.useRef)();
  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    _emailjsCom.default.sendForm('service_bwg4wxs', 'template_3yqv3t9', form.current, '-0fBDvvdgcSeYE7uC').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    }).then(alert("Your message has been sent")).then(e.target.reset());
    ;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-center text-3xl pt-10"
  }, "Questions?"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center m-3"
  }, "If you'd like a customer service representative to contact you for a specific order, please fill out the form below and we'll be in touch soon!"), /*#__PURE__*/_react.default.createElement("form", {
    className: "m-5 grid place-items-center",
    ref: form,
    onSubmit: sendEmail,
    method: "POST",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 w-1/2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Your Name",
    name: "name",
    className: "px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 pt-0 w-1/2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Email",
    name: "email",
    className: "px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 pt-0 w-1/2"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: "Your message",
    name: "message",
    className: "px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full",
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 pt-0"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "[background-color:#f0afa3] [color:#9c9897]  active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
    type: "submit"
  }, "Send Message"))));
};
var _default = ContactForm;
exports.default = _default;