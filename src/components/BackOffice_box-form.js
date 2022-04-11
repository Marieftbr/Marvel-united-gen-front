import React from "react";
import BackOfficeHeader from "./BackOffice_header";

export default function BoxForm() {
  return (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__box-form-title">Add a box</h1>
      <form id="boxForm" className="back-office_box-form-container">
        <input
          type="text"
          placeholder="Name of the box"
          className="back-office__box-form-input"
        />
        <input type="file" className="back-office__box-form-input" />
        <button className="back-office__box-form-btn">Save</button>
      </form>
    </div>
  );
}
