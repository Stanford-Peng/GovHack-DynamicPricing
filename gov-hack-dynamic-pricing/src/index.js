import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import Manage from "./AdminView/Manage";
import MyWay from "./Components/MyWay/MyWay";
import AdminView from "./AdminView/AdminView";
import AdminApp from "./AdminView/AdminApp";
import PastJourneys from "./AdminView/PastJourneys/PastJourneys";
import Receipt from "./Components/Receipt/Receipt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/myway" element={<MyWay />} />
      <Route path="/AdminApp" element={<AdminApp />} />
      <Route path="/PastJourneys" element={<PastJourneys />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/currentReceipt" element={<Receipt />} />
    </Routes>
  </BrowserRouter>
);
