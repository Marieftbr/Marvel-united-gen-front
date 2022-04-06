import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackOffice from "./pages/Backoffice";
import BackOfficeCharacters from "./pages/Backoffice_characters";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBoxOpen, faMask, faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faBoxOpen, faMask, faUser);

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
        </Routes>
      </Router>
      <h1>Toto</h1>
    </div>
  );
}

export default App;
