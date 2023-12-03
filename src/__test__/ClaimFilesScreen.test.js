import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store';
import { DarkModeProvider } from '../DarkModeContext';
import ClaimFilesScreen from '../screens/ClaimFilesScreen';
import { BrowserRouter } from 'react-router-dom';


test("Files Screen Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
        <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Claim Files/i);
  expect(linkElement).toBeInTheDocument();

  
});
test("Past Claims Items Show", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
        <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  const linkElement = getByText(/Missing Files/i);
  expect(linkElement).toBeInTheDocument();

  
});
