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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";
// function BorgoContacts() {
//   const form = useRef();
//   const { t } = useTranslation();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_4zk556a",
//         "template_0t8cg1n",
//         form.current,
//         "nBwk1Dh-6_dCdi75H"
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           window.location.href = "/thanks";
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div className="flex flex-col text-center justify-center items-center">
//       <div>
//         <div className="m-3">
//           <p>{t("fill_form")}</p>
//           <p>
//             {t("feedback_request_thanks")}
//             <br />
//             {t("we_reply")}
//           </p>
//         </div>
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="flex flex-col items-center justify-center"
//         >
//           <input
//             type="text"
//             name="user_name"
//             placeholder={t("name")}
//             className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <input
//             type="text"
//             name="user_surname"
//             placeholder={t("surname")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <input
//             type="text"
//             name="user_email"
//             placeholder={t("email")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <textarea
//             type="text"
//             name="message"
//             placeholder={t("message_placeholder")}
//             className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//           />
//           <button
//             type="submit"
//             className="m-2 w-36 px-8 py-4 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:cursor-pointer hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//           >
//             {t("send")}
//           </button>
//         </form>
//       </div>
//       <div className="m-5 text-center py-4 rounded-lg font-medium text-sm justify-center items-center md:w-96">
//         <p className="font-bold m-2">{t("contact_us")}</p>
//         <div className="flex flex-col justify-center items-center m-5">
//           <a
//             target="_blank"
//             href={"mailto: borghisud@gmail.com"}
//             className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
//               width="50"
//               height="50"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default BorgoContacts;
function BorgoContacts() {
  var form = (0, _react.useRef)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmitting = _useState2[0],
    setIsSubmitting = _useState2[1];
  var _useState3 = (0, _react.useState)({
      user_name: "",
      user_surname: "",
      user_email: "",
      message: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formValues = _useState4[0],
    setFormValues = _useState4[1];
  var handleChange = function handleChange(e) {
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var sendEmail = function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);
    _browser["default"].sendForm("service_4zk556a", "template_0t8cg1n", form.current, "nBwk1Dh-6_dCdi75H").then(function () {
      console.log("SUCCESS!");
      window.location.href = "/thanks";
    }, function (error) {
      console.log("FAILED...", error.text);
      setIsSubmitting(false);
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-4xl mx-auto px-4 py-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded-2xl shadow-xl overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:w-2/3 p-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-bold text-gray-800 mb-2"
  }, t("contact_us")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-1 w-20 bg-red-600 mb-6"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 mb-8"
  }, t("fill_form"), " ", t("feedback_request_thanks"), /*#__PURE__*/_react["default"].createElement("br", null), t("we_reply")), /*#__PURE__*/_react["default"].createElement("form", {
    ref: form,
    onSubmit: sendEmail,
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "user_name",
    value: formValues.user_name,
    onChange: handleChange,
    required: true,
    className: "peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all",
    placeholder: t("name"),
    id: "user_name"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "user_name",
    className: "absolute left-4 -top-2.5 px-1 text-sm transition-all \n                    bg-white text-gray-600 peer-placeholder-shown:text-gray-400 \n                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base \n                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600"
  }, t("name"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "user_surname",
    value: formValues.user_surname,
    onChange: handleChange,
    required: true,
    className: "peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all",
    placeholder: t("surname"),
    id: "user_surname"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "user_surname",
    className: "absolute left-4 -top-2.5 px-1 text-sm transition-all \n                    bg-white text-gray-600 peer-placeholder-shown:text-gray-400 \n                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base \n                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600"
  }, t("surname")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "user_email",
    value: formValues.user_email,
    onChange: handleChange,
    required: true,
    className: "peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all",
    placeholder: t("email"),
    id: "user_email"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "user_email",
    className: "absolute left-4 -top-2.5 px-1 text-sm transition-all \n                  bg-white text-gray-600 peer-placeholder-shown:text-gray-400 \n                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base \n                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600"
  }, t("email"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("textarea", {
    name: "message",
    value: formValues.message,
    onChange: handleChange,
    required: true,
    rows: "4",
    className: "peer w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all resize-none",
    placeholder: t("message_placeholder"),
    id: "message"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "message",
    className: "absolute left-4 -top-2.5 px-1 text-sm transition-all \n                  bg-white text-gray-600 peer-placeholder-shown:text-gray-400 \n                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base \n                  peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red-600"
  }, t("message_placeholder"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    disabled: isSubmitting,
    className: "px-8 py-3 rounded-lg bg-red-600 text-white font-semibold \n                  transition-all transform hover:bg-red-700 hover:scale-105 \n                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2\n                  disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center\n                  w-full md:w-auto"
  }, isSubmitting ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })), t("sending")) : t("send"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:w-1/3 bg-gradient-to-br from-red-600 to-red-800 text-white p-8 flex flex-col justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-2xl font-bold mb-6"
  }, "Puoi trovarci qui"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-start space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mt-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-200 text-sm mb-1"
  }, t("email")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:borghisud@gmail.com",
    className: "hover:underline"
  }, "borghisud@gmail.com"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-start space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-5 h-5 mt-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-200 text-sm mb-1"
  }, t("location")), /*#__PURE__*/_react["default"].createElement("p", null, "Italia Meridionale")))))))));
}
var _default = exports["default"] = BorgoContacts;