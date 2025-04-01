"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Home() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "box",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-7 text-center sm:mx-28"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "font-bold text-2xl m-5"
  }, t("title")), /*#__PURE__*/_react["default"].createElement("p", null, t("goal")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-2"
  }, t("enhance")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/registration"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("buttonText")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col text-center items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "flex text-center items-center justify-center",
    alt: "Village Image"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 text-center sm:m-28"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("code", null, t("whatIsVicus"))), /*#__PURE__*/_react["default"].createElement("p", null, t("description1")), /*#__PURE__*/_react["default"].createElement("p", null, t("description2")), /*#__PURE__*/_react["default"].createElement("p", null, t("description3")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-bold m-3"
  }, t("description4")), /*#__PURE__*/_react["default"].createElement("p", null, t("description5")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/borghi"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("buttonBorghi")))), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://plus.unsplash.com/premium_photo-1676587123352-7ed1da9c27d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto",
    alt: "Community Images of Villages"
  })));
}
var _default = exports["default"] = Home;