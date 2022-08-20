import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import MyWay from "./Components/MyWay/MyWay";
import AdminView from "./AdminView/AdminView";
import PastJourneys from "./AdminView/PastJourneys/PastJourneys";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/myway" element={<MyWay />} />
      <Route path="/AdminView" element={<AdminView />} />
      <Route path="/PastJourneys" element={<PastJourneys />} />
    </Routes>
  </BrowserRouter>
);
