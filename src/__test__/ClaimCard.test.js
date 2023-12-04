import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ClaimCard from '../components/ClaimCard';
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed

test('Renders ClaimCard with light mode', () => {
 // Render claim card component
 const { getByText } = render(
  <DarkModeContext.Provider value={{ darkMode: false }}>
    <MemoryRouter>
      <ClaimCard
        claimName="Test Claim"
        claimNumber="123"
        dateFiled="2023-12-01"
        applicationStatus="Pending"
      />
    </MemoryRouter>
  </DarkModeContext.Provider>
);

// Test claim name displayed
expect(getByText('Test Claim')).toBeInTheDocument();

// Test application status displayed
expect(getByText('Pending')).toBeInTheDocument();

// Test date filed displayed
expect(getByText('Date Filed: 2023-12-01')).toBeInTheDocument();

// Test claim number displayed
expect(getByText('No: 123')).toBeInTheDocument();
});

test('Renders ClaimCard with dark mode', () => {
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: true }}>
      <MemoryRouter>
        <ClaimCard
          claimName="Another Test Claim"
          claimNumber="456"
          dateFiled="2023-11-30"
          applicationStatus="Approved"
        />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  expect(getByText('Another Test Claim')).toBeInTheDocument();
  expect(getByText('Approved')).toBeInTheDocument();
  expect(getByText('Date Filed: 2023-11-30')).toBeInTheDocument();
  expect(getByText('No: 456')).toBeInTheDocument();
});
