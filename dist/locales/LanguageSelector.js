"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LanguageSelector = function LanguageSelector() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    i18n = _useTranslation.i18n;
  var changeLanguage = function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Save the selected language in localStorage
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "language-selector"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("en");
    }
  }, "English"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("it");
    }
  }, "Italiano"));
};
var _default = exports["default"] = LanguageSelector;