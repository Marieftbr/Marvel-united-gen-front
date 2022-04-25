import React from "react";

export default function HomeForm() {
  return (
    <div>
      <form action="">
        <div className="home__nbPlayer">
          <label htmlFor="">Number of players</label>
          <input type="number" />
        </div>
        <button>Generate</button>
      </form>
    </div>
  );
}
