import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const publicPaths = ["/explore", "/blog", "/"];

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = window.location;

  // Validate JWT and fetch user
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setUser(null);
      setLoading(false);

      const currentPath = location.pathname;

      if (!publicPaths.includes(currentPath)) {
        navigate("/"); // Redirect only if not on a public route
      }

      return;
    }

    fetch("http://localhost:4000/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem("authToken");
      })
      .finally(() => setLoading(false));
  }, [navigate, location.pathname]);

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
