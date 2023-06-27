import React, { useEffect, useState } from "react";
import { apiGet } from "../api";

export default function HomeForm() {
  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [heroes, setHeroes] = useState(null);
  const [villain, setVillain] = useState(null);
  const [locations, setLocations] = useState(null);
  const [boxes, setBoxes] = useState([]);

  const generateParty = async () => {
    const response = await apiGet("/new-game", {
      number: numberOfPlayers,
    });
    setHeroes(response.data.heroes);
    setVillain(response.data.villain);
    setLocations(response.data.locations);

    fetchBoxes([...response.data.heroes, response.data.villain]);

    setIsLoading(false);
  };

  const fetchBoxes = async (characters) => {
    const boxes = [];
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      const boxId = character.box;
      if (!boxes.map((box) => box._id).includes(boxId)) {
        const response = await apiGet(`/box/${boxId}`);
        boxes.push(response.data);
      }
    }
    console.log(boxes);

    setBoxes(boxes);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    await generateParty();
  };

  useEffect(() => {}, []);

  return (
    <div className="home__form-wrapper">
      <form onSubmit={submitForm}>
        <div className="home__nbPlayer">
          <label className="home__label">Number of players :</label>

          <select
            value={numberOfPlayers}
            onChange={(event) => setNumberOfPlayers(event.target.value)}
            className="home__input"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="home__btn">Generate</button>
      </form>
      <div className="home__result-container">
        {isLoading || !heroes ? (
          <div></div>
        ) : (
          <div>
            <h1 className="home__titles">Heroes</h1>
            <div className="home__character-wrapper">
              {heroes.map((hero) => {
                return (
                  <div key={hero._id} className="home__card-container">
                    <img
                      src={hero.picture.url}
                      alt="hero"
                      className="home__picture"
                    />
                    <p className="home__name">{hero.name}</p>
                  </div>
                );
              })}
            </div>
            <h1 className="home__titles">Villain</h1>
            <div className="home__villain-wrapper">
              <div key={villain._id} className="home__card-container">
                <img
                  src={villain.picture.url}
                  alt="hero"
                  className="home__picture"
                />
                <p className="home__name">{villain.name}</p>
              </div>
            </div>
            <h1 className="home__titles">Locations</h1>
            <div className="home__location-wrapper">
              {locations.map((location) => {
                return (
                  <div key={location._id} className="home__card-container">
                    <img
                      src={location.picture.url}
                      alt="hero"
                      className="home__picture-villain"
                    />
                    <p className="home__name">{location.name}</p>
                  </div>
                );
              })}
            </div>

            <h1 className="home__titles">Boxes to take</h1>
            <div className="home__box-wrapper">
              {boxes.map((box) => {
                return (
                  <div key={box._id} className="home__card-container">
                    <img
                      src={box.picture.url}
                      alt="hero"
                      className="home__picture"
                    />
                    <p className="home__name">{box.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
