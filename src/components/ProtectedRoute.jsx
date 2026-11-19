
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user } = useAuth();

  // Utilisateur non connecté
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Vérification du rôle
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
