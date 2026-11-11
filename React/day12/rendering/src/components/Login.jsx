
import React, { useState } from "react";

const Login = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      localStorage.setItem("loggedUser", JSON.stringify(validUser));

      setUser(validUser);
      setPage("dashboard");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?
        <span onClick={() => setPage("register")}> Register</span>
      </p>
    </div>
  );
};

export default Login;
