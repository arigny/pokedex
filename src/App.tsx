import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pokemon from "./Pokemon";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
