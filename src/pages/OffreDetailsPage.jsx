import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'

import { deleteOffre, getOffreById, updateAvailability } from '../services/offreService';
import { useAuth } from '../hooks/useAuth';

function OffreDetailsPage() {
    const [offre, setOffre] = useState(null)
    const {id} = useParams();
    const navigate = useNavigate()
      const { user } = useAuth();
   

     useEffect(() => {
           getOffreById(id)
           .then(data => setOffre(data))
           .catch(error => console.log(error))
       }, [id])

         if(!offre){
        return <p className='container mt-5'>Chargement des détails de l'offre...</p>
        }

        async function handleDelete() {
          try {
           const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")
           
            
             navigate('/')

            if (isConfirmed) {
            await deleteOffre(id); 
            alert('Offre supprimé avec succès!')
    }
            
          } catch (error) {
            console.error('erreur', error)
            alert("Erreur de suppression")
            
          }

            console.log('offre supprimé', id);
          
        }

    async function handleAvailability(available) {
          try { 
               
            console.log(available);
                      
            await updateAvailability(id, available); 
            window.location.reload();

                      
          } catch (error) {
            console.error('erreur', error)
            alert("Erreur de mise à jour de disponibilité")
            
          }

            console.log('disponibilité mise à jour', id);
                      
        }

   
  return (
  
    <div className='container mt-5'>
       <Link to="/" className='btn btn-secondary'> - Retour à la page d'accueil</Link>
        <h2>Offre d'emploi: {offre.titre}</h2>
        <p>{offre.description}</p>
        <p>Entreprise: {offre.entreprise} </p>
        <p>Ville: {offre.localisation} </p>
        <p>Télétravail: {offre.teletravail}</p>
        <p>Type de contrat: {offre.type} </p>
        <p>Salaire: {offre.salaire} </p>
        <p>Expérience: {offre.experience} </p>
        <p>Niveau d'étude: {offre.niveauEtude} </p>
        <p>Domaine: {offre.domaine} </p>

        <div>
          <p className='fw-bold'>Compétences réquises</p>
          {offre.competences.map((competence) =>
           <ul>
            <li key={competence}>{competence}</li>
           </ul>
          )}
        </div>
        
         <div>Statut : {offre.statut ? 
          <button className='btn btn-success'>Active</button> : 
          <button className='btn btn-danger'>Désactivé</button>}
          </div>


       {user ?<> <button className='btn btn-primary' onClick={() => handleAvailability(offre.statut)}>
        Changer la disponibilité
      </button>
        <button className='btn btn-danger m-2' onClick={handleDelete}>Supprimer le produit</button> </> : <div>pas connecté</div> }   
      
        </div>
   
  )
}

export default OffreDetailsPage