"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Goals() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t; // Inizializza useTranslation

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center text-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold m-3"
  }, t("goals_page.title")), /*#__PURE__*/_react["default"].createElement("p", null, t("goals_page.intro")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-08.jpg/jcr:content/renditions/original",
    alt: "",
    width: "80",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-3"
  }, t("goals_page.goal_1"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-09.jpg/jcr:content/renditions/original",
    alt: "",
    width: "80",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-3"
  }, t("goals_page.goal_2"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://www.eda.admin.ch/content/dam/agenda2030/Images/Home/Ziele/Die-17-Ziele-fuer-nachhaltige-Entwicklung/Sustainable_Development_Goals_IT_RGB-17.jpg/jcr:content/renditions/original",
    alt: "",
    width: "80",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-3"
  }, /*#__PURE__*/_react["default"].createElement("p", null, t("goals_page.goal_3_intro")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-bold text-black"
  }, t("goals_page.goal_3_partners"))))));
}
var _default = exports["default"] = Goals;