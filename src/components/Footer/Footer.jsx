
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  return (
    <footer className="stackup-footer">
      <div className="stackup-footer-container">
        <div className="stackup-footer-main">
          <div className="stackup-footer-brand">
            <h2>
              Stack<span>Up</span>
            </h2>
            <p>Votre avenir commence ici.</p>
          </div>

          <nav className="stackup-footer-links">
            <Link to="/">Offres</Link>
            {/* <Link to="/login">Mentions Légales</Link> */}
            <Link to="/mentions-legales">Mentions légales</Link>
            <a href="mailto:contact@stackup.fr">Contact</a>
          </nav>
        </div>

        <div className="stackup-footer-bottom">
          <p>
            © {new Date().getFullYear()} StackUp —
            Tous droits réservés
          </p>
          <span>Bordeaux, France</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
