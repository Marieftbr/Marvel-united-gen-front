import React, { useEffect, useState } from "react";
import { apiGet, apiPost } from "../api";
import BackOfficeHeader from "./BackOffice_header";

export default function LocationForm() {
  const [boxes, setBoxes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const pictureRef = React.createRef();

  const [name, setName] = useState("");
  const [box, setBox] = useState("");
  const [picture, setPicture] = useState("");

  const fetchBoxes = async () => {
    const response = await apiGet("/box");
    setBoxes(response.data);
    setBox(response.data[0]._id);
    setIsLoading(false);
  };

  const sendData = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("box_id", box);
    formData.append("picture", picture);

    const response = await apiPost("/locations", formData);
    console.log(response.data);
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
      <h1 className="back-office__location-form-title">Add a Location</h1>
      <form
        id="locationForm"
        className="back-office__location-form-container"
        onSubmit={handleSubmit}
      >
        <label className="back-office__location-form-name-label">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="back-office__location-form-input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div className="back-office__location-form-select-box-container">
          <label className="back-office__location-form-box-label">Box</label>
          <select name="boxes" onChange={handleBox}>
            {boxes.map((box) => {
              return (
                <option value={box._id} key={box._id}>
                  {box.name}
                </option>
              );
            })}
          </select>
        </div>
        <label
          htmlFor=""
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
          className="back-office__location-form-input"
          ref={pictureRef}
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />

        <button className="back-office__location-form-btn">Save</button>
      </form>
    </div>
  );
}
