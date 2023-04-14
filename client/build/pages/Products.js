"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Example;
var _react = require("@material-tailwind/react");
var _react2 = _interopRequireDefault(require("react"));
var _queries = require("../utils/queries");
var _client = require("@apollo/client");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Example() {
  var _React$useState = _react2.default.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    products = _React$useState2[0],
    setProducts = _React$useState2[1];
  var _useQuery = (0, _client.useQuery)(_queries.QUERY_PRODUCTS, {
      onCompleted: function onCompleted(data) {
        if (data && data.getProducts) {
          setProducts(data.getProducts);
        }
      }
    }),
    loading = _useQuery.loading,
    error = _useQuery.error;
  if (loading) {
    return /*#__PURE__*/_react2.default.createElement("h2", null, "Loading");
  }
  if (error) {
    return /*#__PURE__*/_react2.default.createElement("p", null, error);
  }
  if (!products) {
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, /*#__PURE__*/_react2.default.createElement("div", {
      className: "m-10 flex flex-col justify-center align-center"
    }, /*#__PURE__*/_react2.default.createElement("h1", {
      className: "text-center"
    }, "Service Not Found")));
  }
  return /*#__PURE__*/_react2.default.createElement("div", {
    className: "container justify-center flex flex-wrap"
  }, products.map(function (product) {
    return /*#__PURE__*/_react2.default.createElement(_react.Card, {
      key: product._id,
      className: "w-full max-w-[26rem] shadow-lg m-10 rounded-md"
    }, /*#__PURE__*/_react2.default.createElement(_react.CardBody, {
      className: "[background-color:#f5bcb1] rounded-md"
    }, /*#__PURE__*/_react2.default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/_react2.default.createElement("img", {
      src: "/".concat(product.images[0].original),
      alt: "".concat(product.images[0].original),
      className: "rounded-t-xl"
    }), /*#__PURE__*/_react2.default.createElement("div", {
      className: "font-medium [color:#979291]"
    }, /*#__PURE__*/_react2.default.createElement("h4", {
      className: "m-4"
    }, product.name))), /*#__PURE__*/_react2.default.createElement("div", {
      className: "group mt-8 flex justify-center items-center gap-3 p-4"
    }, /*#__PURE__*/_react2.default.createElement(_react.Button, {
      className: "[background-color:#979291] px-4 py-2 rounded-lg"
    }, /*#__PURE__*/_react2.default.createElement(_reactRouterDom.Link, {
      to: "/productdetails/".concat(product._id)
    }, "Details")))));
  }));
}