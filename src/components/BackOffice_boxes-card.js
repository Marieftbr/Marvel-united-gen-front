import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import axios from "axios";

export default function BackOfficeBoxesCard(props) {
  const deleteData = async (id) => {
    await axios.delete("http://localhost:3000/box", { data: { id: id } });
    window.location.reload();
  };

  return (
    <div>
      {props.data.map((box) => {
        return (
          <div className="back-office__boxes-card-container" key={box._id}>
            <FontAwesomeIcon
              icon="fa-solid fa-box"
              className="back-office__boxes-card-icon"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-pen"
              className="back-office__card-pen-icon"
            />
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              className="back-office__card-trash-icon"
              onClick={() => {
                deleteData(box._id);
              }}
            />
            <img
              src={box.picture.url}
              alt="box"
              className="back-office__boxes-card-img"
            />
            <span className="back-office__boxes-card-name">{box.name}</span>
          </div>
        );
      })}
    </div>
  );
}
