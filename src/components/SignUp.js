import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Spinner from "../spinner.svg";

import { useAuth } from "../context/AuthContext";

export const SignUp = () => {
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => setError(""), 1500);
    } else {
      try {
        await signup(email, password);
        history.push("/home");
      } catch (error) {
        setError("Wrong Credentials");
        setTimeout(() => setError(""), 1500);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <section className="container-fluid bg-degradado">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="carta">
            <div className="header">
              {error && <p className="error">{error}</p>}
              <h1 className="fs-1 login">Registrate</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleEmail}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                  className="my-3"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleConfirmPassword}
                />
                <input type="submit" value="Sign Up" />
              </form>
              {loading && <img src={Spinner} alt="Loading" />}
              <p className="text-white">¿Ya tienes una cuenta?</p>
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
