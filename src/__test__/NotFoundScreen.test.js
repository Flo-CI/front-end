import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundScreen from '../screens/NotFoundScreen';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../state/store';

// Test to check rendering and content of NotFoundScreen
test('Renders NotFoundScreen with 404 message and link', () => {
  // Render NotFoundScreen within ReduxProvider and MemoryRouter
  const { getByText } = render(
    <ReduxProvider store={store}>
      <MemoryRouter>
        <NotFoundScreen />
      </MemoryRouter>
    </ReduxProvider>
  );

  // Get elements by their text content to ensure they are rendered
  const notFoundMessage = getByText('404 Not Found');
  const errorMessage = getByText("Sorry, we couldn't find what you were looking for...");
  const linkElement = getByText('Back to dashboard');

  // Ensure the expected elements are present in the rendered NotFoundScreen
  expect(notFoundMessage).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
