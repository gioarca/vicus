"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _reactRouterDom = require("react-router-dom");
var _reactI18next = require("react-i18next");
var _reactScroll = require("react-scroll");
var _useManageUsers2 = require("../hooks/users/useManageUsers");
var _io = require("react-icons/io");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useState, useEffect } from "react";
// import Loader from "../components/Loader";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { animateScroll as scroll } from "react-scroll";
// import { useManageUsers } from "../hooks/users/useManageUsers";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// const Registration = () => {
//   const { t } = useTranslation();
//   const { signUp, isLoading } = useManageUsers();
//   const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const registrationSuccessful = await signUp({ formData });
//       if (registrationSuccessful) {
//         setIsRegistrationComplete(true);
//       }
//     } catch (error) {
//       console.error("Error during sign-up:", error);
//     }
//   };
//   useEffect(() => {
//     scroll.scrollToTop({ duration: 1000, smooth: "easeInOutQuad" });
//   }, []);
//   return (
//     <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
//       {!isRegistrationComplete ? (
//         <div className="max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
//           <div className="lg:w-1/2 sm:p-12">
//             <div className="mt-12 flex flex-col items-center">
//               <h1 className="text-2xl xl:text-3xl font-extrabold">
//                 {t("signUp")}
//               </h1>
//               {isLoading ? (
//                 <div className="flex items-center justify-center mx-auto py-10">
//                   <Loader />
//                 </div>
//               ) : (
//                 <form
//                   onSubmit={handleSubmit}
//                   className="w-full flex flex-col items-center"
//                 >
//                   <div className="mb-12 lg:m-12 flex flex-col items-center text-center justify-center text-gray-600 transform translate-y-1/2 lg:max-w-xl">
//                     <p>{t("SignUpWithEmail")}</p>
//                     <p className="font-bold">
//                       La password dev'essere composta da almeno 6 caratteri,
//                       deve contenere inoltre almeno una lettera maiuscola, un
//                       numero e un carattere speciale (esempio: Ciao123!)
//                     </p>
//                   </div>
//                   {[
//                     { name: "firstName", type: "text", placeholder: t("name") },
//                     {
//                       name: "lastName",
//                       type: "text",
//                       placeholder: t("surname"),
//                     },
//                     { name: "email", type: "email", placeholder: t("email") },
//                     {
//                       name: "password",
//                       type: "password",
//                       placeholder: t("password"),
//                     },
//                     {
//                       name: "confirmPassword",
//                       type: "password",
//                       placeholder: t("confirm_password"),
//                     },
//                   ].map((input) => (
//                     <input
//                       key={input.name}
//                       name={input.name}
//                       type={input.type}
//                       placeholder={input.placeholder}
//                       value={formData[input.name]}
//                       onChange={handleInputChange}
//                       className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
//                       required
//                     />
//                   ))}
//                   <button
//                     type="submit"
//                     className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 mt-5"
//                     disabled={isLoading}
//                   >
//                     {t("signUp")}
//                   </button>
//                   <p className="m-5 text-xs text-gray-600 text-center">
//                     {t("accept_terms")} &nbsp;
//                     <a
//                       href="#"
//                       className="border-b border-gray-500 border-dotted"
//                     >
//                       {t("terms_of_service")}
//                     </a>
//                     &nbsp; {t("and")} &nbsp;
//                     <a
//                       href="#"
//                       className="border-b border-gray-500 border-dotted"
//                     >
//                       {t("privacy_policy")}
//                     </a>
//                   </p>
//                 </form>
//               )}
//               <button className="w-full max-w-xs mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                 <Link to="/login">
//                   <span>
//                     {t("alreadyHaveAccount")}{" "}
//                     <span className="text-red-600">{t("click_here")}</span>
//                   </span>
//                 </Link>
//               </button>
//               <button className="w-full mt-10 font-bold shadow-xl rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
//                 <Link to="/registrationadmin">
//                   <span>
//                     {t("admin_or_structure")} &nbsp;
//                     <span className="text-red-600">{t("click_here")}</span>
//                   </span>
//                 </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center md:h-screen">
//           <p className="text-[#168aad] text-3xl leading-9 font-semibold mb-5">
//             Registrazione avvenuta con successo!
//           </p>
//           <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-3">
//             <IoIosCheckmarkCircle className="w-[100px] h-[100px] text-green-400" />
//             <p className="text-gray-500 text-xl font-semibold">
//               Verifica la tua email per completare la registrazione.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Registration;
var Registration = function Registration() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useManageUsers = (0, _useManageUsers2.useManageUsers)(),
    signUp = _useManageUsers.signUp,
    isLoading = _useManageUsers.isLoading;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRegistrationComplete = _useState2[0],
    setIsRegistrationComplete = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentStep = _useState4[0],
    setCurrentStep = _useState4[1];
  var _useState5 = (0, _react.useState)({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formData = _useState6[0],
    setFormData = _useState6[1];
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var registrationSuccessful;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            _context.next = 4;
            return signUp({
              formData: formData
            });
          case 4:
            registrationSuccessful = _context.sent;
            if (registrationSuccessful) {
              setIsRegistrationComplete(true);
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error("Error during sign-up:", _context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var nextStep = function nextStep() {
    setCurrentStep(currentStep + 1);
  };
  var prevStep = function prevStep() {
    setCurrentStep(currentStep - 1);
  };
  (0, _react.useEffect)(function () {
    _reactScroll.animateScroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuad"
    });
  }, []);
  var fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Step content based on current step
  var renderStepContent = function renderStepContent() {
    switch (currentStep) {
      case 1:
        return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
          className: "space-y-6 w-full",
          initial: "hidden",
          animate: "visible",
          variants: fadeInUp
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          className: "text-xl font-medium text-gray-700"
        }, t("personal_info")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "space-y-4"
        }, /*#__PURE__*/_react["default"].createElement(InputField, {
          name: "firstName",
          type: "text",
          placeholder: t("name"),
          value: formData.firstName,
          onChange: handleInputChange,
          icon: "\uD83D\uDC64"
        }), /*#__PURE__*/_react["default"].createElement(InputField, {
          name: "lastName",
          type: "text",
          placeholder: t("surname"),
          value: formData.lastName,
          onChange: handleInputChange,
          icon: "\uD83D\uDC64"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "pt-4"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          onClick: nextStep,
          className: "w-full py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
        }, t("continue"), " \u2192")));
      case 2:
        return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
          className: "space-y-6 w-full",
          initial: "hidden",
          animate: "visible",
          variants: fadeInUp
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          className: "text-xl font-medium text-gray-700"
        }, t("account_details")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "space-y-4"
        }, /*#__PURE__*/_react["default"].createElement(InputField, {
          name: "email",
          type: "email",
          placeholder: t("email"),
          value: formData.email,
          onChange: handleInputChange,
          icon: "\u2709\uFE0F"
        }), /*#__PURE__*/_react["default"].createElement(InputField, {
          name: "password",
          type: "password",
          placeholder: t("password"),
          value: formData.password,
          onChange: handleInputChange,
          icon: "\uD83D\uDD12"
        }), /*#__PURE__*/_react["default"].createElement(InputField, {
          name: "confirmPassword",
          type: "password",
          placeholder: t("confirm_password"),
          value: formData.confirmPassword,
          onChange: handleInputChange,
          icon: "\uD83D\uDD12"
        }), /*#__PURE__*/_react["default"].createElement("p", {
          className: "text-xs text-gray-500 italic"
        }, "La password dev'essere composta da almeno 6 caratteri, almeno una lettera maiuscola, un numero e un carattere speciale (esempio: Ciao123!)")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex space-x-4 pt-4"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          onClick: prevStep,
          className: "w-1/3 py-3 px-6 rounded-full bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-300 ease-in-out hover:bg-gray-50 focus:outline-none"
        }, "\u2190 ", t("back")), /*#__PURE__*/_react["default"].createElement("button", {
          type: "submit",
          className: "w-2/3 py-3 px-6 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none",
          onClick: handleSubmit
        }, t("complete_registration"))));
      default:
        return null;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  }, !isRegistrationComplete ? /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    },
    className: "max-w-md w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl font-light text-gray-800 mb-1"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-800 font-medium"
  }, t("signUp"))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 text-sm mb-8"
  }, t("SignUpWithEmail")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between relative"
  }, /*#__PURE__*/_react["default"].createElement(StepIndicator, {
    step: 1,
    currentStep: currentStep,
    label: t("personal_info")
  }), /*#__PURE__*/_react["default"].createElement(StepIndicator, {
    step: 2,
    currentStep: currentStep,
    label: t("account_details")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute top-5 h-1 bg-gray-200 left-0 right-0 z-0"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "h-full bg-red-800",
    initial: {
      width: "0%"
    },
    animate: {
      width: currentStep === 1 ? "50%" : "100%"
    },
    transition: {
      duration: 0.3
    }
  })))), isLoading ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center py-10"
  }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)) : /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "w-full space-y-6"
  }, renderStepContent()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-10 text-center space-y-4 w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-gray-500"
  }, t("accept_terms"), " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-red-800 hover:underline"
  }, t("terms_of_service")), " ", t("and"), " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-red-800 hover:underline"
  }, t("privacy_policy"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-100 pt-6 flex flex-col space-y-4"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login",
    className: "text-sm text-gray-600 hover:text-red-800 transition-colors"
  }, t("alreadyHaveAccount"), " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium text-red-800"
  }, t("click_here"))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/registrationadmin",
    className: "text-sm text-gray-600 hover:text-red-800 transition-colors"
  }, t("admin_or_structure"), " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium text-red-800"
  }, t("click_here")))))))) : /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0,
      scale: 0.9
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.5
    },
    className: "bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200
    }
  }, /*#__PURE__*/_react["default"].createElement(_io.IoIosCheckmarkCircle, {
    className: "w-24 h-24 text-green-500 mx-auto mb-6"
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-light text-gray-800 mb-6"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium"
  }, "Registrazione completata!")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 mb-8"
  }, "Verifica la tua email per completare la registrazione."), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/login"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "py-3 px-8 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white font-medium transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 focus:outline-none"
  }, "Vai al login"))));
};

