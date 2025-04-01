"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _framerMotion = require("framer-motion");
var _AuthContext = require("../context/AuthContext");
var _useAuthContext2 = require("../hooks/auth/useAuthContext.js");
var _HomeReal = _interopRequireDefault(require("./HomeReal"));
var _About = _interopRequireDefault(require("./About"));
var _Borgo = _interopRequireDefault(require("./Borghi/Borgo"));
var _Login = _interopRequireDefault(require("./Login"));
var _Borghi = _interopRequireDefault(require("./Borghi/Borghi.jsx"));
var _Registration = _interopRequireDefault(require("./Registration"));
var _Contacts = _interopRequireDefault(require("./Contacts"));
var _Work = _interopRequireDefault(require("./Work"));
var _Thanks = _interopRequireDefault(require("./Thanks"));
var _News = _interopRequireDefault(require("./News"));
var _Nav = _interopRequireDefault(require("../components/Nav"));
var _Dashboard = _interopRequireDefault(require("./Dashboard"));
var _SignOut = _interopRequireDefault(require("./SignOut"));
var _Goals = _interopRequireDefault(require("./Goals"));
var _Support = _interopRequireDefault(require("./Support"));
var _AddBorgo = _interopRequireDefault(require("./Borghi/AddBorgo"));
var _Favourites = _interopRequireDefault(require("./Borghi/Favourites"));
var _RegistrationAdmin = _interopRequireDefault(require("./RegistrationAdmin"));
var _DashboardAdmin = _interopRequireDefault(require("./DashboardAdmin"));
var _DeleteBorgo = _interopRequireDefault(require("./Borghi/DeleteBorgo"));
var _UpdateBorgo = _interopRequireDefault(require("./Borghi/UpdateBorgo"));
var _BorghiToUpdate = _interopRequireDefault(require("./Borghi/BorghiToUpdate"));
var _Reservation = _interopRequireDefault(require("./Reservation"));
var _EmailVerified = _interopRequireDefault(require("../components/Utils/EmailVerified.jsx"));
var _PasswordResetRequest = _interopRequireDefault(require("../pages/PasswordReset/PasswordResetRequest.jsx"));
var _PasswordReset = _interopRequireDefault(require("../pages/PasswordReset/PasswordReset.jsx"));
var _PrivateRoute = _interopRequireDefault(require("../components/PrivateRoute"));
var _UpdateProfile = _interopRequireDefault(require("./UpdateProfile.jsx"));
var _LoginAdmin = _interopRequireDefault(require("./LoginAdmin.jsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Pages() {
  var _useAuthContext = (0, _useAuthContext2.useAuthContext)(),
    user = _useAuthContext.user,
    admin = _useAuthContext.admin;
  var location = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react["default"].createElement(_AuthContext.AuthContextProvider, null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Nav["default"], null), /*#__PURE__*/_react["default"].createElement(_framerMotion.AnimatePresence, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, {
    location: location,
    key: location.pathname
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_HomeReal["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react["default"].createElement(_About["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/borghi/:_id",
    element: /*#__PURE__*/_react["default"].createElement(_Borgo["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/login",
    element: /*#__PURE__*/_react["default"].createElement(_Login["default"], {
      user: user
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/loginadmin",
    element: /*#__PURE__*/_react["default"].createElement(_LoginAdmin["default"], {
      admin: admin
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/borghi",
    element: /*#__PURE__*/_react["default"].createElement(_Borghi["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/registration",
    element: /*#__PURE__*/_react["default"].createElement(_Registration["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/contacts",
    element: /*#__PURE__*/_react["default"].createElement(_Contacts["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/thanks",
    element: /*#__PURE__*/_react["default"].createElement(_Thanks["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/thankyouforyoursupport",
    element: /*#__PURE__*/_react["default"].createElement(_Support["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/workinprogress",
    element: /*#__PURE__*/_react["default"].createElement(_Work["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/news",
    element: user ? /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], null, /*#__PURE__*/_react["default"].createElement(_News["default"], {
      model: "user"
    })) : /*#__PURE__*/_react["default"].createElement(_Login["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/signout",
    element: /*#__PURE__*/_react["default"].createElement(_SignOut["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/goals",
    element: /*#__PURE__*/_react["default"].createElement(_Goals["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/addBorgo",
    element: admin && admin.token ? /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], null, /*#__PURE__*/_react["default"].createElement(_AddBorgo["default"], null)) : /*#__PURE__*/_react["default"].createElement(_LoginAdmin["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/favourites",
    element: user ? /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], null, /*#__PURE__*/_react["default"].createElement(_Favourites["default"], {
      model: "user"
    })) : /*#__PURE__*/_react["default"].createElement(_Login["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/reservation",
    element: /*#__PURE__*/_react["default"].createElement(_Reservation["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/registrationadmin",
    element: /*#__PURE__*/_react["default"].createElement(_RegistrationAdmin["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/dashboardadmin",
    element: admin && admin.token ? /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], null, /*#__PURE__*/_react["default"].createElement(_DashboardAdmin["default"], {
      model: "admin"
    })) : /*#__PURE__*/_react["default"].createElement(_LoginAdmin["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/deleteborgo",
    element: /*#__PURE__*/_react["default"].createElement(_DeleteBorgo["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/updateborgo/:_id",
    element: /*#__PURE__*/_react["default"].createElement(_UpdateBorgo["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/updateborgo",
    element:
    /*#__PURE__*/
    // <PrivateRoute>
    _react["default"].createElement(_BorghiToUpdate["default"], null)
    // </PrivateRoute>
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: user ? /*#__PURE__*/_react["default"].createElement(_PrivateRoute["default"], null, /*#__PURE__*/_react["default"].createElement(_Dashboard["default"], {
      model: "user"
    })) : /*#__PURE__*/_react["default"].createElement(_Login["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/user/verify-email/:token",
    element: /*#__PURE__*/_react["default"].createElement(_EmailVerified["default"], {
      model: "user"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/admin/verify-email/:token",
    element: /*#__PURE__*/_react["default"].createElement(_EmailVerified["default"], {
      model: "admin"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/user/password-reset",
    element: /*#__PURE__*/_react["default"].createElement(_PasswordResetRequest["default"], {
      model: "user"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/admin/password-reset",
    element: /*#__PURE__*/_react["default"].createElement(_PasswordResetRequest["default"], {
      model: "admin"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/user/password-reset/:token",
    element: /*#__PURE__*/_react["default"].createElement(_PasswordReset["default"], {
      model: "user"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/admin/password-reset/:token",
    element: /*#__PURE__*/_react["default"].createElement(_PasswordReset["default"], {
      model: "admin"
    })
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/user/update/",
    element: /*#__PURE__*/_react["default"].createElement(_UpdateProfile["default"], {
      model: "user"
    })
  })))));
}
var _default = exports["default"] = Pages;