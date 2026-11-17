
import { Link, NavLink } from "react-router";
import "./Navbar.css";

function Navbar({ isAuthenticated = false, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg stackup-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="src\assets\stackup-logo-navbar.png"
            alt="StackUp"
            className="stackup-logo"
          />
        </Link>

        {/* Menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarStackUp"
          aria-controls="navbarStackUp"
          aria-expanded="false"
          aria-label="Afficher le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="navbarStackUp"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Accueil
              </NavLink>
            </li>

            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/inscription">
                    Inscription
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link btn-connexion"
                    to="/connexion"
                  >
                    Connexion
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-connexion"
                  type="button"
                  onClick={onLogout}
                >
                  Déconnexion
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
