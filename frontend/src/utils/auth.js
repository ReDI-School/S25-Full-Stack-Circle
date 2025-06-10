export const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
  
    try {
      const { exp } = JSON.parse(atob(token.split(".")[1]));
      return Date.now() < exp * 1000;
    } catch {
      return false;
    }
  };
  