// Step indicator component
var StepIndicator = function StepIndicator(_ref2) {
  var step = _ref2.step,
    currentStep = _ref2.currentStep,
    label = _ref2.label;
  var isActive = step <= currentStep;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center relative z-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-10 h-10 rounded-full flex items-center justify-center ".concat(isActive ? "bg-red-800 text-white" : "bg-gray-200 text-gray-500", " font-medium transition-all duration-300")
  }, step), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs mt-2 ".concat(isActive ? "text-red-800" : "text-gray-500")
  }, label));
};

// Input field component with animation
var InputField = function InputField(_ref3) {
  var name = _ref3.name,
    type = _ref3.type,
    placeholder = _ref3.placeholder,
    value = _ref3.value,
    onChange = _ref3.onChange,
    icon = _ref3.icon;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFocused = _useState8[0],
    setIsFocused = _useState8[1];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative rounded-full border ".concat(isFocused ? "border-red-500 shadow-sm" : "border-gray-300", " transition-all duration-300 overflow-hidden")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center px-6"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-400 mr-3"
  }, icon), /*#__PURE__*/_react["default"].createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: function onBlur() {
      return setIsFocused(false);
    },
    className: "w-full py-4 bg-transparent placeholder-gray-400 text-gray-800 focus:outline-none",
    required: true
  })));
};
var _default = exports["default"] = Registration;