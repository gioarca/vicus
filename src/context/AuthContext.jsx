// import React, { createContext, useState, useEffect } from "react";
// import jwtDecode from "jwt-decode";

// // Crea il contesto di autenticazione
// export const AuthContext = createContext();

// // Fornisci il contesto di autenticazione
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // // Controlla se c'è un utente autenticato al montaggio del componente // Google
//   // useEffect(() => {
//   //   const userInfo = localStorage.getItem("userInfo");
//   //   if (userInfo) {
//   //     setUser(JSON.parse(userInfo));
//   //   }
//   // }, []);

//   // Funzione di login di google / precedente auth
//   // const login = async (email, password) => {
//   //   const { data } = await axios.post("/api/users/login", { email, password });
//   //   setUser(data);
//   //   localStorage.setItem("userInfo", JSON.stringify(data));
//   // };

//   // Funzione di login
//   const login = async (email, password) => {
//     const res = await fetch("http://localhost:3000/user/sign-in", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       setUser(data.user);
//       setToken(data.token); // Memorizza il token JWT
//       localStorage.setItem("jwt", data.token); // Persisti nel localStorage
//     }
//   };

//   // Funzione di logout
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("jwt");
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem("jwt");
//     if (storedToken) {
//       setToken(storedToken);
//       // Opzionale: verifica il token con il server
//     }
//     const token = localStorage.getItem("authToken");

//     if (token) {
//       try {
//         // Decodifica il token JWT per ottenere i dati utente
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//       } catch (err) {
//         console.error("Token non valido:", err);
//         localStorage.removeItem("authToken");
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook per usare il contesto di autenticazione
// // export function useAuth() {
// //   return useContext(AuthContext);
// // }

// // export default AuthProvider;

// export const useAuthContext = () => React.useContext(AuthContext);

import { createContext, useReducer, useEffect, useState } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
};

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state]);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedToken && storedUser) {
      const currentTime = Date.now();
      const isTokenExpired =
        storedToken.expiration && storedToken.expiration < currentTime;

      if (isTokenExpired) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      } else {
        dispatch({
          type: "LOGIN",
          payload: { user: storedUser, token: storedToken },
        });
      }
    }
    setLoading(false);
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{ user: state.user, token: state.token, dispatch, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
