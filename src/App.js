import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackOffice from "./pages/Backoffice";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/backoffice" element={<BackOffice />} />
        </Routes>
      </Router>
      <h1>Toto</h1>
    </div>
  );
}

export default App;
