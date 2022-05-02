import axios from "axios";
import React, { useState } from "react";
import BackOfficeHeader from "./BackOffice_header";

export default function BoxForm() {
  const pictureRef = React.createRef();

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const sendData = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("picture", picture);

    const response = await axios.post("http://localhost:3000/box", formData);
    console.log(response.data);
  };

  const submitData = async (event) => {
    event.preventDefault();
    await sendData();
  };

  return (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__box-form-title">Add a box</h1>
      <form
        id="boxForm"
        className="back-office_box-form-container"
        onSubmit={submitData}
      >
        <labe className="back-office__boxes-form-name-label">Name</labe>
        <input
          type="text"
          placeholder="Name of the box"
          className="back-office__box-form-input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label
          onClick={(event) => {
            pictureRef.current.dispatchEvent(
              new MouseEvent("click", {
                bubbles: false,
                cancelable: true,
                view: window,
              })
            );
          }}
          value={picture}
        ></label>
        <input
          type="file"
          className="back-office__box-form-input"
          ref={pictureRef}
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <button className="back-office__box-form-btn">Save</button>
      </form>
    </div>
  );
}
