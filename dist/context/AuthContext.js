"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = exports.AuthContextProvider = exports.AuthContext = void 0;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AuthContext = exports.AuthContext = /*#__PURE__*/(0, _react.createContext)();
var authReducer = exports.authReducer = function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      return {
        user: null,
        token: null
      };
    default:
      return state;
  }
};
var AuthContextProvider = exports.AuthContextProvider = function AuthContextProvider(_ref) {
  var children = _ref.children;
  // Inizializza lo stato solo quando il componente viene montato
  var _useReducer = (0, _react.useReducer)(authReducer, {
      user: null,
      token: null
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];

  // Carica i dati da localStorage solo una volta all'avvio
  (0, _react.useEffect)(function () {
    try {
      var tokenFromStorage = localStorage.getItem("token");
      var userFromStorage = localStorage.getItem("user");
      var storedToken = tokenFromStorage ? JSON.parse(tokenFromStorage) : null;
      var storedUser = userFromStorage ? JSON.parse(userFromStorage) : null;
      if (storedToken && storedUser) {
        var currentTime = Date.now();
        var isTokenExpired = storedToken.expiration && storedToken.expiration < currentTime;
        if (isTokenExpired) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          dispatch({
            type: "LOGOUT"
          });
        } else {
          dispatch({
            type: "LOGIN",
            payload: {
              user: storedUser,
              token: storedToken
            }
          });
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading auth state:", error);
      setLoading(false);
    }
  }, []);

  // Salva in localStorage quando state cambia, ma evita il primo rendering
  (0, _react.useEffect)(function () {
    if (!loading) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    }
  }, [state, loading]);
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      user: state.user,
      token: state.token,
      dispatch: dispatch,
      loading: loading
    }
  }, children);
};