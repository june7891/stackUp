
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Récupérer l'utilisateur sauvegardé
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user");
  });

async function login(username, password) {
  const response = await fetch("http://localhost:3000/users");

  if (!response.ok) {
    throw new Error("Erreur lors de la connexion");
  }

  const users = await response.json();

  // Rechercher l'utilisateur correspondant
  const foundUser = users.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  if (foundUser) {
    // Enregistrer l'utilisateur connecté
    setUser(foundUser.username);

    // Sauvegarder la connexion
    localStorage.setItem("user", foundUser.username);

    return true;
  }

  return false;
}

  function logout() {
    setUser(null);

    // Supprimer la connexion sauvegardée
    localStorage.removeItem("user");
  }


  async function register(username, email, password) {
  const response = await fetch("http://localhost:3000/users");

  if (!response.ok) {
    throw new Error("Impossible de vérifier les utilisateurs");
  }

  const users = await response.json();

  // Vérifier si le compte existe
  const exists = users.some(
    (user) => user.username === username || user.email === email
  );

  if (exists) {
    return false;
  }

  // Créer le nouvel utilisateur
  const newUser = {
    username,
    email,
    password
  };

  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  });

  if (!res.ok) {
    throw new Error("Erreur lors de l'inscription");
  }

  return true;
}

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
