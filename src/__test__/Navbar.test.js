import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed

test('Navbar renders with light mode', () => {
  const toggleDarkMode = jest.fn();
  const { getByText } = render(
    <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Log Out')).toBeInTheDocument();
});

test('Navbar toggles dark mode when clicked', () => {
  const toggleDarkMode = jest.fn();
  const { getByRole } = render(
    <DarkModeContext.Provider value={{ darkMode: false, toggleDarkMode }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </DarkModeContext.Provider>
  );

  const toggleSwitch = getByRole('checkbox');
  fireEvent.click(toggleSwitch);

  expect(toggleDarkMode).toHaveBeenCalled();
});
