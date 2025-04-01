"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
require("./App.css");
var _AuthContext = require("./context/AuthContext.jsx");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
_client["default"].createRoot(document.getElementById("root")).render(/*#__PURE__*/_react["default"].createElement(_AuthContext.AuthContextProvider, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));