import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginComponent from '../LoginComponent';

describe('LoginComponent', () => {
    it('renders correctly', () => {
      const { asFragment } = render(<LoginComponent />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly', async() => {
        render(<LoginComponent />);
        const buttonElementList = await screen.findAllByRole("button");
        expect(buttonElementList).toHaveLength(1);
    });

    test("should be able to submit the form", async () => {
        render(<LoginComponent />);
        const submitButton = screen.getByTestId("submit");
        const email = screen.getByPlaceholderText("username");
        const password = screen.getByPlaceholderText("password");
    
        fireEvent.change(email, { target: { value: "test@gmail.com" } });
        fireEvent.change(password, { target: { value: "12345" } });
    
        fireEvent.click(submitButton);
    
        await waitFor(() => {
            expect(screen.getByText('送信成功')).toBeInTheDocument();
          });
      });
  });