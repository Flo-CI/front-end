import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('Renders App with routes', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const loginText = getByText('LOG-IN'); // Update this to match the text in your LoginScreen component
  const dashboardText = getByText('Claim Dashboard'); // Update this to match the text in your ClaimDashboardScreen component
  const notFoundText = getByText('404 Not Found'); // Update this to match the text in your NotFoundScreen component

  expect(loginText).toBeInTheDocument();
  expect(dashboardText).toBeInTheDocument();
  expect(notFoundText).toBeInTheDocument();
});
