import { Button } from 'bootstrap'
import React from 'react'
import {Link} from "react-router"
import { useAuth } from '../hooks/useAuth'

function Navbar() {

const {user, logout} = useAuth()


  return (
    <nav className='navbar bg-light shadow-sm'>
        <div className='container'>
            <div className='d-flex gap-3'>
                <Link to="/" className="nav-link">Product Manager</Link>
                <Link to="/add-product" className="nav-link">Ajouter un produit</Link>

                {user ? (<button className='btn btn-danger' onClick={logout}>Déconnexion</button>) : 
                (<Link to="/login" className="btn btn-dark">Se connecter</Link> )}
              
            </div>
        </div>
    </nav>
  )
}

export default Navbar