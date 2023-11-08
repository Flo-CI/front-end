import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import ClaimDashboardScreen from "./screens/ClaimDashboardScreen.js";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>

      {authenticated ? (
        <ClaimDashboardScreen />
      ) : (
        <LoginScreen handleAuthentication={handleAuthentication} />
      )}
    </BrowserRouter>
  );
}

export default App;
