import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Validate JWT and fetch user
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setUser(null);
      setLoading(false);
      // navigate("/");
      return;
    }

    if (token) {
      fetch("http://localhost:4000/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUser({
            ...data.user,
            token: token
          });
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem("authToken");
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [navigate]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};
