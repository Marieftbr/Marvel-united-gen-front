import React, { useState, useEffect } from "react";
import BackOfficeHeader from "./BackOffice_header";
import axios from "axios";

export default function CharacterForm() {
  const pictureRef = React.createRef();

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [box, setBox] = useState("");

  const [boxes, setBoxes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBoxes = async () => {
    const response = await axios.get("http://localhost:3000/box");
    setBoxes(response.data);
    setIsLoading(false);
  };

  const sendData = async () => {
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("box_id", box);

    const response = await axios.post(
      "http://localhost:3000/character",
      formData
    );
    console.log(response.data);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleBox = (event) => {
    setBox(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendData();
  };

  useEffect(() => {
    fetchBoxes();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__character-form-title">Add a character</h1>
      <form
        id="characterForm"
        className="back-office__character-form-container"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="picture"
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
          className="back-office__character-form-input"
          ref={pictureRef}
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />

        <label className="back-office__character-labels">Name</label>
        <input
          type="text"
          className="back-office__character-form-input"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <div className="back-office__types-input">
          <label className="back-office__character-labels">Type</label>
          <select name="types" id="" value={type} onChange={handleType}>
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="back-office__boxes-input">
          <label className="back-office__character-labels">Box</label>
          <select name="boxes" id="" onChange={handleBox}>
            {boxes.map((box) => {
              return (
                <option value={box._id} key={box._id}>
                  {box.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="back-office__character-form-btn">Save</button>
      </form>
    </div>
  );
}
