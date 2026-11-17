import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import ProductCard from "../components/ProductCard"

function ProductPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(data => setProducts(data))
        .catch(error => console.log(error))
    }, [])



  return (
    <>
       <div className="container mt-5">
      <h1>Bienvenue sur Product Manager</h1>
      <div className='row'>

        {products.map(product => (

            <ProductCard key={product.id} product={product}/>
      
        ))

        }
        
      </div>
     </div>
     </>
  )
}

export default ProductPage