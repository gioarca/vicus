"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Support() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-56 flex flex-col text-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-bold m-4"
  }, t("thankYou"), /*#__PURE__*/_react["default"].createElement("span", {
    role: "img",
    "aria-label": "hi",
    className: "h-5"
  }, "\uD83D\uDE4F")), /*#__PURE__*/_react["default"].createElement("p", null, t("thankYouBorgo")), /*#__PURE__*/_react["default"].createElement("p", null, t("borgoAdded")), /*#__PURE__*/_react["default"].createElement("p", null, t("goToTheList")), /*#__PURE__*/_react["default"].createElement("p", null));
}
var _default = exports["default"] = Support;