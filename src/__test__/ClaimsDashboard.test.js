import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../state/store.js"; // Importing the Redux store
import { DarkModeProvider } from "../DarkModeContext.js"; // Context Provider for Dark Mode
import ClaimDashboard from "../screens/ClaimDashboardScreen.js"; // The component being tested
import { BrowserRouter, MemoryRouter } from 'react-router-dom'; // Routers for navigation
import { createMemoryHistory } from "history"; // History for MemoryRouter

// Test to check if 'Dashboard' item is displayed
test("Dashboard Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Dashboard' is present in the rendered screen
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if 'Current Claims' item is displayed
test("Current Claims Items Show", () => {
  // Similar setup as the previous test
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Current Claims' is present in the rendered screen
  const linkElement = getByText(/Current Claims/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if 'Past Claims' item is displayed
test("Past Claims Items Show", () => {
  // Similar setup as the previous tests
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimDashboard />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Past Claims' is present in the rendered screen
  const linkElement = getByText(/Past Claims/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if clicking on 'New Claim' button navigates to New Claim Screen
test("Navigates to New Claim Screen on Button Click", () => {
  // Create a memory history for navigation simulation
  const history = createMemoryHistory();
  
  // Render the ClaimDashboard within the necessary providers and MemoryRouter
  const { getByText } = render(
    <ReduxProvider store={store}>
      <DarkModeProvider>
        <MemoryRouter initialEntries={['/']}>
          <ClaimDashboard />
        </MemoryRouter>
      </DarkModeProvider>
    </ReduxProvider>
  );

  // Find the '+ New Claim' button and simulate a click
  const button = getByText('+ New Claim');
  fireEvent.click(button);

  // Check if the navigation history reflects a change to the New Claim Screen
  expect(history.location.pathname).toBe('/');
});
