import React from 'react'
import { Link } from 'react-router'

function OffreCard({offre}) {
  return (
    <>
         <div className="col-4 mt-3" key={offre.id}>


          <div className='row card p-3 shadow-sm'>
            <div className='col-sm-6'>
              <div className='card-body'>
            <h1 className='card-title'>{offre.title}</h1>
            <h2 className='fw-bold text-secondary'>{offre.entreprise}</h2>
            <p className= 'card-subtitle mb-2 text-muted'>{offre.localisation}</p>
            <ul className='list-inline'>
            <li className='list-inline'>{offre.type}</li>
            <li className='list-inline'>{offre.domaine}</li>
            <li className='list-inline'>{offre.competences}</li> 
            <li className='list-inline'>{offre.salaire} €</li>  
            <li className='list-inline'>{offre.teletravail}</li>
            <li className='list-inline'>{offre.niveauEtude}</li>
            </ul>
            
           
           
           
            <Link to={`/offre/${offre.id}`} className='btn btn-dark'>Voir les details</Link>
            </div>
            </div> 
          </div>
        </div>
    </>
  )
}

export default OffreCard