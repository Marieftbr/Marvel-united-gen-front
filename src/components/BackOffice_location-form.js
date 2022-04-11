import React from "react";
import BackOfficeHeader from "./BackOffice_header";

export default function LocationForm() {
  return (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__location-form-title">Add a Location</h1>
      <form id="locationForm" className="back-office__location-form-container">
        <input
          type="text"
          placeholder="Name"
          className="back-office__location-form-input"
        />
        <div className="back-office__location-form-select-box-container">
          <label htmlFor="">Box</label>
          <select name="" id="">
            <option value="">toto</option>
          </select>
        </div>
        <input type="file" className="back-office__location-form-input" />

        <button className="back-office__location-form-btn">Save</button>
      </form>
    </div>
  );
}
