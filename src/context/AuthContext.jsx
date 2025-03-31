import { createContext, useReducer, useEffect, useState } from "react";

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
  // Inizializza lo stato solo quando il componente viene montato
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });
  const [loading, setLoading] = useState(true);

  // Carica i dati da localStorage solo una volta all'avvio
  useEffect(() => {
    try {
      const tokenFromStorage = localStorage.getItem("token");
      const userFromStorage = localStorage.getItem("user");

      const storedToken = tokenFromStorage
        ? JSON.parse(tokenFromStorage)
        : null;
      const storedUser = userFromStorage ? JSON.parse(userFromStorage) : null;

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
    } catch (error) {
      console.error("Error loading auth state:", error);
      setLoading(false);
    }
  }, []);

  // Salva in localStorage quando state cambia, ma evita il primo rendering
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
    }
  }, [state, loading]);

  return (
    <AuthContext.Provider
      value={{ user: state.user, token: state.token, dispatch, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
