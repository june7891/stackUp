
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Utilisateur non connecté
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Utilisateur connecté mais pas admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Seul l'admin peut accéder à la page
  return children;
}

export default ProtectedRoute;
