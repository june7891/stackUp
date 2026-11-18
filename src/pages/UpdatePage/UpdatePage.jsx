
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getOffreById, updateOffre } from "../../services/offreService";
import { useAuth } from "../../hooks/useAuth";
import "./UpdatePage.css";

function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [offre, setOffre] = useState(null);
  const [competencesText, setCompetencesText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Charger l'offre existante
  useEffect(() => {
    getOffreById(id)
      .then((data) => {
        setOffre(data);

        setCompetencesText(
          Array.isArray(data.competences)
            ? data.competences.join(", ")
            : data.competences ?? ""
        );
      })
      .catch((error) => {
        console.error(error);
        setError("Impossible de charger l'offre.");
      });
  }, [id]);

  // Modifier les champs du formulaire
  function handleChange(e) {
    const { name, value } = e.target;

    setOffre((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Modifier le statut
  function handleStatut(e) {
    setOffre((prev) => ({
      ...prev,
      statut: e.target.value === "true",
    }));
  }

  // Enregistrer les modifications
  async function handleSubmit(e) {
    e.preventDefault();

    if (!user || !offre || loading) return;

    const updatedOffre = {
      ...offre,
      competences: competencesText
        .split(",")
        .map((competence) => competence.trim())
        .filter((competence) => competence !== ""),
    };

    try {
      setLoading(true);
      setError("");

      await updateOffre(id, updatedOffre);

      alert("Offre modifiée avec succès !");
      navigate("/");

    } catch (error) {
      console.error(error);
      setError("Erreur lors de la modification de l'offre.");
    } finally {
      setLoading(false);
    }
  }

  // Retour à l'accueil
  function handleRetour() {
    navigate("/");
  }

  // Accès réservé aux utilisateurs connectés
  if (!user) {
    return (
      <div className="update-page">
        <div className="update-container">
          <div className="update-form-card">
            <h2 className="update-title">Accès réservé</h2>
            <p className="update-intro mb-4">
              Connectez-vous pour modifier une offre d'emploi.
            </p>
            <Link to="/login" className="update-btn-save d-inline-block">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Erreur de chargement
  if (error && !offre) {
    return (
      <div className="update-page">
        <div className="update-container">
          <div className="update-form-card">
            <div className="update-error">{error}</div>

            <button
              type="button"
              className="update-btn-cancel"
              onClick={handleRetour}
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Chargement
  if (!offre) {
    return (
      <div className="update-page">
        <div className="update-container">
          <p className="update-intro">
            Chargement de l'offre...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="update-page">
      <div className="update-container">

        {/* En-tête */}
        <div className="update-hero">

          <p className="update-eyebrow">
            ESPACE RECRUTEUR
          </p>

          <h1 className="update-title">
            Modifier une <span>offre d'emploi</span>
          </h1>

          <p className="update-intro">
            Mettez à jour les informations de votre offre
            et enregistrez vos modifications.
          </p>

        </div>

        {/* Formulaire */}
        <div className="update-form-card">

          {error && (
            <div className="update-error" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Titre */}
            <div className="mb-3">
              <label htmlFor="titre" className="form-label">
                Titre de l'offre
              </label>
              <input
                id="titre"
                type="text"
                name="titre"
                className="form-control"
                value={offre.titre ?? ""}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="5"
                value={offre.description ?? ""}
                onChange={handleChange}
                required
              />
            </div>

            {/* Entreprise et localisation */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="entreprise" className="form-label">
                  Entreprise
                </label>
                <input
                  id="entreprise"
                  type="text"
                  name="entreprise"
                  className="form-control"
                  value={offre.entreprise ?? ""}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="localisation" className="form-label">
                  Localisation
                </label>
                <input
                  id="localisation"
                  type="text"
                  name="localisation"
                  className="form-control"
                  value={offre.localisation ?? ""}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Contrat et télétravail */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="type" className="form-label">
                  Type de contrat
                </label>
                <input
                  id="type"
                  type="text"
                  name="type"
                  className="form-control"
                  value={offre.type ?? ""}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="teletravail" className="form-label">
                  Télétravail
                </label>
                <input
                  id="teletravail"
                  type="text"
                  name="teletravail"
                  className="form-control"
                  value={offre.teletravail ?? ""}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Salaire et expérience */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="salaire" className="form-label">
                  Salaire
                </label>
                <input
                  id="salaire"
                  type="text"
                  name="salaire"
                  className="form-control"
                  value={offre.salaire ?? ""}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="experience" className="form-label">
                  Expérience
                </label>
                <input
                  id="experience"
                  type="text"
                  name="experience"
                  className="form-control"
                  value={offre.experience ?? ""}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Niveau d'étude et domaine */}
            <div className="row">

              <div className="col-md-6 mb-3">
                <label htmlFor="niveauEtude" className="form-label">
                  Niveau d'étude
                </label>
                <input
                  id="niveauEtude"
                  type="text"
                  name="niveauEtude"
                  className="form-control"
                  value={offre.niveauEtude ?? ""}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="domaine" className="form-label">
                  Domaine
                </label>
                <input
                  id="domaine"
                  type="text"
                  name="domaine"
                  className="form-control"
                  value={offre.domaine ?? ""}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Compétences */}
            <div className="mb-3">
              <label htmlFor="competences" className="form-label">
                Compétences requises
              </label>
              <input
                id="competences"
                type="text"
                className="form-control"
                value={competencesText}
                onChange={(e) =>
                  setCompetencesText(e.target.value)
                }
                placeholder="React, JavaScript, SQL..."
              />
            </div>

            {/* Statut */}
            <div className="mb-3">
              <label htmlFor="statut" className="form-label">
                Statut de l'offre
              </label>
              <select
                id="statut"
                name="statut"
                className="form-select"
                value={String(offre.statut ?? true)}
                onChange={handleStatut}
              >
                <option value="true">Active</option>
                <option value="false">Désactivée</option>
              </select>
            </div>

            {/* Boutons */}
            <div className="update-actions">

              <button
                type="submit"
                className="update-btn-save"
                disabled={loading}
              >
                {loading
                  ? "Enregistrement..."
                  : "Enregistrer les modifications"}
              </button>

              <button
                type="button"
                className="update-btn-cancel"
                onClick={handleRetour}
              >
                Annuler
              </button>

            </div>

          </form>

        </div>

        {/* Retour accueil */}
        <div className="mt-4">
          <Link to="/" className="update-btn-cancel d-inline-block">
            ← Retour à l'accueil
          </Link>
        </div>

      </div>
    </div>
  );
}

export default UpdatePage;
