"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactHelmetAsync = require("react-helmet-async");
function Head() {
  return /*#__PURE__*/React.createElement(_reactHelmetAsync.HelmetProvider, null, /*#__PURE__*/React.createElement(_reactHelmetAsync.Helmet, null, /*#__PURE__*/React.createElement("meta", {
    charset: "UTF-8"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "stylesheet",
    href: "App.css"
  }), /*#__PURE__*/React.createElement("title", {
    className: "font-bold"
  }, "Vicus")));
}
var _default = exports["default"] = Head;