"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _client = require("@apollo/client");
var _Cart = _interopRequireDefault(require("../components/Cart"));
var _state = require("../utils/state");
var _actions = require("../utils/actions");
var _queries = require("../utils/queries");
var _helpers = require("../utils/helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // 🦄 rbk: added product details from client-origin
function Detail() {
  var _useStoreContext = (0, _state.useStoreContext)(),
    _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
    state = _useStoreContext2[0],
    dispatch = _useStoreContext2[1];
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    currentProduct = _useState2[0],
    setCurrentProduct = _useState2[1];
  console.log("currentProduct:", currentProduct);

  //   const { loading, data } = useQuery(QUERY_PRODUCTS);

  var products = state.products,
    cart = state.cart;
  var _useQuery = (0, _client.useQuery)(_queries.QUERY_SINGLE_PRODUCT),
    loading = _useQuery.loading,
    error = _useQuery.error,
    data = _useQuery.data;
  //   , {
  //     variables: { id },
  //     onCompleted: (data) => {
  //         if (data.product) {
  //             setCurrentProduct(data.product);
  //             console.log(data.product);
  //         }
  //     }
  // });

  (0, _react.useEffect)(function () {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(function (product) {
        return product._id === id;
      }));
    }
    // retrieved from server
    if (data) {
      dispatch({
        type: _actions.UPDATE_PRODUCTS,
        products: data.products
      });
      data.products.forEach(function (product) {
        (0, _helpers.idbPromise)('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      (0, _helpers.idbPromise)('products', 'get').then(function (indexedProducts) {
        dispatch({
          type: _actions.UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);
  var addToCart = function addToCart() {
    var itemInCart = cart.find(function (cartItem) {
      return cartItem._id === id;
    });
    if (itemInCart) {
      dispatch({
        type: _actions.UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      (0, _helpers.idbPromise)('cart', 'put', _objectSpread(_objectSpread({}, itemInCart), {}, {
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      }));
    } else {
      dispatch({
        type: _actions.ADD_TO_CART,
        product: _objectSpread(_objectSpread({}, currentProduct), {}, {
          purchaseQuantity: 1
        })
      });
      (0, _helpers.idbPromise)('cart', 'put', _objectSpread(_objectSpread({}, currentProduct), {}, {
        purchaseQuantity: 1
      }));
    }
  };
  var removeFromCart = function removeFromCart() {
    dispatch({
      type: _actions.REMOVE_FROM_CART,
      _id: currentProduct._id
    });
    (0, _helpers.idbPromise)('cart', 'delete', _objectSpread({}, currentProduct));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentProduct && cart ? /*#__PURE__*/_react.default.createElement("div", {
    className: "container my-1"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/"
  }, "\u2190 Back to Products"), /*#__PURE__*/_react.default.createElement("h2", null, currentProduct.name), /*#__PURE__*/_react.default.createElement("p", null, currentProduct.description), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Price:"), "$", currentProduct.price, ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: addToCart
  }, "Add to Cart")), /*#__PURE__*/_react.default.createElement("img", {
    src: "/imgs/".concat(currentProduct.image),
    alt: currentProduct.name
  })) : null, loading ? /*#__PURE__*/_react.default.createElement("p", null, "Loading Products") : null, /*#__PURE__*/_react.default.createElement(_Cart.default, null));
}
var _default = Detail;
exports.default = _default;