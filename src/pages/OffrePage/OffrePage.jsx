import { useEffect, useState } from "react"
import { getOffres } from "../../services/offreService"
import OffreCard from "../../components/OffreCard"
import SearchBar from "../../components/SearchBar/SerachBar";
import "./OffrePage.css"

function OffrePage() {

    const [offres, setOffres] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        getOffres()
        .then(data => setOffres(data))
        .catch(error => console.log(error))
    }, [])

    const offresFiltres = offres.filter(offre =>
        offre.titre.toLowerCase().includes(search.toLowerCase()) ||
        offre.entreprise.toLowerCase().includes(search.toLowerCase()) ||
        offre.domaine.toLowerCase().includes(search.toLowerCase())
    )



  return (
    <main className="offres-page">
      <div className="container offres-container">
        
        <header className="offres-hero">
          <p className="offres-eyebrow">STACKUP · OPPORTUNITÉS</p>
          <h1>Bienvenue sur <span>StackUp</span></h1>
          <p className="offres-intro">Ton avenir professionnel commence ici</p>
        </header>
        <SearchBar search={search} setSearch={setSearch}/>
           <section className="row offres-grid" aria-label="Offres d'emploi">

        {offresFiltres.length > 0 ? (
          offresFiltres.map((offre) => (
            <OffreCard key={offre.id} offre={offre} />
          ))
        ) : (
          <p>Aucune offre ne correspond à votre recherche.</p>
        )}

      </section>

    </div>
  </main>
  )
}

export default OffrePage