"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SignIn() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex text-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/registration"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("signUp"))));
}
var _default = exports["default"] = SignIn;