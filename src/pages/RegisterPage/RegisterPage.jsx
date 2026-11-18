
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import "./RegisterPage.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Vérifier les mots de passe
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérifier la longueur du mot de passe
    if (password.length < 12) {
      setError("Le mot de passe doit contenir au moins 12 caractères.");
      return;
    }

    setLoading(true);

    try {
      const success = await register(username, email, password);

      if (success) {
        // Redirection vers la connexion
        navigate("/login");
      } else {
        setError("Ce nom d'utilisateur ou cet email existe déjà.");
      }
    } catch (err) {
      setError("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-page">
      <div className="register-card">

        <h1 className="register-title">
          Créer un compte
        </h1>

        <p className="register-subtitle">
          Rejoignez StackUp dès aujourd'hui
        </p>

        {error && (
          <div className="register-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Nom d'utilisateur */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
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

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Adresse email
            </label>

            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          {/* Mot de passe */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          {/* Confirmation */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="form-label"
            >
              Confirmer le mot de passe
            </label>

            <input
              id="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirmez votre mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >
            {loading ? "Inscription..." : "Créer mon compte"}
          </button>

        </form>

        <div className="register-login">
          Déjà inscrit ?{" "}
          <Link to="/login">
            Se connecter
          </Link>
        </div>

      </div>
    </main>
  );
}

export default RegisterPage;
