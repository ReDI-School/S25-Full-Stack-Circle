const MILLISECONDS_IN_SECOND = 1000;

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    return Date.now() < exp * MILLISECONDS_IN_SECOND;
  } catch {
    return false;
  }
};
