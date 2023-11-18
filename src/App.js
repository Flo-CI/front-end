import "./App.css";

import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import ClaimDashboardScreen from "./screens/ClaimDashboardScreen.js";
import NotFoundScreen from "./screens/NotFoundScreen.js";
import NewClaimScreen from "./screens/NewClaimScreen";
import ClaimFilesScreen from "./screens/ClaimFilesScreen";

function App() {
  return (
    <BrowserRouter basename={"/front-end"}>
      <Routes>
        <Route path="/" element={<ClaimDashboardScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/new-claim" element={<NewClaimScreen />} />
        <Route path="/claim-files" element={<ClaimFilesScreen />} />

        {/* To be updated */}
        {/* <Route path="/claim/:claimNumber" element={<ClaimDashboardScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
