// Button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import { describe, it, vi } from 'vitest';

describe('Button', () => {
  it('should render the Button', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('should render the text', () => {
    render(<Button>Custom Text</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Custom Text');
  });

  it('should be clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
    
  });

  it('should be disabled', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
