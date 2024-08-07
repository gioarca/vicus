import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Crea il contesto di autenticazione
const AuthContext = createContext();

// Fornisci il contesto di autenticazione
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Controlla se c'è un utente autenticato al montaggio del componente
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  // Funzione di login
  const login = async (email, password) => {
    const { data } = await axios.post("/api/users/login", { email, password });
    setUser(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  // Funzione di logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook per usare il contesto di autenticazione
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
