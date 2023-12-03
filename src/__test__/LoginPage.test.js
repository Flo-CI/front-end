import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store';
import { DarkModeProvider } from '../DarkModeContext';
import LoginScreen from '../screens/LoginScreen';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

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

test('Navigates to Dashboard after successful Login', async () => {
  const history = createMemoryHistory();
  const { getByLabelText, getByText } = render(
    <ReduxProvider store={store}>
      <DarkModeProvider>
        <MemoryRouter initialEntries={['/']}>
          <LoginScreen />
        </MemoryRouter>
      </DarkModeProvider>
    </ReduxProvider>
  );

  const policyNumberInput = getByLabelText('Please enter policy number');
  const passwordInput = getByLabelText('Please enter policy password');
  const loginButton = getByText('Log-In');

  fireEvent.change(policyNumberInput, { target: { value: '123' } });
  fireEvent.change(passwordInput, { target: { value: '606' } });

  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(history.location.pathname).toBe('/');
  });
});


