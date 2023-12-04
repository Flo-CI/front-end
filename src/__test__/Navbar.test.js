import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed

// Test to verify if Navbar renders correctly in light mode
test('Navbar renders with light mode', () => {
  const toggleDarkMode = jest.fn(); // Mock function for toggling dark mode

  // Render Navbar within DarkModeContext set to light mode
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Check if 'Home' and 'Log Out' elements are present in the rendered Navbar
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Log Out')).toBeInTheDocument();
});

// Test to verify if Navbar toggles dark mode when clicked
test('Navbar toggles dark mode when clicked', () => {
  const toggleDarkMode = jest.fn(); // Mock function for toggling dark mode

  // Render Navbar within DarkModeContext set to light mode
  const { getByRole } = render(
    <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  // Find the toggle switch element and simulate a click event
  const toggleSwitch = getByRole('checkbox');
  fireEvent.click(toggleSwitch);

  // Verify if the toggleDarkMode function was called upon clicking
  expect(toggleDarkMode).toHaveBeenCalled();
});
