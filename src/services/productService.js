const API_URL = "http://localhost:3000/products"




export async function getProducts() {
   const response = await fetch(API_URL)


   if(!response.ok) {
    throw new Error('Erreur lors de la récupération des produits')
   }

  return await response.json()
}


export async function addProduct(product) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product)

  })

  if(!response.ok){
    throw new Error("Erreur lors de l'ajout")
  }
  return await response.json()
}


export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`)
  if(!response.ok) {
    throw new Error('Produit introuvable')
  }
  return await response.json()
}


export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })

  if(!response.ok){
    throw new Error('Erreur de suppression')
  }
}


export async function updateAvailability(id, newStatus){
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify({"available": !newStatus})
        })

          if(!response.ok){
    throw new Error("Erreur lors de la mise à jour")
  }
  return await response.json()
    }