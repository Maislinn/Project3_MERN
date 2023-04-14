"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _stripeJs = require("@stripe/stripe-js");
var _client = require("@apollo/client");
var _queries = require("../utils/queries");
var _helpers = require("../utils/helpers");
var _CartItem = _interopRequireDefault(require("./CartItem"));
var _auth = _interopRequireDefault(require("../utils/auth"));
var _state = require("../utils/state");
var _actions = require("../utils/actions");
var _bs = require("react-icons/bs");
var _reactRouterDom = require("react-router-dom");
var _react2 = require("@material-tailwind/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import CheckoutForm from '../pages/CheckoutForm';
var stripePromise = (0, _stripeJs.loadStripe)('pk_test_51Mm4DBEt2stpP8jUT68EIfZbGssaCGRsg73eXO6tvXL1XU6JmQ26c85ZUYqSm4ijQBkYyuiz9g07zCh9oOpL7hFD0027eiPLnu');
var PaymentForm = function PaymentForm() {
  var _useStoreContext = (0, _state.useStoreContext)(),
    _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
    state = _useStoreContext2[0],
    dispatch = _useStoreContext2[1];
  var _useLazyQuery = (0, _client.useLazyQuery)(_queries.QUERY_CHECKOUT),
    _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
    getCheckout = _useLazyQuery2[0],
    data = _useLazyQuery2[1].data;
  (0, _react.useEffect)(function () {
    if (data) {
      stripePromise.then(function (res) {
        res.redirectToCheckout({
          sessionId: data.checkout.session
        });
      });
    }
  }, [data]);
  function toggleCart() {
    dispatch({
      type: _actions.TOGGLE_CART
    });
  }
  function calculateTotal() {
    var sum = 0;
    state.cart.forEach(function (cartItem) {
      sum += cartItem.style.price * cartItem.quantity;
    });
    return sum.toFixed(2);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Card, {
    className: "w-full max-w-[26rem] shadow-lg m-20 rounded-md align-content:center"
  }, /*#__PURE__*/_react.default.createElement(_react2.CardBody, {
    className: "[background-color:#f5bcb1] rounded-md"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "[color:#979291] mb-6 p-4"
  }, state.cart.map(function (cartItem) {
    return /*#__PURE__*/_react.default.createElement(_CartItem.default, {
      key: cartItem.product._id,
      cartItem: cartItem
    });
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "group mt-8 flex justify-center items-center gap-6 p-4"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "Total: $", calculateTotal()), /*#__PURE__*/_react.default.createElement("button", {
    className: "[background-color:#979291] px-4 py-2 rounded-lg"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/payment",
    className: "[color:#FFFFFF]"
  }, "Checkout"))))))));
};
var _default = PaymentForm; // import React, { useState, useEffect } from "react";
// // import "./App.css";
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
// import CartItem from './CartItem';
// const ProductDisplay = ({cartItem}) => {
//   const [state, dispatch] = useStoreContext();
//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((cartItem) => {
//         sum += cartItem.style.price * cartItem.quantity;
//     });
//     return sum.toFixed(2);
// }
//   return (
//     <>
//     <div className="product">
//     <div>
//                 {state.cart.map((cartItem) => (
//                     <CartItem key={cartItem.product._id} cartItem={cartItem} />
//                 ))}
//                 <div className='flex-row space-between'>
//                     <strong>Total: ${calculateTotal()}</strong>
//                 </div>
//       <img
//         src="{cartItem.product.image}"
//         alt="cartItem.product.description"
//       />
//       <div className="description">
//       <h3>title</h3>
//       <h5>$150.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//     </>
// )};
// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );
// export default function App() {
//   const [message, setMessage] = useState("");
//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);
//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }
//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);
//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }
// import React, { useState, useEffect } from "react";
// // import "./App.css";
// import { useStoreContext } from '../utils/state';
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
// import CartItem from './CartItem';
// const ProductDisplay = ({cartItem}) => {
//   const [state, dispatch] = useStoreContext();
//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((cartItem) => {
//         sum += cartItem.style.price * cartItem.quantity;
//     });
//     return sum.toFixed(2);
// }
//   return (
//     <>
//     <div className="product">
//     <div>
//                 {state.cart.map((cartItem) => (
//                     <CartItem key={cartItem.product._id} cartItem={cartItem} />
//                 ))}
// import React, { useState } from "react";
// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "#fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill": { color: "#fce883" },
//             "::placeholder": { color: "#87bbfd" }
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "#ffc7ee"
//         }
//     }
// }
// export default function PaymentForm() {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()
//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })
//         if (!error) {
//             try {
//                 const { id } = paymentMethod
//                 const response = await axios.post("https://localhost:3001/payment", {
//                     amount: 1000,
//                     id
//                 })
//                 if (response.data.success) {
//                     console.lof("succesful payment")
//                     setSuccess(true)
//                 }
//         if (query.get("canceled")) {
//             setMessage(
//                 "Order canceled -- continue to shop around and checkout when you're ready."
//             );
//         }
//     }, []);
//     return message ? (
//         <Message message={message} />
//     ) : (
//         <ProductDisplay />
//     );
// }
exports.default = _default;