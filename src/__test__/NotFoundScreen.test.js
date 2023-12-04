import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundScreen from '../screens/NotFoundScreen';

test('Renders NotFoundScreen with 404 message and link', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NotFoundScreen />
    </MemoryRouter>
  );

  const notFoundMessage = getByText('404 Not Found');
  const errorMessage = getByText("Sorry, we couldn't find what you were looking for...");
  const linkElement = getByText('Back to dashboard');

  expect(notFoundMessage).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
