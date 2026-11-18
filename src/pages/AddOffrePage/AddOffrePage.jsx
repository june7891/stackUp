
import { useState } from "react";
import { useNavigate } from "react-router";
import { addOffre } from "../../services/offreService";
import "./AddOffrePage.css";

function AddOffrePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titre: "",
    entreprise: "",
    localisation: "",
    type: "CDI",
    domaine: "",
    description: "",
    competences: "",
    salaire: "",
    datePublication: new Date().toLocaleDateString("en-CA"),
    dateLimite: "",
    teletravail: "Non",
    niveauEtude: "",
    experience: "",
    statut: true
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Gestion des champs
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Enregistrement de l'offre
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const offre = {
      ...formData,
      competences: formData.competences
        .split(",")
        .map((competence) => competence.trim())
        .filter(Boolean)
    };

    try {
      const newOffre = await addOffre(offre);

      console.log("Offre ajoutée :", newOffre);
      alert("Offre ajoutée avec succès !");
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Erreur lors de l'ajout de l'offre.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="add-page">
      <div className="add-container">

        {/* EN-TÊTE */}
        <header className="add-hero">
          <p className="add-eyebrow">
            ESPACE ADMINISTRATION
          </p>

          <h1 className="add-title">
            Ajouter une <span>offre d'emploi</span>
          </h1>

          <p className="add-intro">
            Renseignez les informations nécessaires pour publier
            une nouvelle opportunité sur StackUp.
          </p>
        </header>

        {/* MESSAGE D'ERREUR */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {/* FORMULAIRE */}
        <form
          onSubmit={handleSubmit}
          className="add-form-card"
        >

          {/* TITRE */}
          <div className="mb-3">
            <label htmlFor="titre" className="form-label">
              Titre du poste
            </label>

            <input
              id="titre"
              type="text"
              name="titre"
              className="form-control"
              value={formData.titre}
              onChange={handleChange}
              placeholder="Ex : Développeur Full Stack"
              required
            />
          </div>

          {/* ENTREPRISE */}
          <div className="mb-3">
            <label htmlFor="entreprise" className="form-label">
              Entreprise
            </label>

            <input
              id="entreprise"
              type="text"
              name="entreprise"
              className="form-control"
              value={formData.entreprise}
              onChange={handleChange}
              placeholder="Ex : Capgemini"
              required
            />
          </div>

          {/* LOCALISATION ET TYPE */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="localisation" className="form-label">
                Localisation
              </label>

              <input
                id="localisation"
                type="text"
                name="localisation"
                className="form-control"
                value={formData.localisation}
                onChange={handleChange}
                placeholder="Ex : Bordeaux"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="type" className="form-label">
                Type de contrat
              </label>

              <select
                id="type"
                name="type"
                className="form-select"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Alternance">Alternance</option>
                <option value="Stage">Stage</option>
                <option value="Freelance">Freelance</option>
                <option value="Intérim">Intérim</option>
              </select>
            </div>
          </div>

          {/* DOMAINE */}
          <div className="mb-3">
            <label htmlFor="domaine" className="form-label">
              Domaine
            </label>

            <input
              id="domaine"
              type="text"
              name="domaine"
              className="form-control"
              value={formData.domaine}
              onChange={handleChange}
              placeholder="Ex : Informatique"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description du poste
            </label>

            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              placeholder="Décrivez les missions et responsabilités..."
              required
            />
          </div>

          {/* COMPÉTENCES */}
          <div className="mb-3">
            <label htmlFor="competences" className="form-label">
              Compétences requises
            </label>

            <input
              id="competences"
              type="text"
              name="competences"
              className="form-control"
              value={formData.competences}
              onChange={handleChange}
              placeholder="React, JavaScript, Node.js, SQL"
            />

            <small className="text-muted">
              Séparez les compétences par des virgules.
            </small>
          </div>

          {/* SALAIRE */}
          <div className="mb-3">
            <label htmlFor="salaire" className="form-label">
              Salaire
            </label>

            <input
              id="salaire"
              type="text"
              name="salaire"
              className="form-control"
              value={formData.salaire}
              onChange={handleChange}
              placeholder="35 000 - 42 000 € / an"
            />
          </div>

          {/* DATES */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="datePublication" className="form-label">
                Date de publication
              </label>

              <input
                id="datePublication"
                type="date"
                name="datePublication"
                className="form-control"
                value={formData.datePublication}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="dateLimite" className="form-label">
                Date limite
              </label>

              <input
                id="dateLimite"
                type="date"
                name="dateLimite"
                className="form-control"
                value={formData.dateLimite}
                min={formData.datePublication}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* TÉLÉTRAVAIL */}
          <div className="mb-3">
            <label htmlFor="teletravail" className="form-label">
              Télétravail
            </label>

            <select
              id="teletravail"
              name="teletravail"
              className="form-select"
              value={formData.teletravail}
              onChange={handleChange}
            >
              <option value="Non">Non</option>
              <option value="Oui">Oui</option>
              <option value="Hybride">Hybride</option>
            </select>
          </div>

          {/* NIVEAU D'ÉTUDE */}
          <div className="mb-3">
            <label htmlFor="niveauEtude" className="form-label">
              Niveau d'étude
            </label>

            <select
              id="niveauEtude"
              name="niveauEtude"
              className="form-select"
              value={formData.niveauEtude}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner</option>
              <option value="Sans diplôme">Sans diplôme</option>
              <option value="Bac">Bac</option>
              <option value="Bac+2">Bac+2</option>
              <option value="Bac+3">Bac+3</option>
              <option value="Bac+5">Bac+5</option>
            </select>
          </div>

          {/* EXPÉRIENCE */}
          <div className="mb-3">
            <label htmlFor="experience" className="form-label">
              Expérience
            </label>

            <select
              id="experience"
              name="experience"
              className="form-select"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner</option>
              <option value="Débutant accepté">
                Débutant accepté
              </option>
              <option value="1 à 2 ans">1 à 2 ans</option>
              <option value="3 à 5 ans">3 à 5 ans</option>
              <option value="5 ans et plus">
                5 ans et plus
              </option>
            </select>
          </div>

          {/* STATUT */}
          <div className="mb-4">
            <label htmlFor="statut" className="form-label">
              Statut de l'offre
            </label>

            <select
              id="statut"
              className="form-select"
              value={String(formData.statut)}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  statut: e.target.value === "true"
                }))
              }
            >
              <option value="true">Active</option>
              <option value="false">Désactivée</option>
            </select>
          </div>

          {/* ACTIONS */}
          <div className="add-actions">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Ajout en cours..." : "Ajouter l'offre"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Annuler
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}

export default AddOffrePage;
