import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";

function Login() {
  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  // Sign in with Email
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    // Simulated registration logic
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your actual registration logic here
  };

  // const handleSignUp = () => {
  //   // Simulated registration logic
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   // Add your actual registration logic here
  // };

  return (
    // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    // const REGISTER_URL = "/register";

    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Bentornat*{" "}
              <span role="img" aria-label="hi" className="h-5">
                👋
              </span>
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={googleLogin}
                  className="w-full max-w-xs font-bold shadow-sm rounded-full py-3 bg-transparent border-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <Link to={"/dashboard"}>
                    <FcGoogle className="bg-white h-10 w-10 rounded-full inline-block" />
                    <span className="ml-4">Accedi con Google</span>
                  </Link>
                </button>
                {/* Agreement text */}
                <p className="m-5 text-xs text-gray-600 text-center">
                  Continuando accetti i &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    termini del servizio
                  </a>
                  &nbsp; e la &nbsp;
                  <a href="" className="border-b border-gray-500 border-dotted">
                    privacy policy
                  </a>
                </p>

                {/* Input fields for email and password */}
                <div className="lg:max-w-xl flex flex-col items-center">
                  <div className="leading px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    <p>Oppure continua con Email e Password</p>
                  </div>
                </div>

                <div className="sm:w-96 flex flex-col items-center">
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    className="sm:w-96 w-80 px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  {/* Sign in button */}
                  <button
                    className="sm:w-96 w-80 font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                    onClick={handleSignUp}
                  >
                    <Link to={"/dashboard"}>
                      <span>Accedi</span>
                    </Link>
                  </button>

                  {/* Hai già un account? */}
                  <button className="w-full max-w-xs mt-10 font-bold shadow-sm rounded-lg py-3 bg-transparent border-none border-slate text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline">
                    <Link to={"/registrazione"}>
                      <span>
                        Non hai un account?{" "}
                        <p className="text-red-600">Clicca qui</p>
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
