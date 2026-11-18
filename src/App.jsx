
import {Routes, Route, Navigate} from "react-router"
import OffrePage from './pages/OffrePage/OffrePage'
import AddOffrePage from './pages/AddOffrePage'
import LoginPage from "./pages/LoginPage/LoginPage"
import OffreDetailsPage from "./pages/OffreDetailsPage"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage/RegisterPage"




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
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      

    </>
  )
}

export default App
