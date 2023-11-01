import "./App.css";

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import ClaimDashboardScreen from "./screens/ClaimDashboardScreen.js";
import Navbar from "./components/Navbar";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      {authenticated ? <ClaimDashboardScreen /> : <LoginScreen />}
    </BrowserRouter>
  );
}

export default App;
