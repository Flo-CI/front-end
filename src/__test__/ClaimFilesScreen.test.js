import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext.js';
import ClaimFilesScreen from '../screens/ClaimFilesScreen.js';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store';

test('Renders ClaimFilesScreen with initial state', () => {
  // Mocking the necessary context values for dark mode
  const darkModeValue = { darkMode: false };

  const { getByText } = render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <DarkModeContext.Provider value={darkModeValue}>
          <ClaimFilesScreen />
        </DarkModeContext.Provider>
      </MemoryRouter>
    </ReduxProvider>
  );

  // Asserting presence of specific elements in the rendered screen
  expect(getByText('Claim Files')).toBeInTheDocument();
  expect(getByText('Missing Files')).toBeInTheDocument();
  // Add more assertions for specific elements or content as needed
});
