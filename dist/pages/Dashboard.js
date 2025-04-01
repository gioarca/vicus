"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactI18next = require("react-i18next");
var _useAuthContext2 = require("../hooks/auth/useAuthContext");
var _useManageAuth2 = require("../hooks/auth/useManageAuth");
var _useManageUsers2 = require("../hooks/users/useManageUsers");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import React, { useState, useContext } from "react";
// // import { auth } from "../utils/firebase";
// // import { useAuthState } from "react-firebase-hooks/auth";
// // import Loader from "../components/Loader";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useManageAuth } from "../hooks/auth/useManageAuth";
// // import { useAuthContext } from "../hooks/auth/useAuthContext";
// // import { AuthProvider } from "../context/AuthContext";
// import { useAuthContext } from "../hooks/auth/useAuthContext";
// import { useManageUsers } from "../hooks/users/useManageUsers";

// function Dashboard() {
//   // const [user, isLoading] = useAuthState(auth);
//   // const { isLoading } = useManageAuth();
//   const { user } = useAuthContext();
//   // const [data] = useState("");
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   // const location = useLocation();

//   // const handleSignOut = () => {
//   //   setTimeout(async () => {
//   //     auth.signOut().then(() => {
//   //       navigate("/signout"); // Reindirizza dopo il logout
//   //     });
//   //   });
//   // };

//   const { logout } = useManageAuth();

//   const { deleteUser } = useManageUsers();

//   const name = user?.firstName || user?.displayName || "User";

//   // if (isLoading)
//   //   return (
//   //     <div>
//   //       <Loader />
//   //     </div>
//   //   );

//   // if (!user) {
//   //   navigate("/login");
//   //   return null;
//   // }

//   // if (data)
//   // if (user || data)
//   return (
//     <div
//       style={{
//         backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//       }}
//       className="min-h-screen z-0 flex justify-center bg-gradient-to-t"
//     >
//       <div className="flex justify-center flex-1 max-w-screen-xl m-0 z-10 bg-white shadow sm:rounded-lg sm:my-20 sm:mx-96">
//         <div className="lg:w-1/2 sm:mx-10">
//           <div className="mt-40 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
//               {t("hello")}, {name} &nbsp;
//               <span role="img" aria-label="hi" className="h-5">
//                 👋
//               </span>
//             </h1>
//             {/* <p className="text-xl">
//                 Welcome, {user?.name || user.displayName || "User"}!
//               </p> */}
//           </div>
//           <div className="text-center m-5">
//             <p>{t("what_you_can_do")}</p>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/borghi"}>
//               <button className="m-5 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-30 md:w-auto sm:text-center">
//                 {t("access_borghi")}
//               </button>
//             </a>
//           </div>

//           {/* <div className="text-center items-center justify-center">
//               <a href={"/addborgo"}>
//                 <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                   Aggiungere un borgo
//                 </button>
//               </a>
//             </div>

//             <div className="text-center items-center justify-center">
//               <a href={"/borghitoupdate"}>
//                 <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                   Modifica un borgo
//                 </button>
//               </a>
//             </div>

//             <div className="text-center items-center justify-center">
//               <a href={"/deleteborgo"}>
//                 <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                   Cancellare un borgo dalla lista
//                 </button>
//               </a>
//             </div> */}

//           <div className="text-center items-center justify-center">
//             <a href={"/favourites"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 {t("your_favourites")}
//               </button>
//             </a>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/user/update"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 {t("update_profile")}
//               </button>
//             </a>
//           </div>
//           <div className="text-center items-center justify-center">
//             <button
//               className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto"
//               onClick={deleteUser}
//             >
//               {t("delete_profile")}
//             </button>
//           </div>

//           <div className="text-center items-center justify-center">
//             <a href={"/news"}>
//               <button
//                 className="md:m-5 md:px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//                 // className="m-5 w-72 py-2 font-semibold bg-red-800
//                 //   text-white rounded-full hover:bg-white hover:text-black
//                 //   hover:border-2 hover:border-red-800 transition-all
//                 //   duration-300 ease-in-out focus:shadow-outline
//                 //   focus:outline-none sm:px-10 md:px-32 md:w-auto"
//               >
//                 {t("read_news")}
//               </button>
//             </a>
//           </div>

//           <div className="text-center items-center justify-center">
//             <button
//               // onClick={handleSignOut}
//               onClick={logout}
//               className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//             >
//               {t("logout")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

function Dashboard() {
  var _useAuthContext = (0, _useAuthContext2.useAuthContext)(),
    user = _useAuthContext.user;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useManageAuth = (0, _useManageAuth2.useManageAuth)(),
    logout = _useManageAuth.logout;
  var _useManageUsers = (0, _useManageUsers2.useManageUsers)(),
    deleteUser = _useManageUsers.deleteUser;
  var name = (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.displayName) || "User";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6)), url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-lg w-full backdrop-blur-sm bg-white/70 shadow-2xl rounded-3xl overflow-hidden border border-white/50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-8 py-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl font-Bold text-gray-800 mb-3"
  }, t("hello"), ", ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium"
  }, name), /*#__PURE__*/_react["default"].createElement("span", {
    role: "img",
    "aria-label": "hi",
    className: "ml-2 animate-pulse"
  }, "\uD83D\uDC4B")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 mb-10 italic font-normal"
  }, t("what_you_can_do"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-5"
  }, menuItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(ActionButton, {
      key: index,
      href: item.href,
      onClick: item.onClick === "logout" ? logout : item.onClick === "deleteUser" ? deleteUser : undefined,
      label: t(item.label),
      icon: item.icon,
      variant: item.variant || "default"
    });
  })))));
}

// Array di configurazione per i pulsanti del menu
var menuItems = [{
  label: "access_borghi",
  href: "/borghi",
  icon: "🏛️"
}, {
  label: "your_favourites",
  href: "/favourites",
  icon: "❤️"
}, {
  label: "update_profile",
  href: "/user/update",
  icon: "✏️"
}, {
  label: "delete_profile",
  onClick: "deleteUser",
  icon: "🗑️"
}, {
  label: "read_news",
  href: "/news",
  icon: "📰"
}, {
  label: "logout",
  onClick: "logout",
  variant: "outline",
  icon: "🚪"
}];

// Componente riutilizzabile per i pulsanti
function ActionButton(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    label = _ref.label,
    icon = _ref.icon,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var baseClasses = "group w-full py-4 px-6 rounded-full flex items-center justify-between text-base font-light transition-all duration-500 ease-in-out focus:outline-none transform hover:scale-102 focus:scale-102";
  var variantClasses = variant === "outline" ? "bg-white/70 text-red-800 border border-red-800/30 hover:bg-red-800/10 hover:border-red-800/70" : "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-md hover:shadow-lg hover:from-red-800 hover:to-red-950";
  var classes = "".concat(baseClasses, " ").concat(variantClasses);
  var content = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex-grow text-left pl-2"
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
  }, icon));
  if (href) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: href,
      className: "block"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: classes
    }, content));
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: classes
  }, content);
}
var _default = exports["default"] = Dashboard;