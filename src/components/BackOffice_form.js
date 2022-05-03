import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { apiPost } from "../api";

export default function BackOfficeForm(props) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await apiPost("/login", {
      password,
    });
    props.saveToken(response.data);
    navigate("/backoffice");
  };

  const submitForm = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className="back-office__form-container">
      <h1 className="back-office__h1">BackOffice</h1>
      <form className="back-office__form" onSubmit={submitForm}>
        <input
          className="back-office__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className="back-office__btn">Connexion</button>
      </form>
    </div>
  );
}
