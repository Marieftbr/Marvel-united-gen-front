import React from "react";
import BackOfficeHeader from "./BackOffice_header";

export default function CharacterForm() {
  return (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__character-form-title">Add a character</h1>
      <form
        id="characterForm"
        className="back-office__character-form-container"
      >
        <input type="file" className="back-office__character-form-input" />
        <input
          type="text"
          className="back-office__character-form-input"
          placeholder="Name"
        />
        <div className="back-office__types-input">
          <label>Type</label>
          <select name="types" id="">
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="back-office__boxes-input">
          <label>Box</label>
          <select name="boxes" id="">
            <option value="hero">Hero</option>
          </select>
        </div>
        <button className="back-office__character-form-btn">Save</button>
      </form>
    </div>
  );
}
