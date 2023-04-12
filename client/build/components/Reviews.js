"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CarouselData = require("./CarouselData");
var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));
require("react-multi-carousel/lib/styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Reviews() {
  var responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },

    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },

    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-20 mb-20 relative  [color:#979291]"
  }, /*#__PURE__*/_react.default.createElement(_reactMultiCarousel.default, {
    swipeable: true,
    draggable: true,
    showDots: true,
    responsive: responsive,
    ssr: true // means to render carousel on server-side.
    ,
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2500,
    keyBoardControl: true
    // customTransition="all .5"
    ,
    transitionDuration: 500,
    containerClass: "carousel-container"
    //   removeArrowOnDeviceType={["tablet", "mobile"]}
    ,
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px"
  }, _CarouselData.carouselData.map(function (data) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "card p-5 [background-color:#f0afa3] h-full m-1 rounded"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: " rounded-md",
      src: data.image,
      alt: "customer's trees"
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "pt-5"
    }, data.text));
  })));
}
var _default = Reviews;
exports.default = _default;