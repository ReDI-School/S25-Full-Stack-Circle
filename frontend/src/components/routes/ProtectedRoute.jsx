import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/" replace />;
}
