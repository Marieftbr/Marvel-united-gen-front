import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackOffice from "./pages/Backoffice";
import BackOfficeCharacters from "./pages/Backoffice_characters";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBox,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import BackOfficeBoxes from "./pages/Backoffice_boxes";
import BackOfficeLocations from "./pages/Backoffice_locations";
import CharacterForm from "./components/BackOffice_character-form";
library.add(faBox, faUser, faLocationDot);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/backoffice" element={<BackOffice />} />
          <Route
            path="/backoffice/characters"
            element={<BackOfficeCharacters />}
          />
          <Route path="/backoffice/boxes" element={<BackOfficeBoxes />} />
          <Route
            path="/backoffice/locations"
            element={<BackOfficeLocations />}
          />
          <Route path="/add/character" element={<CharacterForm />} />
        </Routes>
      </Router>
      <h1>Toto</h1>
    </div>
  );
}

export default App;
