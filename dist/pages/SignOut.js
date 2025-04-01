"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function SignOut() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-52 text-center sm:my-64"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "font-bold text-2xl"
  }, t("seeYou"), /*#__PURE__*/_react["default"].createElement("span", {
    role: "img",
    "aria-label": "hi",
    className: "h-5"
  }, "\uD83D\uDC4B")), /*#__PURE__*/_react["default"].createElement("p", null, t("comeBack")));
}
var _default = exports["default"] = SignOut;