import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClaimFilesButton from '../components/ClaimFilesButton'; // Adjust the import path as needed
import { DarkModeContext, DarkModeProvider } from '../DarkModeContext'; // Adjust the import path as needed
import { BrowserRouter as Router } from 'react-router-dom';

// Test to check rendering of ClaimFilesButton in light mode
test('ClaimFilesButton renders correctly in light mode', () => {
  // Mock function to simulate button click
  const onClickMock = jest.fn();

  // Render ClaimFilesButton within a light mode context (DarkModeContext with darkMode: false)
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: false }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Check if the 'Create Claim' button is present and has a specific class in light mode
  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-300');

  // Simulate a click on the button and verify if the onClickMock function was called
  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});

// Test to check rendering of ClaimFilesButton in dark mode
test('ClaimFilesButton renders correctly in dark mode', () => {
  // Mock function to simulate button click
  const onClickMock = jest.fn();

  // Render ClaimFilesButton within a dark mode context (DarkModeContext with darkMode: true)
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: true }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Check if the 'Create Claim' button is present and has a different class in dark mode
  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-500');

  // Simulate a click on the button and verify if the onClickMock function was called
  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});
