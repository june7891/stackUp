import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router'

import { deleteProduct, getProductById, updateAvailability } from '../services/productService';

function ProductDetailsPage() {
    const [product, setProduct] = useState(null)
    const [available, setAvailable] = useState()
    const {id} = useParams();
    const navigate = useNavigate()
   

     useEffect(() => {
           getProductById(id)
           .then(data => setProduct(data))
           .catch(error => console.log(error))
       }, [id])

         if(!product){
        return <p className='container mt-5'>Chargement</p>
        }

        async function handleDelete() {
          try {
           const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")
           
            
             navigate('/')

            if (isConfirmed) {
            await deleteProduct(id); 
            alert('Produit supprimé avec succès!')
    }
            
          } catch (error) {
            console.error('erreur', error)
            alert("Erreur de suppression")
            
          }

            console.log('produit supprimé', id);
          
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
       <Link to="/" className='btn btn-secondary'> - Retour au catalogue</Link>
        <h2>{product.name}</h2>
        <img src={product.image} alt="" width="300"/>
        <p>{product.description}</p>
        <p className='fw-bold'>{product.price} €</p>
        
         <div>Statut : {product.available ? 
          <button className=' btn btn-success'>Disponible</button> : 
          <button className=' btn btn-danger'>Indisponible</button>}
          </div>
      <button className='primary' onClick={() => handleAvailability(product.available)}>
        Changer la disponibilité
      </button>
        <button className='btn btn-danger m-2' onClick={handleDelete}>Supprimer le produit</button>
        
    </div>
  )
}

export default ProductDetailsPage