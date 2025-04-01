"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SignIn = _interopRequireDefault(require("../components/SignIn"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function About() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-center font-bold text-xl m-14"
  }, t("welcome")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20 mb-10 flex flex-col text-center items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1541855127-2e944b899d9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "sm:h-auto",
    alt: "Borghi"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5"
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("code", null, t("borghi_initiative"))), /*#__PURE__*/_react["default"].createElement("p", null, t("promote_revitalization")), /*#__PURE__*/_react["default"].createElement("p", null, t("dedicated_to_change")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-2xl font-bold m-3"
  }, t("entrepreneurs_creators")), /*#__PURE__*/_react["default"].createElement("p", null, t("authentic_lifestyle")), /*#__PURE__*/_react["default"].createElement("p", null, t("remember_roots")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-l font-bold m-3"
  }, t("slow_and_authentic")), /*#__PURE__*/_react["default"].createElement("p", null, t("find_villages")), /*#__PURE__*/_react["default"].createElement("p", null, t("shared_vision")), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("p", null, t("curious_about_project")), /*#__PURE__*/_react["default"].createElement("p", null, t("click_to_learn_more")), /*#__PURE__*/_react["default"].createElement(_SignIn["default"], null)));
}
var _default = exports["default"] = About;