import React from "react";

export default function BackOfficeHeader() {
  return (
    <div className="back-office__header">
      <div className="back-office__logo-wrapper">
        <a href="/">Logo</a>
      </div>
      <div className="back-office__link-wrapper">
        <a href="/characters">Characters</a>
        <a href="/boxes">Boxes</a>
        <a href="/locations">Locations</a>
      </div>
    </div>
  );
}
