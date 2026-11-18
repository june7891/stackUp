
import { useEffect, useState } from "react";
import { getOffres } from "../../services/offreService";
import OffreCard from "../../components/OffreCard";
import SearchBar from "../../components/SearchBar/SerachBar";
import FilterBar from "../../components/FiltreBar/FiltreBar";
import "./OffrePage.css";

function getAnnualSalaryRange(salary) {
  const salaryText = String(salary ?? "");
  const amounts = Array.from(
    salaryText.matchAll(/\d[\d\s.]*/g),
    ([amount]) => Number(amount.replace(/\D/g, ""))
  ).filter(Number.isFinite);

  if (amounts.length === 0) {
    return null;
  }

  const annualMultiplier = /mois|mensuel/i.test(salaryText) ? 12 : 1;

  return {
    minimum: Math.min(...amounts) * annualMultiplier,
    maximum: Math.max(...amounts) * annualMultiplier
  };
}

function OffrePage() {

  const [offres, setOffres] = useState([]);
  const [search, setSearch] = useState("");
  const [domaine , setDomaine] = useState("");
  const [niveau , setNiveau] = useState("");
  const [typeOffre, setTypeOffre] = useState("");
  const [salaire, setSalaire] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const offresPerPage = 6;

  useEffect(() => {
    getOffres()
      .then(data => setOffres(data))
      .catch(error => console.log(error));
  }, []);

  // 1. Filtrer les offres
 const offresFiltres = offres.filter(offre => {

  const correspondRecherche =
    offre.titre.toLowerCase().includes(search.toLowerCase()) ||
    offre.entreprise.toLowerCase().includes(search.toLowerCase()) ||
    offre.domaine.toLowerCase().includes(search.toLowerCase());

  const correspondDomaine =
    domaine === "" || offre.domaine === domaine;

  const correspondNiveau =
    niveau === "" || offre.niveauEtude === niveau;

  const correspondType =
    typeOffre === "" || offre.type === typeOffre;

  const salaireAnnuel = getAnnualSalaryRange(offre.salaire);
  const salaireIntervalles = {
    "moins-30000": [0, 30000],
    "30000-40000": [30000, 40000],
    "40000-50000": [40000, 50000],
    "50000-plus": [50000, Infinity]
  };
  const intervalleChoisi = salaireIntervalles[salaire];
  const correspondSalaire =
    salaire === "" ||
    (salaire === "non-precise" && salaireAnnuel === null) ||
    (intervalleChoisi !== undefined &&
      salaireAnnuel !== null &&
      salaireAnnuel.maximum >= intervalleChoisi[0] &&
      salaireAnnuel.minimum < intervalleChoisi[1]);

  return (
    correspondRecherche &&
    correspondDomaine &&
    correspondNiveau &&
    correspondType &&
    correspondSalaire
  );
});

  // 2. Calculer la pagination
  const totalPages = Math.ceil(offresFiltres.length / offresPerPage);

  const indexDerniereOffre = currentPage * offresPerPage;
  const indexPremiereOffre = indexDerniereOffre - offresPerPage;

  // 3. Récupérer les offres de la page actuelle
  const offresAffichees = offresFiltres.slice(
    indexPremiereOffre,
    indexDerniereOffre
  );

  // 4. Revenir à la première page lors d'une recherche
  useEffect(() => {
    setCurrentPage(1);
  }, [search, domaine, niveau, typeOffre, salaire]);

  return (
    <main className="offres-page">
      <div className="container offres-container">

        <header className="offres-hero">
          <p className="offres-eyebrow">STACKUP · OPPORTUNITÉS</p>
          <h1>Bienvenue sur <span>StackUp</span></h1>
          <p className="offres-intro">
            Ton avenir professionnel commence ici
          </p>
        </header>

        <div className="offres-layout">
          <aside className="offres-sidebar" aria-label="Recherche et filtres">
            <div className="offres-sidebar-heading">
              
              <h2>Recherche et filtres</h2>
            </div>
            <SearchBar search={search} setSearch={setSearch} />
            <FilterBar
              domaine={domaine}
              setDomaine={setDomaine}
              niveau={niveau}
              setNiveau={setNiveau}
              typeOffre={typeOffre}
              setTypeOffre={setTypeOffre}
              salaire={salaire}
              setSalaire={setSalaire}
            />
          </aside>

          <div className="offres-results">
            {/* Affichage des offres */}
            <section className="row offres-grid" aria-label="Offres d'emploi">
              {offresAffichees.length > 0 ? (
                offresAffichees.map((offre) => (
                  <OffreCard key={offre.id} offre={offre} />
                ))
              ) : (
                <p className="offres-empty-state" role="status">
                  Aucune offre ne correspond à votre recherche.
                </p>
              )}
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="offres-pagination" aria-label="Pagination des offres">
                <button
                  type="button"
                  className="offres-page-btn"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentPage(index + 1)}
                    className={`offres-page-btn ${currentPage === index + 1 ? "active" : ""}`}
                    aria-current={currentPage === index + 1 ? "page" : undefined}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  type="button"
                  className="offres-page-btn"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Suivant
                </button>
              </nav>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}

export default OffrePage;
