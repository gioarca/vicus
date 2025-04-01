"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _Head = _interopRequireDefault(require("./components/Head"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Pages = _interopRequireDefault(require("./pages/Pages"));
require("./App.css");
require("./i18n");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import LanguageSelector from "./locales/LanguageSelector";

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Head["default"], null), /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_Pages["default"], null)), /*#__PURE__*/React.createElement(_Footer["default"], null));
}
var _default = exports["default"] = App;