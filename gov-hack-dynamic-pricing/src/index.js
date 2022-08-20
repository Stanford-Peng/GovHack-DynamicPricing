import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminView from "./AdminView/AdminView";
import PastJourneys from "./AdminView/PastJourneys/PastJourneys";
import "antd/dist/antd.css";

import GoogleMaps from "./Components/GoogleMaps/GoogleMaps";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GoogleMaps />} />
      <Route path="/AdminView" element={<AdminView />} />
      <Route path="/PastJourneys" element={<PastJourneys />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
