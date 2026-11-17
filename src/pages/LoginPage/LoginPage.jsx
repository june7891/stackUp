
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (login(username, password)) {
      navigate("/");
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    }
  }

  return (
    <main className="login-page">
      <div className="login-card">

        <h1 className="login-title">Connexion</h1>

        <p className="login-subtitle">
          Bienvenue sur StackUp !
          Connectez-vous à votre compte.
        </p>

        {error && (
          <div className="login-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label"
            >
              Nom d'utilisateur
            </label>

            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="Votre nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="form-label"
            >
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>

        </form>

        <div className="login-register">
          Pas encore de compte ?{" "}
          <Link to="/inscription">
            S'inscrire
          </Link>
        </div>

      </div>
    </main>
  );
}

export default LoginPage;
