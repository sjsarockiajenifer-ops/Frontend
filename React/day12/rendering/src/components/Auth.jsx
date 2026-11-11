
import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Auth = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  const [page, setPage] = useState(
    localStorage.getItem("loggedUser") ? "dashboard" : "login"
  );

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
    setPage("login");
  };

  return (
    <div className="container">

      {page === "register" && (
        <Register setPage={setPage} />
      )}

      {page === "login" && (
        <Login setPage={setPage} setUser={setUser} />
      )}

      {page === "dashboard" && user && (
        <Dashboard user={user} logout={logout} />
      )}

    </div>
  );
};

export default Auth;
