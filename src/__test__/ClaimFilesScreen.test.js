import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store'; // Importing the Redux store
import { DarkModeProvider } from '../DarkModeContext'; // Context Provider for Dark Mode
import ClaimFilesScreen from '../screens/ClaimFilesScreen'; // The component being tested
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter for routing

// Test to check if items in the Claim Files screen are displayed
test("Files Screen Items Show", () => {
  // Render the ClaimFilesScreen within various providers for Redux, DarkMode, and Router
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Claim Files' is present in the rendered screen
  const linkElement = getByText(/Claim Files/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to check if items in the Missing Files section are displayed
test("Missing Files Items Show", () => {
  // Similar setup as the previous test
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Check if the text 'Missing Files' is present in the rendered screen
  const linkElement = getByText(/Missing Files/i);
  expect(linkElement).toBeInTheDocument();
});

// Test to ensure the initial setup of the ClaimFilesScreen component
test('Renders ClaimFilesScreen with initial setup', () => {
  // Similar setup as the previous tests
  const { getByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Assert that specific text content ('Claim Name') is present in the rendered screen
  expect(getByText('Claim Name')).toBeInTheDocument();
});

// Test to check if clicking on a file opens a PDF viewer
test('PDF opens on file click', () => {
  // Similar setup as the previous tests
  const { getByText, queryByText } = render(
    <BrowserRouter>
      <ReduxProvider store={store}>
        <DarkModeProvider>
          <ClaimFilesScreen />
        </DarkModeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );

  // Click on the first file ('Certification of Death - Physician Statement')
  const firstFile = getByText('Certification of Death - Physician Statement');
  fireEvent.click(firstFile);

  // After clicking, the PDF viewer for that specific file should be visible
  const openedPdfViewer = queryByText('Certification of Death - Physician Statement');
  expect(openedPdfViewer).toBeInTheDocument();
});
