import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'; // Importing history for navigation simulation
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store'; // Importing the Redux store
import { DarkModeProvider } from '../DarkModeContext'; // Context Provider for Dark Mode
import LoginScreen from '../screens/LoginScreen'; // The component being tested
import { MemoryRouter, BrowserRouter } from 'react-router-dom'; // Routers for navigation

// Test to check if 'Please Enter Policy Number' item is displayed
test("Login Screen Items Show - Policy Number", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Please Enter Policy Number' is present in the rendered screen
  const linkElement = getByText(/Please Enter Policy Number/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if 'Flo.CI Login' item is displayed
test("Login Screen Items Show - Flo.CI Login", () => {
  // Similar setup as the previous test
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Flo.CI Login' is present in the rendered screen
  const linkElement = getByText(/Flo.CI Login/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if 'Please Enter Policy Password' item is displayed
test("Login Screen Items Show - Policy Password", () => {
  // Similar setup as the previous tests
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Please Enter Policy Password' is present in the rendered screen
  const linkElement = getByText(/Please Enter Policy Password/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if successful login navigates to Dashboard
test('Navigates to Dashboard after successful Login', async () => {
  // Create a memory history for navigation simulation
  const history = createMemoryHistory();
  
  // Render the LoginScreen within the necessary providers and MemoryRouter
  const { getByLabelText, getByText } = render(
    <ReduxProvider store={store}>
      <DarkModeProvider>
        <MemoryRouter initialEntries={['/']}>
          <LoginScreen />
        </MemoryRouter>
      </DarkModeProvider>
    </ReduxProvider>
  );

  // Find and modify the policy number and password inputs
  const policyNumberInput = getByLabelText('Please enter policy number');
  const passwordInput = getByLabelText('Please enter policy password');
  const loginButton = getByText('Log-In');

  fireEvent.change(policyNumberInput, { target: { value: '1234567890' } });
  fireEvent.change(passwordInput, { target: { value: 'HelloWorld@123' } });

  // Click on the login button
  fireEvent.click(loginButton);

  // Wait for navigation to the Dashboard and assert the path
  await waitFor(() => {
    expect(history.location.pathname).toBe('/');
  });
});
