import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('should render the App', () => {
    render(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  it('should enable the button if two textboxes were typed', () => {
    render(<App />);
    
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const loginButton = screen.getByText(/Log in/i);

    expect(loginButton).toBeDisabled();

    fireEvent.input(usernameInput, { target: { value: 'testuser' } });
    fireEvent.input(passwordInput, { target: { value: 'testpassword' } });
    
    expect(loginButton).not.toBeDisabled();
  });
});