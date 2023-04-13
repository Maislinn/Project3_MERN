"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _state = require("../utils/state");
var _actions = require("../utils/actions");
var _queries = require("../utils/queries");
var _client = require("@apollo/client");
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Display images from the database
function Images(_ref) {
  var images = _ref.images;
  if (images.length > 0) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      alt: "tree",
      className: "w-screen object-cover rounded-md shadow-lg",
      src: "/".concat(images[0].original)
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      src: "",
      alt: ""
    }));
  }
}
function SingleProduct() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _React$useState = _react.default.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    product = _React$useState2[0],
    setProduct = _React$useState2[1];
  var _React$useState3 = _react.default.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedStyleName = _React$useState4[0],
    setSelectedStyleName = _React$useState4[1];
  var _React$useState5 = _react.default.useState(1),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    quantity = _React$useState6[0],
    setQuantity = _React$useState6[1];
  var _useStoreContext = (0, _state.useStoreContext)(),
    _useStoreContext2 = _slicedToArray(_useStoreContext, 2),
    state = _useStoreContext2[0],
    dispatch = _useStoreContext2[1];
  var cart = state.cart;
  var _useQuery = (0, _client.useQuery)(_queries.QUERY_SINGLE_PRODUCT, {
      variables: {
        id: id
      },
      onCompleted: function onCompleted(data) {
        if (data && data.getProduct) {
          setProduct(data.getProduct);
          setSelectedStyleName(data.getProduct.styles[0].name);
        }
      }
    }),
    loading = _useQuery.loading,
    error = _useQuery.error;

  // Adding product to cart
  function addToCart(amount) {
    // Checking to see if a particular item is already in cart

    // First get the selected style object
    var selectedStyle = product.styles.find(function (s) {
      return s.name === selectedStyleName;
    });

    // then iterate through the cart to see if a CartItem has the same product id and style string
    var existingCartItem = cart.find(function (_item) {
      return _item.product._id === id && selectedStyle.name === _item.style.name;
    });
    if (existingCartItem) {
      console.log("Update cart");
      var _quantity = 0;
      if (amount) {
        _quantity = parseInt(existingCartItem.quantity) + parseInt(amount);
      } else {
        _quantity = parseInt(existingCartItem.quantity) + 1;
      }
      dispatch({
        type: _actions.UPDATE_CART_QUANTITY,
        cartItem: _objectSpread(_objectSpread({}, existingCartItem), {}, {
          quantity: _quantity
        })
      });
      // If item is not already in the cart add one of item
    } else {
      console.log("add to cart");
      var _quantity2 = 1;
      if (amount) {
        _quantity2 = parseInt(amount);
      }
      dispatch({
        type: _actions.ADD_TO_CART,
        cartItem: {
          product: product,
          style: selectedStyle,
          quantity: _quantity2
        }
      });
    }
  }
  function handleInput(event) {
    if (event.target.value.length === 0) {
      setQuantity(1);
      return;
    }
    var result = event.target.value.replace(/\D/g, "");
    if (result) {
      setQuantity(result);
    }
  }
  // Styles renderer
  function StyleFeats(_ref2) {
    var style = _ref2.style;
    if (style) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "mb-4"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-green text-lg font-bold"
      }, "$", style.price), /*#__PURE__*/_react.default.createElement("div", {
        className: ""
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        placeholder: "Amount",
        value: quantity ? "".concat(quantity) : ""
        // value={`${quantity ? quantity : ""}`}
        ,
        onChange: handleInput
      })));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("h2", null, "Loading");
  }
  if (error) {
    return /*#__PURE__*/_react.default.createElement("p", null, error);
  }
  if (!product || !product._id) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "m-10 flex flex-col justify-center align-center"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "text-center"
    }, "Product Not Found")));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-12 mb-40 mt-10 [background-color:#f0afa3]"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-3xl m-5 col-span-4 text-center [color:#979291]"
  }, product.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row justify-center items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " rounded-md p-3 m-5"
  }, /*#__PURE__*/_react.default.createElement(Images, {
    images: product.images
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: " rounded-md p-3 m-5"
  }, /*#__PURE__*/_react.default.createElement(Images, {
    images: product.images
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "m-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " [color:#979291]"
  }, product.description), /*#__PURE__*/_react.default.createElement("div", {
    className: "m-5 [color:#979291]"
  }, product.notes))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center items-center flex-col [color:#979291]"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "m-5 text-left flex flex-wrap gap-4"
  }, [].concat(product.styles).sort(function (a, b) {
    return a.height.value - b.height.value;
  }).map(function (style) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: style.name,
      className: "radio"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "px-4 py-2 rounded ".concat(selectedStyleName == style.name ? "bg-red-400" : "bg-orange-300 "),
      onClick: function onClick() {
        setSelectedStyleName(style.name);
      }
    }, style.height.value, " ft"));
  })), StyleFeats({
    style: product.styles.find(function (s) {
      return s.name === selectedStyleName;
    })
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      addToCart(quantity);
    },
    className: " [color:#f0afa3] [background-color:#979291] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg  outline-none focus:outline-no",
    type: "submit"
  }, "Add to Cart"), "Types: ", cart.length, /*#__PURE__*/_react.default.createElement("br", null), "Total Amount", cart.reduce(function (total, current) {
    return total + current.quantity;
  }, 0))))));
}
var _default = SingleProduct;
exports.default = _default;
{
  /* TODO: REMOVE Testing cart */
}
{
  /* <p>{cart.length}</p>
              {cart.map((i) => {
                  return <>{i.productQuantity}</>;
              })} */
}
{
  /* TODO: REMOVE Testing cart */
}