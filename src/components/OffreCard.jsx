import React from 'react'
import { Link } from 'react-router'

function OffreCard({offre}) {
  return (
    <>
         <div className="col-12 col-md-6 col-lg-4 mt-3" key={offre.id}>


          <div className='card h-100 p-3 border-0 shadow-sm'>
            <div className='card-body d-flex flex-column'>
            <h1 className='card-title fs-5 fw-bold mb-2'>{offre.titre}</h1>
            <h2 className='fs-6 fw-semibold text-secondary mb-2'>{offre.entreprise}</h2>
            <p className='card-subtitle mb-3 text-body-secondary'>{offre.localisation}</p>
            <ul className='list-unstyled d-flex flex-wrap gap-2 mb-4'>
            <li className='badge text-bg-light border fw-normal'>{offre.type}</li>
            <li className='badge text-bg-light border fw-normal'>{offre.domaine}</li>
            <li className='badge text-bg-light border fw-normal'>{offre.competences}</li>
            <li className='badge text-bg-light border fw-normal'>{offre.salaire} €</li>
            <li className='badge text-bg-light border fw-normal'>{offre.teletravail}</li>
            <li className='badge text-bg-light border fw-normal'>{offre.niveauEtude}</li>
            </ul>
            
           
           
           
            <Link to={`/offre/${offre.id}`} className='btn btn-dark mt-auto align-self-start'>Voir les details</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default OffreCard