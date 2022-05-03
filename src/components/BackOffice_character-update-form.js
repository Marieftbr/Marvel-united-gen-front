import React, { useState, useEffect } from "react";
import BackOfficeHeader from "./BackOffice_header";
import { useParams } from "react-router-dom";
import { apiGet, apiPut } from "../api";

export default function CharacterUpdateForm() {
  const pictureRef = React.createRef();

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [box, setBox] = useState("");

  const [boxes, setBoxes] = useState([]);
  const [boxesLoaded, setBoxesLoaded] = useState(false);

  const fetchBoxes = async () => {
    const response = await apiGet("/box");
    setBoxes(response.data);
    setBoxesLoaded(true);
  };

  const [isLoading, setIsLoading] = useState(true);

  const [dataAlreadySetted, setDataAlreadySetted] = useState(null);
  const { id } = useParams();

  const updateData = async () => {
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("box", box);

    await apiPut(`/character/${id}`, formData);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleBox = (event) => {
    setBox(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData();
  };

  useEffect(() => {
    fetchBoxes();
    const fetchThisData = async (id) => {
      const response = await apiGet(`/character/${id}`);

      setDataAlreadySetted(response.data);

      setName(response.data.name);
      setType(response.data.type);
      setBox(response.data.box);
      setPicture(response.data.picture.url);
      setIsLoading(false);
    };

    fetchThisData();
  }, []);

  return isLoading && dataAlreadySetted && boxesLoaded ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <BackOfficeHeader />
      <h1 className="back-office__character-form-title">
        Update {dataAlreadySetted ? dataAlreadySetted.name : "a character"}
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
          className="back-office__character-img"
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
          <select name="types" value={type} onChange={handleType}>
            <option value="hero">Hero</option>
            <option value="villain">Villain</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="back-office__boxes-input">
          <label className="back-office__character-labels">Box</label>
          <select name="boxes" id="" onChange={handleBox} value={box}>
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
