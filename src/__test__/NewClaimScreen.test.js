import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NewClaimScreen from '../screens/NewClaimScreen';
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter
import { act } from 'react-dom/test-utils';

test('Renders NewClaimScreen with initial state', () => {
  const { getByLabelText, getByText } = render(
    <MemoryRouter> {/* Use MemoryRouter */}
      <DarkModeContext.Provider value={{ darkMode: false }}>
        <NewClaimScreen />
      </DarkModeContext.Provider>
    </MemoryRouter>
  );

  expect(getByText('File A New Claim')).toBeInTheDocument();
  expect(getByLabelText('Select')).toBeInTheDocument();
});
