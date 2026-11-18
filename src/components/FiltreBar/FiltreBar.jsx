import React from 'react'
import "./FiltreBar.css"

function FiltreBar({
  domaine,
  setDomaine,
  niveau,
  setNiveau,
  typeOffre,
  setTypeOffre,
  salaire,
  setSalaire
}) {

  return (
    <div className="filter-bar">

      {/* Filtre par domaine */}
      <select
        aria-label="Filtrer par domaine"
        value={domaine}
        onChange={(e) => setDomaine(e.target.value)}
      >
        <option value="">Tous les domaines</option>
        <option value="Informatique">Informatique</option>
        <option value="Marketing">Marketing</option>
        <option value="Finance">Finance</option>
        <option value="Commerce">Commerce</option>
      </select>

      {/* Filtre par niveau d'études */}
      <select
        aria-label="Filtrer par niveau d'études"
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
      >
        <option value="">Tous les niveaux</option>
        <option value="Bac">Bac</option>
        <option value="Bac+2">Bac+2</option>
        <option value="Bac+3">Bac+3</option>
        <option value="Bac+5">Bac+5</option>
      </select>

      <select
        aria-label="Filtrer par type de contrat"
        value={typeOffre}
        onChange={(e) => setTypeOffre(e.target.value)}
      >
        <option value="">Tous les types de contrat</option>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Alternance">Alternance</option>
        <option value="Stage">Stage</option>
      </select>

      <select
        aria-label="Filtrer par salaire annuel"
        value={salaire}
        onChange={(e) => setSalaire(e.target.value)}
      >
        <option value="">Tous les salaires</option>
        <option value="moins-30000">Moins de 30 000 € / an</option>
        <option value="30000-40000">30 000 - 39 999 € / an</option>
        <option value="40000-50000">40 000 - 49 999 € / an</option>
        <option value="50000-plus">50 000 € / an et plus</option>
        <option value="non-precise">Selon profil / non précisé</option>
      </select>

    </div>
  )
}

export default FiltreBar
