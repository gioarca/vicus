"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../../components/Loader"));
var _uuid = require("uuid");
var _solid = require("@heroicons/react/20/solid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import { v4 as uuidv4 } from "uuid";
// import { HeartIcon } from "@heroicons/react/outline";
// function Favourites() {
//   const [borghi, setBorghi] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [allBorghi, setAllBorghi] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [showFavorites, setShowFavorites] = useState(false); // Stato per visualizzare i preferiti
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchDetails = async () => {
//       try {
//         setTimeout(async () => {
//           setIsLoading(true);
//           const data = await fetch(
//             // `https://borghi-backend.onrender.com/api/v1/borghi/?limit=15&page=${currentPage}`
//             `http://localhost:3000/api/v1/borghi/?limit=15&page=${currentPage}`
//           );
//           const { borghi: initialBorghi, totalPages } = await data.json();
//           setBorghi(initialBorghi.sort((a, b) => a.name.localeCompare(b.name)));
//           setTotalPages(totalPages);
//           setIsLoading(false);
//           setAllBorghi(initialBorghi);
//         });
//       } catch (error) {
//         console.error("Errore durante il fetching dei borghi:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [currentPage]);
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);
//   const handleFavoriteToggle = (borgo) => {
//     let updatedFavorites;
//     if (favorites.includes(borgo._id)) {
//       updatedFavorites = favorites.filter((favId) => favId !== borgo._id);
//     } else {
//       updatedFavorites = [...favorites, borgo._id];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };
//   const handleLoadMore = async () => {
//     try {
//       setIsLoading(true);
//       const nextPage = currentPage + 1;
//       const limit = 5;
//       const data = await fetch(
//         `https://borghi-backend.onrender.com/api/v1/borghi/?limit=${limit}&page=${nextPage}`
//       );
//       if (!data.ok) {
//         throw new Error(`Errore durante la richiesta API: ${data.statusText}`);
//       }
//       const { borghi: fetchedBorghi, totalPages } = await data.json();
//       setAllBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]);
//       setBorghi((prevBorghi) => [...prevBorghi, ...fetchedBorghi]);
//       setTotalPages(totalPages);
//       setCurrentPage(nextPage);
//     } catch (error) {
//       console.error("Errore durante il fetching dei borghi:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const favoriteBorghi = allBorghi.filter((borgo) =>
//     favorites.includes(borgo._id)
//   );
//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="flex-wrap m-4 text-center justify-center">
//         <p>Qui trovi i tuoi borghi preferiti</p>
//         <button
//           onClick={() => setShowFavorites(!showFavorites)}
//           className="m-2 w-80 font-bold shadow-sm p-3 bg-blue-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-blue-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
//         >
//           {showFavorites ? "Mostra Tutti i Borghi" : "Mostra Preferiti"}
//         </button>
//       </div>
//       <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
//         {(showFavorites ? favoriteBorghi : borghi).map((borgo) => {
//           const uniqueKey = uuidv4();
//           const isFavorite = favorites.includes(borgo._id);
//           return (
//             <div
//               className="max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
//               key={uniqueKey}
//             >
//               <Link to={"/borgo/" + (borgo._id ? borgo._id : "")}>
//                 <img
//                   className="w-auto overflow-hidden m-auto"
//                   src={borgo.imgURL}
//                   alt={borgo.name}
//                 />
//                 <h1 className="flex flex-col text-center justify-center font-semibold mt-5">
//                   {borgo.name}
//                 </h1>
//               </Link>
//               <button onClick={() => handleFavoriteToggle(borgo)}>
//                 <HeartIcon
//                   className={`float-right my-3 mx-5 h-6 ${
//                     isFavorite ? "text-red-500" : "text-gray-500"
//                   }`}
//                 />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//       {!showFavorites && currentPage < totalPages && (
//         <div className="flex items-center text-center justify-center">
//           <button
//             onClick={handleLoadMore}
//             className="w-80 font-bold shadow-sm py-3 bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline"
//           >
//             Carica più borghi
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Favourites;
function Favourites() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    favoriteBorghi = _useState2[0],
    setFavoriteBorghi = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    favorites = _useState6[0],
    setFavorites = _useState6[1];
  (0, _react.useEffect)(function () {
    // Carica gli ID dei preferiti dal localStorage
    var savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    // Fetch dei borghi preferiti
    var fetchFavorites = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var baseURL, response, _yield$response$json, borghi, filteredFavorites;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://borghi-backend.onrender.com";
              _context.prev = 1;
              _context.next = 4;
              return fetch("".concat(baseURL, "/borghi"));
            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();
            case 7:
              _yield$response$json = _context.sent;
              borghi = _yield$response$json.borghi;
              filteredFavorites = borghi.filter(function (borgo) {
                return savedFavorites.includes(borgo._id);
              });
              setFavoriteBorghi(filteredFavorites);
              _context.next = 16;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.error("Errore durante il fetching dei borghi:", _context.t0);
            case 16:
              _context.prev = 16;
              setIsLoading(false);
              return _context.finish(16);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 13, 16, 19]]);
      }));
      return function fetchFavorites() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchFavorites();
  }, []);
  var handleFavoriteToggle = function handleFavoriteToggle(borgo) {
    var isFavorite = favorites.includes(borgo._id);
    var updatedFavorites = isFavorite ? favorites.filter(function (favId) {
      return favId !== borgo._id;
    }) : [].concat(_toConsumableArray(favorites), [borgo._id]);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Aggiorna la lista dei borghi preferiti
    setFavoriteBorghi(favoriteBorghi.filter(function (b) {
      return updatedFavorites.includes(b._id);
    }));
  };
  if (isLoading) return /*#__PURE__*/_react["default"].createElement(_Loader["default"], null);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-4 text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-lg font-bold mb-4"
  }, "Qui trovi i tuoi borghi preferiti"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, favoriteBorghi.map(function (borgo) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "max-w-80 rounded-lg overflow-hidden shadow-xl m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
      key: (0, _uuid.v4)()
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: "/borghi/".concat(borgo._id)
    }, /*#__PURE__*/_react["default"].createElement("img", {
      className: "w-auto m-auto",
      src: borgo.imgURL,
      alt: borgo.name
    }), /*#__PURE__*/_react["default"].createElement("h1", {
      className: "text-center font-semibold mt-5"
    }, borgo.name)), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleFavoriteToggle(borgo);
      }
    }, /*#__PURE__*/_react["default"].createElement(_solid.HeartIcon, {
      className: "float-right my-3 mx-5 h-6 ".concat(favorites.includes(borgo._id) ? "text-red-500" : "text-gray-500")
    })));
  })));
}
var _default = exports["default"] = Favourites;