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

test('Selects a claim type from dropdown', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <DarkModeContext.Provider value={{ darkMode: true }}>
          <NewClaimScreen />
        </DarkModeContext.Provider>
      </MemoryRouter>
    );
  
    const selectDropdown = getByLabelText('Select');
  
    fireEvent.mouseDown(selectDropdown); // Simulate opening the dropdown
  
    const optionToSelect = getByText('Loss of Life'); // Get the option to select
    fireEvent.click(optionToSelect); // Click the desired option
  
    await waitFor(() => {
        expect(getByLabelText('Loss of Life')).toBeInTheDocument();; // Update as per the expected value after selection
    });
  });
  global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

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
