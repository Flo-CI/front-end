import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./state/store";
import { DarkModeProvider } from "./DarkModeContext.js";
import ClaimDashboard from "./screens/ClaimDashboardScreen";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from "history";

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

test("Current Claims Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Current Claims/i);
  expect(linkElement).toBeInTheDocument();

  
});
test("Past Claims Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Past Claims/i);
  expect(linkElement).toBeInTheDocument();

  
});

test("Navigates to New Claim Screen on Button Click", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <ReduxProvider store={store}>
      <DarkModeProvider>
        <MemoryRouter initialEntries={['/']}>
          <ClaimDashboard />
        </MemoryRouter>
      </DarkModeProvider>
    </ReduxProvider>
  );

  const button = getByText('+ New Claim');
  fireEvent.click(button);

  expect(history.location.pathname).toBe('/');
});
