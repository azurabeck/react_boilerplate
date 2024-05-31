import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  test('renders the button with correct text', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
