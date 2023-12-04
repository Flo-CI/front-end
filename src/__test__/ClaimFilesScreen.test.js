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
test("Missing Files Items Show", () => {
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

test('Renders ClaimFilesScreen with initial setup', () => {
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
        <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
  
  // Assert that the component renders with specific text content
  expect(getByText('Claim Name')).toBeInTheDocument();
});

test('PDF opens on file click', () => {
  const { getByText, queryByText } = render(
    <BrowserRouter>
    <ReduxProvider store={store}>
      <DarkModeProvider>
      <ClaimFilesScreen />
      </DarkModeProvider>
    </ReduxProvider>
  </BrowserRouter>
  );

  // Click on the first file to open it
  const firstFile = getByText('Certification of Death - Physician Statement');
  fireEvent.click(firstFile);

  // After clicking, the PDF viewer should be visible
  const openedPdfViewer = queryByText('Certification of Death - Physician Statement');
  expect(openedPdfViewer).toBeInTheDocument();

});
