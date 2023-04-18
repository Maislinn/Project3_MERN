"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _state = require("../utils/state");
var _actions = require("../utils/actions");
var _helpers = require("../utils/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import React from 'react';
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
// const CartItem = ({ cartItem }) => {
//   const [, dispatch] = useStoreContext();
//   const removeFromCart = cartItem => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: cartItem.product._id
//     });
//   };
//   const onChange = (e) => {
//     const value = e.target.value;
//     if (value === '0') {
//       dispatch({
//         type: REMOVE_FROM_CART,
//         _id: cartItem.product._id
//       });
//       idbPromise('cart', 'delete', { ...cartItem });
//     } else {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: cartItem.product._id,
//         quantity: parseInt(value)
//       });
//       idbPromise('cart', 'put', { ...cartItem, quantity: parseInt(value) });
//     }
//   }
//   return (
//     <div className="flex-row">
//       <div>
//         <div>{cartItem.product.name}</div>
//         <div>
//           <span>Qty:{cartItem.quantity}</span>
//           <span
//             role="img"
//             aria-label="trash"
//             onClick={() => removeFromCart(cartItem)}
//           >
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default CartItem;
// 🦄 rbk: added CartItem from client-origin
var CartItem = function CartItem(_ref) {
  var item = _ref.item;
  var _useStoreContext = (0, _state.useStoreContext)(),
    _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
    dispatch = _useStoreContext2[1];
  var removeFromCart = function removeFromCart(item) {
    dispatch({
      type: _actions.REMOVE_FROM_CART,
      _id: item._id
    });
    (0, _helpers.idbPromise)('cart', 'delete', _objectSpread({}, item));
  };
  var onChange = function onChange(e) {
    var value = e.target.value;
    if (value === '0') {
      dispatch({
        type: _actions.REMOVE_FROM_CART,
        _id: item._id
      });
      (0, _helpers.idbPromise)('cart', 'delete', _objectSpread({}, item));
    } else {
      dispatch({
        type: _actions.UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      (0, _helpers.idbPromise)('cart', 'put', _objectSpread(_objectSpread({}, item), {}, {
        purchaseQuantity: parseInt(value)
      }));
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "/images/".concat(item.image),
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, item.name, ", $", item.price), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, "Qty:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    placeholder: "1",
    value: item.purchaseQuantity,
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("span", {
    role: "img",
    "aria-label": "trash",
    onClick: function onClick() {
      return removeFromCart(item);
    }
  }, "\uD83D\uDDD1\uFE0F"))));
};
var _default = CartItem;
exports.default = _default;