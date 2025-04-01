"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@headlessui/react");
var _solid = require("@heroicons/react/20/solid");
var _firebase = require("../utils/firebase");
var _reactRouterDom = require("react-router-dom");
var _reactI18next = require("react-i18next");
var _useAuthContext2 = require("../hooks/auth/useAuthContext");
var _useManageAuth2 = require("../hooks/auth/useManageAuth");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function NavBar() {
  var _user$name;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useAuthContext = (0, _useAuthContext2.useAuthContext)(),
    user = _useAuthContext.user; // Uso il contesto di autenticazione

  var navigate = (0, _reactRouterDom.useNavigate)();
  var divRef = /*#__PURE__*/(0, _react.createRef)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var changeLanguage = function changeLanguage(lng) {
    i18n.changeLanguage(lng);
  };
  var handleSignOut = function handleSignOut() {
    setTimeout(_firebase.auth.signOut().then(function () {
      navigate("/signout"); // Reindirizza dopo il logout
    }), 1000);
  };
  var _useManageAuth = (0, _useManageAuth2.useManageAuth)(),
    logout = _useManageAuth.logout;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "flex flex-wrap items-center justify-between bg-white mb-24"
  }, !user && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-4 py-2 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: "text-xl font-semibold"
  }, "VICUS")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "lg:hidden rounded-full p-2 hover:bg-gray-100 transition-all duration-200",
    "aria-label": "Menu"
  }, isOpen ? /*#__PURE__*/_react["default"].createElement(_solid.XMarkIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }) : /*#__PURE__*/_react["default"].createElement(_solid.Bars3Icon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden lg:flex lg:items-center lg:space-x-6"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/about"
  }, t("about")), /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/goals"
  }, t("goals")), /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/borghi"
  }, t("borghi")), /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/contacts"
  }, t("contacts")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "h-5 w-px bg-gray-300"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/login",
    className: "px-3 py-1 text-sm hover:text-red-600 transition-colors"
  }, t("Entra")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/registration",
    className: "px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
  }, t("signUp")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "h-5 w-px bg-gray-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "flex items-center text-sm hover:text-red-600 transition-colors"
  }, t("language"), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4 ml-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("it");
    },
    className: "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  }, t("italian")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("en");
    },
    className: "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  }, t("english"))))), /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    show: isOpen,
    enter: "transition duration-200 ease-out",
    enterFrom: "opacity-0 -translate-y-2",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 ease-in",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 -translate-y-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg p-4 lg:hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col space-y-3"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/about"
  }, t("about")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/goals"
  }, t("goals")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/borghi"
  }, t("borghi")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/contacts"
  }, t("contacts")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-100 my-2 pt-2"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/login",
    className: "py-2 text-center hover:text-red-600 transition-colors"
  }, t("Entra")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/registration",
    className: "py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
  }, t("signUp")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-100 my-2 pt-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("it");
    },
    className: "px-3 py-1 text-sm hover:text-red-600 transition-colors"
  }, t("italian")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("en");
    },
    className: "px-3 py-1 text-sm hover:text-red-600 transition-colors"
  }, t("english")))))))), user && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-4 py-2 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: "text-xl font-semibold"
  }, "VICUS")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hidden lg:flex lg:items-center lg:space-x-6"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/about"
  }, t("about")), /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/borghi"
  }, t("borghi")), /*#__PURE__*/_react["default"].createElement("a", {
    className: "text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200",
    href: "/contacts"
  }, t("contacts")), /*#__PURE__*/_react["default"].createElement("span", {
    className: "h-5 w-px bg-gray-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "flex items-center text-sm hover:text-red-600 transition-colors"
  }, t("language"), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4 ml-1",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("it");
    },
    className: "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  }, t("italian")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("en");
    },
    className: "block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
  }, t("english")))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "h-5 w-px bg-gray-300"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/dashboard",
    className: "relative flex items-center group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: user.profilePicture,
    alt: user.name,
    referrerPolicy: "no-referrer",
    className: "h-8 w-8 rounded-full object-cover border-2 border-transparent group-hover:border-red-600 transition-all"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2 font-medium text-sm text-gray-700 group-hover:text-red-600 transition-colors"
  }, (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.split(" ")[0])), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: logout,
    className: "px-4 py-1.5 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  }, t("logout")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-2 lg:hidden"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/dashboard",
    className: "relative p-1 rounded-full hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: user.profilePicture,
    alt: user.name,
    referrerPolicy: "no-referrer",
    className: "h-8 w-8 rounded-full object-cover"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
  }))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "rounded-full p-2 hover:bg-gray-100 transition-colors",
    "aria-label": "Menu"
  }, isOpen ? /*#__PURE__*/_react["default"].createElement(_solid.XMarkIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }) : /*#__PURE__*/_react["default"].createElement(_solid.Bars3Icon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    show: isOpen,
    enter: "transition duration-200 ease-out",
    enterFrom: "opacity-0 -translate-y-2",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 ease-in",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 -translate-y-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg p-4 lg:hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col space-y-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-3 border-b border-gray-100 pb-3 mb-2"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: user.profilePicture,
    alt: user.name,
    referrerPolicy: "no-referrer",
    className: "h-10 w-10 rounded-full object-cover"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium text-gray-800"
  }, user.name), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-500"
  }, user.email))), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/dashboard"
  }, t("dashboard")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/about"
  }, t("about")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/borghi"
  }, t("borghi")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/contacts"
  }, t("contacts")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-100 my-2 pt-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-600"
  }, t("language")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("it");
    },
    className: "px-3 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
  }, t("italian")), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return changeLanguage("en");
    },
    className: "px-3 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
  }, t("english")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-100 my-2 pt-2"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSignOut,
    className: "py-2 mt-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  })), /*#__PURE__*/_react["default"].createElement("span", null, t("logout")))))))));
}
var _default = exports["default"] = NavBar;