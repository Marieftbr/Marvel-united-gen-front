import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackOffice from "./pages/Backoffice";
import BackOfficeCharacters from "./pages/Backoffice_characters";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBox,
  faUser,
  faLocationDot,
  faTrash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import BackOfficeBoxes from "./pages/Backoffice_boxes";
import BackOfficeLocations from "./pages/Backoffice_locations";
import CharacterForm from "./components/BackOffice_character-form";
import BoxForm from "./components/BackOffice_box-form";
import LocationForm from "./components/BackOffice_location-form";
library.add(faBox, faUser, faLocationDot, faTrash, faPen);

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
          <Route path="/add/box" element={<BoxForm />} />
          <Route path="/add/location" element={<LocationForm />} />
        </Routes>
      </Router>
      <h1>Toto</h1>
    </div>
  );
}

export default App;
