import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function BackOfficeCharacterCard(props) {
  const deleteData = async (id) => {
    await axios.delete("http://localhost:3000/character", { data: { id: id } });
    window.location.reload();
  };
  return (
    <div>
      {props.data.map((character) => {
        return (
          <div
            className="back-office__character-card-container"
            key={character._id}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              className="back-office__character-card-icon"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-pen"
              className="back-office__card-pen-icon"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="back-office__card-trash-icon"
              onClick={() => {
                deleteData(character._id);
              }}
            />

            <img
              src={character.picture.url}
              alt="character"
              className="back-office__character-card-img"
            />
            <span className="back-office__character-card-name">
              {character.name}
            </span>
            <span className="back-office__character-card-type">
              {character.type}
            </span>
          </div>
        );
      })}
    </div>
  );
}
