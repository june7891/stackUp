
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Récupérer l'utilisateur sauvegardé
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user");
  });

  function login(username, password) {
    if (username === "toto" && password === "123456") {

      setUser(username);

      // Sauvegarder la connexion
      localStorage.setItem("user", username);

      return true;
    }

    return false;
  }

  function logout() {
    setUser(null);

    // Supprimer la connexion sauvegardée
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
