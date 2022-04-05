import React from "react";

export default function BackOfficeHeader() {
  return (
    <div className="back-office__header">
      <div className="back-office__logo-wrapper">
        <a href="#">Logo</a>
      </div>
      <div className="back-office__link-wrapper">
        <a href="#">Characters</a>
        <a href="#">Boxes</a>
        <a href="#">Locations</a>
      </div>
    </div>
  );
}
