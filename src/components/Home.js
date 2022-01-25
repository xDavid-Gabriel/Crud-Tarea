import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import ListaUsuariosView from "../views/ListaUsuariosView";

export const Home = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError("Server Error");
    }
  };
  return (
    <div className="">
      <ListaUsuariosView />
      <div className="position-absolute user">

      <p className="email ">{currentUser.email}</p>
      <button className="logout-button ms-4" onClick={handleLogout}>
        Log Out
      </button>
      </div>
    </div>
  );
};
