import { Routes, Route, Navigate } from "react-router";
import OffrePage from "./pages/OffrePage/OffrePage";
import AddOffrePage from "./pages/AddOffrePage/AddOffrePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import OffreDetailsPage from "./pages/OffreDetailsPage/OffreDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UpdatePage from "./pages/UpdatePage/UpdatePage";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<OffrePage />} />
        <Route
          path="/addOffre"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AddOffrePage />
            </ProtectedRoute>
          }
        />
        <Route path="/offre/:id" element={<OffreDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/offre/modifier/:id" element={<ProtectedRoute allowedRoles={["admin"]}><UpdatePage /></ProtectedRoute>} />
        <Route path="/candidate/:id" element={<ProtectedRoute allowedRoles={["candidat"]}><CandidatePage /></ProtectedRoute>} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
