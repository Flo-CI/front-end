import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NewClaimScreen from '../screens/NewClaimScreen';
import { DarkModeContext } from '../DarkModeContext'; // Adjust the import path as needed
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter
import store from '../state/store';
import { Provider as ReduxProvider } from 'react-redux';

// Test to ensure NewClaimScreen renders with initial state
test('Renders NewClaimScreen with initial state', () => {
  const { getByLabelText, getByText } = render(
    <ReduxProvider store={store}>
      <MemoryRouter> {/* Use MemoryRouter */}
        <DarkModeContext.Provider value={{ darkMode: false }}>
          <NewClaimScreen />
        </DarkModeContext.Provider>
      </MemoryRouter>
    </ReduxProvider>
  );

  // Ensure elements are present based on initial state
  expect(getByText('File A New Claim')).toBeInTheDocument();
  expect(getByLabelText('Select')).toBeInTheDocument();
});

// Test to check if a claim type can be selected from the dropdown
test('Selects a claim type from dropdown', async () => {
  const { getByLabelText, getByText } = render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <DarkModeContext.Provider value={{ darkMode: true }}>
          <NewClaimScreen />
        </DarkModeContext.Provider>
      </MemoryRouter>
    </ReduxProvider>
  );

  const selectDropdown = getByLabelText('Select');

  fireEvent.mouseDown(selectDropdown); // Simulate opening the dropdown

  const optionToSelect = getByText('Loss of Life'); // Get the option to select
  fireEvent.click(optionToSelect); // Click the desired option

  await waitFor(() => {
    // Expect the selected claim type to be visible
    expect(getByLabelText('Loss of Life')).toBeInTheDocument();
  });
});

// Commented out the following test as it seems to involve making an actual API call.
// This requires proper mocking and might hit actual API endpoints, 
// so it's better to handle it cautiously and make sure it's properly mocked.
// Uncomment and handle API mocking appropriately before enabling this test.

// test('Creates claim on button click', async () => {
//   const { getByText } = render(
//     <MemoryRouter>
//       <DarkModeContext.Provider value={{ darkMode: true }}>
//         <NewClaimScreen />
//       </DarkModeContext.Provider>
//     </MemoryRouter>
//   );

//   const submitButton = getByText('Create Claim');

//   fireEvent.click(submitButton);

//   await waitFor(() => {
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(global.fetch).toHaveBeenCalledWith(
//       'https://ciflo.azurewebsites.net/claim/create?policyNumber=1234567890&type=Loss%20of%20Life',
//       expect.objectContaining({
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//     );
//   });
// });
