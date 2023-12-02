import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginScreen from './LoginScreen';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../state/store'; // Import your Redux store

// Mock fetch calls
jest.mock('node-fetch', () => jest.fn());

describe('LoginScreen Component', () => {
  test('renders login form correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Flo.CI Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Please enter policy number')).toBeInTheDocument();
    expect(screen.getByLabelText('Please enter policy password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log-In' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign-Up' })).toBeInTheDocument();
  });

  test('handles user input correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>
    );

    const policyNumberInput = screen.getByLabelText('Please enter policy number');
    const passwordInput = screen.getByLabelText('Please enter policy password');

    userEvent.type(policyNumberInput, '123456');
    userEvent.type(passwordInput, '52');

    expect(policyNumberInput).toHaveValue('123456');
    expect(passwordInput).toHaveValue('52');
  });

  test('performs login action and navigates to dashboard', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Route path="/dashboard">Dashboard Page</Route>
          <Route path="/" exact>
            <LoginScreen />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    const policyNumberInput = screen.getByLabelText('Please enter policy number');
    const passwordInput = screen.getByLabelText('Please enter policy password');
    const loginButton = screen.getByRole('button', { name: 'Log-In' });

    userEvent.type(policyNumberInput, '123456');
    userEvent.type(passwordInput, '52');
    fireEvent.click(loginButton);

    // Wait for navigation or check the state change, based on how navigation is handled
    await waitFor(() => {
      expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
    });
  });

  // You can write more tests for API calls, error handling, etc.
});
