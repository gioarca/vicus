"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _vite = _interopRequireDefault(require("/vite.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Logo() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:duration-300 hover:opacity-50"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _vite["default"],
    className: "w-auto h-24 m-8",
    alt: "Vite logo"
  })));
}
var _default = exports["default"] = Logo;