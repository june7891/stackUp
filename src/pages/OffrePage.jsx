import { useEffect, useState } from "react"
import { getOffres } from "../services/offreService"
import OffreCard from "../components/offreCard"

function OffrePage() {

    const [offres, setOffres] = useState([])

    useEffect(() => {
        getOffres()
        .then(data => setOffres(data))
        .catch(error => console.log(error))
    }, [])



  return (
    <>
       <div className="container mt-5">
      <h1>Bienvenue sur StackUp </h1>
      <p>Ton avenir professionnel commence ici</p>
      <div className='row'>

        {offres.map(offre => (

            <OffreCard key={offre.id} offre={offre}/>
      
        ))

        }
        
      </div>
     </div>
     </>
  )
}

export default OffrePage