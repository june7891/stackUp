import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'

import { deleteOffre, getOffreById, updateAvailability } from '../../services/offreService';
import { useAuth } from '../../hooks/useAuth';
import "./OffreDetailsPage.css";

function OffreDetailsPage() {
  const [offre, setOffre] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user); 

  useEffect(() => {
    getOffreById(id)
      .then(data => setOffre(data))
      .catch(error => {
        console.error(error);
        setError("Impossible de charger cette offre.");
      });
  }, [id]);

  async function handleDelete() {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette offre ?"
    );

    if (!isConfirmed) return;

    try {
      await deleteOffre(id);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erreur de suppression");
    }
  }

  async function handleAvailability() {
    try {
      const updatedOffre = await updateAvailability(id, offre.statut);
      setOffre(updatedOffre);
    } catch (error) {
      console.error(error);
      alert("Erreur de mise à jour de disponibilité");
    }
  }

  function handleUpdate() {
    console.log("Bouton modifier cliqué");
    // À relier à ta page de modification
  }

  if (error) {
    return (
      <main className="offre-details-page">
        <p role="alert">{error}</p>
      </main>
    );
  }

  if (!offre) {
    return (
      <main className="offre-details-page">
        <p>Chargement des détails de l'offre...</p>
      </main>
    );
  }

  const informations = [
    { label: "Localisation", value: offre.localisation },
    { label: "Télétravail", value: offre.teletravail },
    { label: "Type de contrat", value: offre.type },
    { label: "Salaire", value: offre.salaire },
    { label: "Expérience", value: offre.experience },
    { label: "Niveau d'étude", value: offre.niveauEtude },
    { label: "Domaine", value: offre.domaine }
  ];

  return (
    <main className="offre-details-page">
      <div className="offre-details-container">

        <Link to="/" className="offre-back">
          ← Retour à la page d'accueil
        </Link>

        <article className="offre-details-card">

          <header className="offre-details-header">
            <div>
              <h1 className="offre-details-title">
                {offre.titre}
              </h1>

              <p className="offre-details-company">
                {offre.entreprise}
              </p>
            </div>

            <span
              className={`offre-status ${
                offre.statut ? "active" : "inactive"
              }`}
            >
              {offre.statut ? "Active" : "Désactivée"}
            </span>
          </header>

          <section className="offre-section">
            <h2 className="offre-section-title">
              Description du poste
            </h2>

            <p className="offre-description">
              {offre.description}
            </p>
          </section>

          <section className="offre-section">
            <h2 className="offre-section-title">
              Informations sur l'offre
            </h2>

            <div className="offre-info-grid">
              {informations.map((info) => (
                <div
                  className="offre-info-item"
                  key={info.label}
                >
                  <span className="offre-info-label">
                    {info.label}
                  </span>

                  <span className="offre-info-value">
                    {info.value ?? "Non renseigné"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="offre-section">
            <h2 className="offre-section-title">
              Compétences requises
            </h2>

            <ul className="offre-competences">
              {(offre.competences ?? []).map((competence, index) => (
                <li
                  className="offre-competence"
                  key={`${competence}-${index}`}
                >
                  {competence}
                </li>
              ))}
            </ul>
          </section>

          <div className="offre-actions">
            {user?.role === "admin" ? (
              <>
                <button
                  type="button"
                  className="offre-action-btn offre-btn-primary"
                  onClick={handleAvailability}
                >
                  Changer le statut
                </button>

                <button
                  type="button"
                  className="offre-action-btn offre-btn-edit"
                  onClick={handleUpdate}
                >
                  Modifier
                </button>

                <button
                  type="button"
                  className="offre-action-btn offre-btn-delete"
                  onClick={handleDelete}
                >
                  Supprimer
                </button>
              </>
            ) : (
              <button
                type="button"
                className="offre-action-btn offre-btn-primary"
                onClick={() => navigate(`/candidate/${offre.id}`)}
              >
                Postuler
              </button>
            )}
          </div>

        </article>
      </div>
    </main>
  );
}

export default OffreDetailsPage;