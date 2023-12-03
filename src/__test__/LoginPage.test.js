import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../state/store.js";
import { DarkModeProvider } from "../DarkModeContext.js";
import  LoginScreen from "../screens/LoginScreen.js";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from "history";

test("Login Screen Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Please Enter Policy Number/i);
  expect(linkElement).toBeInTheDocument();

  
});

test("Login Screen Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
        <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Flo.CI Login/i);
  expect(linkElement).toBeInTheDocument();

  
});
test("Past Claims Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
        <LoginScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Please Enter Policy Password/i);
  expect(linkElement).toBeInTheDocument();

  
});

test("Navigates to New Claim Screen on Button Click", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <ReduxProvider store={store}>
      <DarkModeProvider>
        <MemoryRouter initialEntries={['/']}>
        <LoginScreen />
        </MemoryRouter>
      </DarkModeProvider>
    </ReduxProvider>
  );

  const button = getByText('LOG-IN');
  fireEvent.click(button);

  expect(history.location.pathname).toBe('/');
});
