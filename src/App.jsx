
import {Routes, Route, Navigate} from "react-router"
import ProductPage from './pages/ProductPage'
import AddProductPage from './pages/AddProductPage'
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import ProtectedRoute from "./components/ProtectedRoute"




function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/add-product" element={<ProtectedRoute><AddProductPage/></ProtectedRoute>}/>
        <Route path="/product/:id" element={<ProductDetailsPage/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      

    </>
  )
}

export default App
