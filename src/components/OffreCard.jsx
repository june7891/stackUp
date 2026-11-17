import React from 'react'
import { Link } from 'react-router'

function OffreCard({offre}) {
  return (
    <>
         <div className="col-4 mt-3" key={offre.id}>


          <div className='card-body'>
            <h1 className='card-title'>{offre.title}</h1>
            <h2 className='card-subtitle mb-2 text-muted'>{offre.entreprise}</h2>
            <p className= 'fw-bold text-secondary'>{offre.localisation}</p>
            <p className='fw-bold text-secondary'>{offre.type}</p>
            <p className='fw-bold text-secondary'>{offre.domaine}</p>
            <p className='card-text'>{offre.description}</p>
            <p className='fw-bold text-secondary'>{offre.competences}</p> 
            <p className='fw-bold text-primary'>{offre.salaire} €</p>
            <p className='fw-bold text-secondary'>{offre.datePublication}</p>
            <p className='fw-bold text-secondary'>{offre.dateLimite}</p>
            <p className='fw-bold text-secondary'>{offre.teletravail}</p>
            <p className='fw-bold text-secondary'>{offre.niveauEtude}</p>
            <p className='fw-bold text-secondary'>{offre.experience}</p>  
            <p className='fw-bold text-secondary'>{offre.statut}</p>
            
            
           
           
            <Link to={`/offre/${offre.id}`} className='btn btn-dark'>Voir les details</Link>
          </div>
        </div>
    </>
  )
}

export default OffreCard