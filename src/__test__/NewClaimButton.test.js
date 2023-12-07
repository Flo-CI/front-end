import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClaimFilesButton from '../components/ClaimFilesButton'; // Adjust the import path as needed
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed

// Test to check rendering and behavior of ClaimFilesButton in light mode
test('ClaimFilesButton renders correctly in light mode', () => {
  const onClickMock = jest.fn(); // Mock function to simulate button click

  // Render ClaimFilesButton within DarkModeContext set to light mode
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: false }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Find the 'Create Claim' button and check its appearance and behavior in light mode
  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-300'); // Assuming default light mode class

  // Simulate a click on the button and verify if onClickMock function was called
  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});

// Test to check rendering and behavior of ClaimFilesButton in dark mode
test('ClaimFilesButton renders correctly in dark mode', () => {
  const onClickMock = jest.fn(); // Mock function to simulate button click

  // Render ClaimFilesButton within DarkModeContext set to dark mode
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: true }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Find the 'Create Claim' button and check its appearance and behavior in dark mode
  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-500'); // Assuming dark mode class

  // Simulate a click on the button and verify if onClickMock function was called
  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});
