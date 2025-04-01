"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _browser = _interopRequireDefault(require("@emailjs/browser"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Contacts() {
  var form = (0, _react.useRef)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    _browser["default"].sendForm("service_4zk556a", "template_0t8cg1n", form.current, "nBwk1Dh-6_dCdi75H").then(function () {
      console.log("SUCCESS!");
      window.location.href = "/thanks";
    }, function (error) {
      console.log("FAILED...", error.text);
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col text-center justify-center items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-3"
  }, /*#__PURE__*/_react["default"].createElement("p", null, t("fill_form")), /*#__PURE__*/_react["default"].createElement("p", null, t("feedback_request_thanks"), /*#__PURE__*/_react["default"].createElement("br", null), t("we_reply"))), /*#__PURE__*/_react["default"].createElement("form", {
    ref: form,
    onSubmit: sendEmail,
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "user_name",
    placeholder: t("name"),
    className: "md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "user_surname",
    placeholder: t("surname"),
    className: "m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "user_email",
    placeholder: t("email"),
    className: "m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
  }), /*#__PURE__*/_react["default"].createElement("textarea", {
    type: "text",
    name: "message",
    placeholder: t("message_placeholder"),
    className: "m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "m-2 w-2/3 px-8 py-4 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("send")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 text-center py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm justify-center items-center md:w-96"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-bold m-2"
  }, t("contact_us")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center items-center m-5"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    href: "mailto: borghisud@gmail.com",
    className: "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
    width: "50",
    height: "50"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-5"
  }, t("address")))));
}
var _default = exports["default"] = Contacts;