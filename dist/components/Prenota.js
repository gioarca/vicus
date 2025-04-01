"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _solid = require("@heroicons/react/20/solid");
var _reactI18next = require("react-i18next");
function Prenota() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col my-16 justify-center items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/workinprogress"
  }, /*#__PURE__*/React.createElement(_solid.CreditCardIcon, {
    className: "justify-center items-center text-center h-16 m-auto"
  }), /*#__PURE__*/React.createElement("p", {
    className: "flex flex-col justify-center items-center text-center"
  }, t("booking"))));
}
var _default = exports["default"] = Prenota;