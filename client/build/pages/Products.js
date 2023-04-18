"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Products;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@material-tailwind/react");
var _state = require("../utils/state");
var _actions = require("../utils/actions");
var _queries = require("../utils/queries");
var _client = require("@apollo/client");
var _reactRouterDom = require("react-router-dom");
var _helpers = require("../utils/helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Products() {
  var _useStoreContext = (0, _state.useStoreContext)(),
    _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
    state = _useStoreContext2[0],
    dispatch = _useStoreContext2[1];
  var currentCategory = state.currentCategory;
  var _useQuery = (0, _client.useQuery)(_queries.QUERY_PRODUCTS),
    loading = _useQuery.loading,
    data = _useQuery.data;
  (0, _react.useEffect)(function () {
    if (data) {
      dispatch({
        type: _actions.UPDATE_PRODUCTS,
        products: data.products
      });
      data.products.forEach(function (product) {
        (0, _helpers.idbPromise)('products', 'put', product);
      });
    } else if (!loading) {
      (0, _helpers.idbPromise)('products', 'get').then(function (products) {
        dispatch({
          type: _actions.UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);
  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
    return state.products.filter(function (product) {
      return product.category._id === currentCategory;
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container justify-center flex flex-wrap"
  }, state.products && state.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_react2.Card, {
      key: product._id,
      className: "w-full max-w-[26rem] shadow-lg m-10 rounded-md"
    }, /*#__PURE__*/_react.default.createElement(_react2.CardBody, {
      className: "[background-color:#f5bcb1] rounded-md"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "mb-3"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "/imgs/".concat(product.image),
      alt: product.name,
      className: "rounded-t-xl"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "font-medium [color:#979291]"
    }, /*#__PURE__*/_react.default.createElement("h4", {
      className: "m-4"
    }, product.name))), /*#__PURE__*/_react.default.createElement("div", {
      className: "group mt-8 flex justify-center items-center gap-3 p-4"
    }, /*#__PURE__*/_react.default.createElement(_react2.Button, {
      className: "[background-color:#979291] px-4 py-2 rounded-lg"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/productdetails/".concat(product._id)
    }, "Details")))));
  }));
}