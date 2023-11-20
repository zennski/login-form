// TextInput.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput component with label and input', () => {
  render(
    <TextInput
      label="Test Label"
      type="text"
      placeholder="Test Placeholder"
    />
  );

  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(/Test Placeholder/i);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');

  fireEvent.change(inputElement, { target: { value: 'New Value' } });
  expect(inputElement.value).toBe('New Value');
});
