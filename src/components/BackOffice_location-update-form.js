import React, { useState, useEffect } from "react";
import BackOfficeHeader from "./BackOffice_header";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function LocationUpdateForm() {
  const pictureRef = React.createRef();

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [dataAlreadySetted, setDataAlreadySetted] = useState(null);
  const { id } = useParams();

  const fetchThisData = async () => {
    const response = await axios.get(`http://localhost:3000/location/${id}`, {
      params: {
        id: id,
      },
    });
    setDataAlreadySetted(response.data);

    setName(response.data.name);
    setPicture(response.data.picture.url);

    setIsLoading(false);
  };

  const updateData = async () => {
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("name", name);

    await axios.put(`http://localhost:3000/location/${id}`, formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData();
  };

  useEffect(() => {
    fetchThisData();
  }, []);

  return isLoading && dataAlreadySetted ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__character-form-title">
        Update {dataAlreadySetted ? dataAlreadySetted.name : "a Location"}
      </h1>
      <form
        id="characterForm"
        className="back-office__character-form-container"
        onSubmit={handleSubmit}
      >
        <img
          src={dataAlreadySetted ? dataAlreadySetted.picture.url : picture}
          alt=""
          onClick={(event) => {
            pictureRef.current.dispatchEvent(
              new MouseEvent("click", {
                bubbles: false,
                cancelable: true,
                view: window,
              })
            );
          }}
          className="back-office__location-update-form-img"
        />
        <input
          type="file"
          style={{ display: "none" }}
          className="back-office__character-form-input"
          ref={pictureRef}
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <label className="back-office__location-form-label">Name</label>
        <input
          type="text"
          className="back-office__character-form-input"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <button className="back-office__character-form-btn">Save</button>
      </form>
    </div>
  );
}
