import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MyComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    render(<MyComponent />);
    const linkElement = screen.getByText(/Hello, Jest!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
