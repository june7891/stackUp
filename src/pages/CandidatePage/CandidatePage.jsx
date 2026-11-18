import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import "./CandidatePage.css";
import { getOffreById } from "../../services/offreService";

function CandidatePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const [offre, setOffre] = useState(null)

  useEffect(() => {
    getOffreById(id)
      .then((data) => setOffre(data))
       .catch(error => console.log(error))
    
  }, [id]);
  

  const [motivation, setMotivation] = useState("");
  const [cv, setCv] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    // Frontend uniquement
    console.log("ID de l'offre :", id);
    console.log("Utilisateur :", user);
    console.log("Motivation :", motivation);
    console.log("CV :", cv);

    alert("Formulaire prêt ! L'envoi sera ajouté plus tard.");
  }

  return (
    <main className="postuler-page">
      <div className="postuler-container">

        <Link to="/" className="postuler-back">
          ← Retour aux offres
        </Link>

        <div className="postuler-card">
          <h1 className="postuler-title">
            Postuler à une offre
          </h1>

          <p className="postuler-subtitle">
            Complétez votre candidature pour cette offre d'emploi.
          </p>

          <div className="postuler-offre">
            <span>Référence de l'offre</span>
            <strong>Offre n° {id} {offre?.titre}</strong>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Nom d'utilisateur
              </label>
              <input
                type="text"
                className="form-control"
                value={user?.username || ""}
                disabled
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Adresse email
              </label>
              <input
                type="email"
                className="form-control"
                value={user?.email || ""}
                disabled
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="motivation"
                className="form-label"
              >
                Lettre de motivation
              </label>

              <textarea
                id="motivation"
                className="form-control"
                rows="6"
                placeholder="Présentez votre parcours et vos motivations..."
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cv" className="form-label">
                Votre CV (PDF)
              </label>

              <input
                id="cv"
                type="file"
                className="form-control"
                accept=".pdf,application/pdf"
                onChange={(e) =>
                  setCv(e.target.files?.[0] || null)
                }
                required
              />
            </div>

            <button
              type="submit"
              className="postuler-btn"
            >
              Envoyer ma candidature
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}

export default CandidatePage;