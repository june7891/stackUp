import React, { useState } from 'react'
import { addProduct } from '../services/productService'

function AddProductPage() {
  const [name, setName ] = useState('')
  const [description, setDescription ] = useState('')
  const [price, setPrice ] = useState('')


function handleSubmit(e) {
  e.preventDefault()

  const product = {
    name, 
    description, 
    price: Number(price), 
    available: true,
    image:'https://placehold.co/400x250/blue/white'

  }
  try {
     const newProduct = addProduct(product)
     console.log('Produit ajouté', newProduct)
     alert('Produit ajouté avec succès')
    
  } catch (error) {
    console.error(error)
    alert('Produit non ajouté')
  }

 
  console.log({name, description, price, image});

  
}

  return (
    <>
    <div className="container mt-5 w-25">
        <h3 className='mb-5'>Ajouter un produit</h3>
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
  <div className="form-group mb-3">
   
    <input 
    type="number" 
    className="form-control" 
      value={price} 
    onChange={e => setPrice(e.target.value)} 
     placeholder="prix"/>
  </div>

  <button type="submit" className="btn btn-primary">Ajouter nouveau </button>
</form>
    </div>

    </>
  )
}

export default AddProductPage

