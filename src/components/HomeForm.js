import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeForm() {
  const [numberOfPlayers, setNumberOfPlayers] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [heroes, setHeroes] = useState(null);
  const [villain, setVillain] = useState(null);
  const [locations, setLocations] = useState(null);
  const [boxes, setBoxes] = useState([]);

  const generateParty = async () => {
    const response = await axios.get("http://localhost:3000/new-game", {
      params: {
        number: numberOfPlayers,
      },
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
        const response = await axios.get(`http://localhost:3000/box/${boxId}`);
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
    <div>
      <form action="" onSubmit={submitForm}>
        <div className="home__nbPlayer">
          <label htmlFor="">Number of players</label>
          <input
            type="number"
            value={numberOfPlayers}
            onChange={(event) => setNumberOfPlayers(event.target.value)}
          />
        </div>
        <button>Generate</button>
      </form>
      <div className="home__result-container">
        {isLoading || !heroes ? (
          <div>En cours de chargement...</div>
        ) : (
          <div>
            <h1>Heroes</h1>
            <div>
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
            <h2>Villain</h2>
            <div>
              <div key={villain._id} className="home__card-container">
                <img
                  src={villain.picture.url}
                  alt="hero"
                  className="home__picture"
                />
                <p className="home__name">{villain.name}</p>
              </div>
            </div>
            <h3>Locations</h3>
            <div>
              {locations.map((location) => {
                return (
                  <div key={location._id} className="home__card-container">
                    <img
                      src={location.picture.url}
                      alt="hero"
                      className="home__picture"
                    />
                    <p className="home__name">{location.name}</p>
                  </div>
                );
              })}
            </div>

            <h4>Boxes to take</h4>
            <div>
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
