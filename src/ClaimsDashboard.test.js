import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./state/store";
import { DarkModeProvider } from "./DarkModeContext.js";
import ClaimDashboard from "./screens/ClaimDashboardScreen";
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom';

test("Login Screen Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();

  
});
