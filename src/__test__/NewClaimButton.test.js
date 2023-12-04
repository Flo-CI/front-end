import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClaimFilesButton from '../components/ClaimFilesButton'; // Adjust the import path as needed
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed

test('ClaimFilesButton renders correctly in light mode', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: false }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-300'); // Assuming default light mode class

  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});

test('ClaimFilesButton renders correctly in dark mode', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: true }}>
      <MemoryRouter>
        <ClaimFilesButton onClick={onClickMock} />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  const createClaimButton = getByText('Create Claim');
  expect(createClaimButton).toBeInTheDocument();
  expect(createClaimButton).toHaveClass('bg-green-500'); // Assuming dark mode class

  fireEvent.click(createClaimButton);
  expect(onClickMock).toHaveBeenCalled();
});
