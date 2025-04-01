"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Footer() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center m-8"
  }, /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-bold"
  }, t("followUs")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center m-10 space-x-10 sm:space-x-26"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://www.instagram.com/borghi_sud/",
    className: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg",
    width: "50",
    height: "50",
    className: "bg-transparent",
    alt: "Instagram"
  })), "\u2003", /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "https://t.me/+itBwf1Ed0DNjMjdk",
    className: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://frankmerenda.com/wp-content/uploads/2019/11/telegram-icon-512.png",
    width: "50",
    height: "50",
    alt: "Telegram"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-between m-5 sm:flex-row sm:mx-[100px] lg:mx-[500px]"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/goals",
    className: "block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
  }, t("goals")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/workinprogress",
    className: "block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
  }, t("blog")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/contacts",
    className: "block m-1 sm:inline-block sm:mt-0 hover:text-red-600"
  }, t("needHelp"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-12"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Copyright \xA9 2024", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://gioarca.netlify.app/",
    target: "_blank",
    className: "text-red-500"
  }, "Borghi."), " ", t("allRightsReserved")))));
}
var _default = exports["default"] = Footer;