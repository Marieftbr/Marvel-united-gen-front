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
import CharacterUpdateForm from "./components/BackOffice_character-update-form";
import BoxUpdateForm from "./components/BackOffice_box-update-form";
import BoxForm from "./components/BackOffice_box-form";
import LocationForm from "./components/BackOffice_location-form";
import LocationUpdateForm from "./components/BackOffice_location-update-form";
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
          <Route
            path="/update/character/:id"
            element={<CharacterUpdateForm />}
          />
          <Route path="/add/box" element={<BoxForm />} />
          <Route path="/update/box/:id" element={<BoxUpdateForm />} />
          <Route path="/add/location" element={<LocationForm />} />
          <Route path="/update/location/:id" element={<LocationUpdateForm />} />
        </Routes>
      </Router>
      <h1>Toto</h1>
    </div>
  );
}

export default App;
