import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="maps" element={<GoogleMaps />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
