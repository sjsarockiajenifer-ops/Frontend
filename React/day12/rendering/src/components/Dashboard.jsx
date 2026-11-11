
import React from "react";

const Dashboard = ({ user, logout }) => {
  return (
    <div className="card">
      <h2>Dashboard</h2>

      <h3>Welcome {user.name}!</h3>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
