import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome back</h1>
      <h1>Welcome back, {user?.email} 👋</h1>
    </div>
  );
};

export default Dashboard;
