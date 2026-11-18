import React, { useState } from 'react'
import { addOffre } from '../services/offreService'

function AddOffrePage() {
  const [name, setName ] = useState('')
  const [description, setDescription ] = useState('')
  const [price, setPrice ] = useState('')


function handleSubmit(e) {
  e.preventDefault()

  const offre = {
    titre, 
    description, 
    available: true,
  }
  try {
     const newOffre = addOffre(offre)
     console.log('Produit ajouté', newOffre)
     alert('Produit ajouté avec succès')
    
  } catch (error) {
    console.error(error)
    alert('Produit non ajouté')
  }

 


  
}

  return (
    <>
    <div className="container mt-5 w-25">
        <h3 className='mb-5'>Ajouter une offre</h3>
        <form onSubmit={handleSubmit}>
  <div className="form-group mb-3 ">

    <input 
    type="text" 
    className="form-control"
    value={name} 
    onChange={e => setName(e.target.value)}
    placeholder="Nom produit"/>
   
  </div>
  <div className="form-group mb-3">
  
    <input type="text" 
    className="form-control" 
    value={description} 
    onChange={e => setDescription(e.target.value)} 
    placeholder="description"/>
  </div>
  
   
  

  <button type="submit" className="btn btn-primary">Ajouter offre </button>
</form>
    </div>

    </>
  )
}

export default AddOffrePage

