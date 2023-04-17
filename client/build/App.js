"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _react2 = _interopRequireDefault(require("./assets/react.svg"));
require("./App.css");
var _client = require("@apollo/client");
var _reactRouterDom = require("react-router-dom");
var _context = require("@apollo/client/link/context");
var _state = require("./utils/state");
var _Products = _interopRequireDefault(require("./pages/Products"));
var _Header = _interopRequireDefault(require("./components/Header"));
var _Contact = _interopRequireDefault(require("./components/Contact"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Home = _interopRequireDefault(require("./pages/Home"));
var _Profile = _interopRequireDefault(require("./pages/Profile"));
var _SingleProduct = _interopRequireDefault(require("./pages/SingleProduct"));
var _OrderHistory = _interopRequireDefault(require("./components/OrderHistory"));
var _PaymentForm = _interopRequireDefault(require("./components/PaymentForm"));
var _Completion = _interopRequireDefault(require("./components/Completion"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // Importing pages
// const PORT = process.env.PORT || 5000;
// console.log(PORT);
// Construct our main GraphQL API endpoint
var httpLink = (0, _client.createHttpLink)({
  // uri: '/graphql',
  // credentials: 'same-origin'
  // prod - comment out when in dev
  uri: 'https://petpal.herokuapp.com/graphql'
  // dev - comment out when deploying
  //   uri: "http://localhost:3001/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
var authLink = (0, _context.setContext)(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? "Bearer ".concat(token) : ""
    })
  };
});
console.log(authLink);
var client = new _client.ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  // link: httpLink,
  cache: new _client.InMemoryCache()
});
function App() {
  return /*#__PURE__*/React.createElement(_client.ApolloProvider, {
    client: client
  }, /*#__PURE__*/React.createElement("main", {
    className: "flex flex-col min-h-screen"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_state.StoreProvider, null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/products",
    element: /*#__PURE__*/React.createElement(_Products.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/productdetails/:id",
    element: /*#__PURE__*/React.createElement(_SingleProduct.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/orderhistory",
    element: /*#__PURE__*/React.createElement(_OrderHistory.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(_Contact.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/profile",
    element: /*#__PURE__*/React.createElement(_Profile.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/payment",
    element: /*#__PURE__*/React.createElement(_PaymentForm.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/completion",
    element: /*#__PURE__*/React.createElement(_Completion.default, null)
  })), /*#__PURE__*/React.createElement(_Footer.default, null)))));
}
var _default = App;
exports.default = _default;