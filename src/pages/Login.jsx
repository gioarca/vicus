import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";

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

  // Sign in with Facebook
  const facebookProvider = new GoogleAuthProvider();
  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
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
    // <div className="shadow-xl mt-32 p-10 text-center justify-center items-center rounded-lg">
    //   <h2 className="text-3xl font-medium ">Join today</h2>
    //   <div className="py-4">
    //     <h3 className="py-4">Sign in with one of the providers</h3>
    //   </div>
    //   <div className="flex flex-col gap-4">
    //     <CgGoogle className="text-2xl" />
    //     <button onClick={googleLogin}>Sign in with Google</button>
    //   </div>
    //   <div>
    //     <AiFillFacebook className="text-2xl" />
    //     <button>Sign in with Facebook</button>
    //   </div>
    // </div>

    // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    // const REGISTER_URL = "/register";

    <div className="min-h-full bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Bentornata/o
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  onClick={googleLogin}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <Link to={"/dashboard"}>
                    <FcGoogle className="bg-white h-10 w-10 rounded-full inline-block" />
                    <span className="ml-4">Accedi con Google</span>
                  </Link>
                </button>

                <button
                  // onClick={facebookLogin}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <Link to={"/dashboard"}>
                    <AiFillFacebook className="h-10 w-10 inline-block" />
                    <span className="ml-4">Accedi con Facebook</span>
                  </Link>
                </button>
                {/* Iscriviti con GitHub, prossimamente */}
                {/* <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fillRule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Continua con GitHub</span>
                </button> */}

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-transparent border-2 border-red-500 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5">
                  <Link to={"/registrazione"}>
                    <span>Non hai un account? Clicca qui</span>
                  </Link>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-transparent border-2 border-red-500 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-white hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5">
                  <Link to={"/contatti"}>
                    <span>
                      Sei un'amministrazione o hai una struttura? Clicca qui per
                      collaborare
                    </span>
                  </Link>
                </button>

                {/* <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  <p>Oppure continua con Email</p>
                </div>
              </div>

              <div className="lg:max-w-l flex flex-col items-center">
                {/* Input fields for email and password 
                <input
                  className="w-full max-w-xs px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  className="w-full max-w-xs px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {/* Sign up button 
                <button
                  className="w-full max-w-xs font-bold shadow-sm py-3 flex items-center justify-center bg-red-800 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:border hover:border-red-800 hover:transition hover:ease-in-out focus:shadow-sm focus:shadow-outline mt-5"
                  onClick={handleSignUp}
                >
                  <span>Iscriviti</span>
                </button> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
