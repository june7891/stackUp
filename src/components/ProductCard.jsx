import React from 'react'
import { Link } from 'react-router'

function ProductCard({product}) {
  return (
    <>
         <div className="col-4 mt-3" key={product.id}>
          <img src={product.image} className='card-img-top' alt={product.name} />
          <div className='card-body'>
            <h5 className='card-title'>{product.name}</h5>
            <p className='card-text'>{product.description}</p>
            <p className='fw-bold text-primary'>{product.price} €</p>
           
           
            <Link to={`/product/${product.id}`} className='btn btn-dark'>Voir les details</Link>
          </div>
        </div>
    </>
  )
}

export default ProductCard