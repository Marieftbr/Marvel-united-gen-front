import React from "react";

export default function BackOfficeForm() {
  return (
    <div className="back-office__form-container">
      <h1 className="back-office__h1">BackOffice</h1>
      <form className="back-office__form">
        <input
          className="back-office__input"
          type="email"
          placeholder="Email"
        />
        <input
          className="back-office__input"
          type="password"
          placeholder="Password"
        />
        <button className="back-office__btn">Connexion</button>
      </form>
    </div>
  );
}
