"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Work() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1]; // nuovo stato per il caricamento
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setIsLoading(false);
    }, 1500); // inserito il timeout di 1.5 secondi
  }, []);
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-center items-center text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-3 md:my-26"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://assets.incisoriasacchetti.it/media/catalog/product/cache/1/small_image/300x/17f82f742ffe127f42dca9de82fb58b1/n/o/nonna-903.jpg",
    className: "flex items-center justify-center text-center h-30 w-auto m-auto md:h-3/5"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-5 font-bold md:m-10"
  }, t("quote")), /*#__PURE__*/_react["default"].createElement("p", null, t("translated")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "md:my-2"
  }, t("cit"))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-5"
  }, t("pageNotAvailable")), /*#__PURE__*/_react["default"].createElement("p", {
    // className="m-2 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none md:my-10"
    className: "m-2 px-8 py-2 text-center items-center justify-center font-bold hover:text-red-800 text-black hover:border-2 hover:border-red-800 hover:transition-all hover:duration-300 hover:ease-in-out hover:rounded-full focus:shadow-outline focus:outline-none disabled:opacity-75 hover:outline-none md:my-10"
  }, t("comingSoon")));
}
var _default = exports["default"] = Work;