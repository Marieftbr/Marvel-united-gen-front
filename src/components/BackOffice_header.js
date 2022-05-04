import React from "react";
import { Link } from "react-router-dom";

export default function BackOfficeHeader() {
  return (
    <div className="back-office__header">
      <div className="back-office__logo-wrapper">
        <a href="/">Home</a>
      </div>
      <div className="back-office__link-wrapper">
        <Link to="/backoffice/characters">Characters</Link>
        <Link to="/backoffice/boxes">Boxes</Link>
        <Link to="/backoffice/locations">Locations</Link>
      </div>
    </div>
  );
}
