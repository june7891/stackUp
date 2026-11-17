
import {Routes, Route, Navigate} from "react-router"
import OffrePage from './pages/OffrePage'
import AddOffrePage from './pages/AddOffrePage'
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"
import OffreDetailsPage from "./pages/OffreDetailsPage"
import ProtectedRoute from "./components/ProtectedRoute"




function App() {
 

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<OffrePage/>}/>
        <Route path="/add-offre" element={<ProtectedRoute><AddOffrePage/></ProtectedRoute>}/>
        <Route path="/offre/:id" element={<OffreDetailsPage/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      

    </>
  )
}

export default App
