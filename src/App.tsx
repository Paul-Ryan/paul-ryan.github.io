import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import CatsOfSciFi from "./pages/CatsOfSciFi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cats" element={<CatsOfSciFi />} />
    </Routes>
  );
}

export default App;
