import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Spinner from "../spinner.svg";

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      history.push("/home");
    } catch (error) {
      setLoading(false);
      setError("Wrong Credentials");
      setTimeout(() => setError(""), 1500);
    }
  };

  return (
    <>
      <section className="container-fluid bg-degradado">
        <div className="row align-items-center justify-content-center min-vh-100">

        <div className="carta">
          <div className="header">
            {error && <p className="error">{error}</p>}
            <h1 className="fs-1 login">Log In</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" onChange={handleEmail} />
              <input
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                className="mt-3"
              />
              <input type="submit" value="Log In" />
            </form>
            {loading && <img src={Spinner} alt="Loading" />}
            <p className="text-white">
              ¿No tienes una cuenta? 
            </p>
            <Link to="/signup" className="text-decoration-none">Registrate</Link>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
