import React from "react";
// import AuthProvider from "../context/AuthContext";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
import { AuthContextProvider } from "../context/AuthContext";
import { useAuthContext } from "../hooks/auth/useAuthContext.js";

// import Home from "./Home";
import HomeReal from "./HomeReal";
import About from "./About";
import Borgo from "./Borghi/Borgo";
import Login from "./Login";
import Borghi from "./Borghi/Borghi.jsx";
import Registration from "./Registration";
import Contacts from "./Contacts";
import Work from "./Work";
import Thanks from "./Thanks";
import News from "./News";
import Nav from "../components/Nav";
import Dashboard from "./Dashboard";
import SignOut from "./SignOut";
import Goals from "./Goals";
import Support from "./Support";
import AddBorgo from "./Borghi/AddBorgo";
import Favourites from "./Borghi/Favourites";
// import AdminBorghi from "./AdminBorghi";
// import Loader from "../components/Loader";
import RegistrationAdmin from "../pages/RegistrationAdmin";
import DashboardAdmin from "./DashboardAdmin";
import Delete from "./Borghi/DeleteBorgo";
import Update from "./Borghi/UpdateBorgo";
import BorghiToUpdate from "./Borghi/BorghiToUpdate";
import Reservation from "./Reservation";
import EmailVerified from "../components/Utils/EmailVerified.jsx";
import PasswordResetRequest from "../pages/PasswordReset/PasswordResetRequest.jsx";
import PasswordReset from "../pages/PasswordReset/PasswordReset.jsx";
import PrivateRoute from "../components/PrivateRoute";
import UpdateProfile from "./UpdateProfile.jsx";

function Pages() {
  const { user } = useAuthContext();
  const location = useLocation();
  // const [user, setUser] = useState(null);
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //     setIsFetching(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  // if (isFetching) {
  //   return <Loader />;
  // }

  return (
    <AuthContextProvider>
      <>
        <Nav />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<HomeReal />} />
            <Route path="/about" element={<About />} />
            <Route path="/borghi/:_id" element={<Borgo />} />
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/borghi" element={<Borghi />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/thankyouforyoursupport" element={<Support />} />
            <Route path="/workinprogress" element={<Work />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/signout" element={<SignOut />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/addBorgo" element={<AddBorgo />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/reservation" element={<Reservation />} />
            {/* <Route path="/adminborghi" element={<AdminBorghi />} /> */}
            <Route path="/registrationadmin" element={<RegistrationAdmin />} />
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/deleteborgo" element={<Delete />} />
            <Route path="/updateborgo/:_id" element={<Update />} />
            <Route path="/updateborgo" element={<BorghiToUpdate />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/user/verify-email/:token"
              element={<EmailVerified model="user" />}
            />
            <Route
              path="/admin/verify-email/:token"
              element={<EmailVerified model="admin" />}
            />

            <Route
              path="/user/password-reset"
              element={<PasswordResetRequest model="user" />}
            />
            <Route
              path="/admin/password-reset"
              element={<PasswordResetRequest model="admin" />}
            />

            <Route
              path="/user/password-reset/:token"
              element={<PasswordReset model="user" />}
            />
            <Route
              path="/admin/password-reset/:token"
              element={<PasswordReset model="admin" />}
            />

            <Route
              path="/user/update/"
              element={<UpdateProfile model="user" />}
            />
          </Routes>
        </AnimatePresence>
      </>
    </AuthContextProvider>
  );
}

export default Pages;
