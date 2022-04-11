import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackOfficeCharacterCard(props) {
  return (
    <div>
      {props.data.map((character) => {
        return (
          <div className="back-office__character-card-container">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              className="back-office__character-card-icon"
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
