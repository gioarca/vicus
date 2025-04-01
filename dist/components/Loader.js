"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _solid = require("@heroicons/react/20/solid");
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Loader() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center items-center text-2xl my-52 md:m-64"
  }, /*#__PURE__*/_react["default"].createElement(_solid.CogIcon, {
    className: "items-center transition duration-700 animate-spin h-10 w-10"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "flex-col justify-center items-center text-center"
  }, t("loader")));
}
var _default = exports["default"] = Loader;