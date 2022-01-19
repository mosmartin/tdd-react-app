import { render, screen } from '@testing-library/react';
import { SignUp } from './SignUp';

describe('SignUp Page', () => {
  describe('Layout', () => {
    it('should have a header', () => {
      render(<SignUp />);
      const header = screen.getByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });

    it('has a username input', () => {
      render(<SignUp />);
      const usernameInput = screen.getByLabelText('username');
      expect(usernameInput).toBeInTheDocument();
    });

    it('has an email address input', () => {
      render(<SignUp />);
      const emailInput = screen.getByLabelText('email');
      expect(emailInput).toBeInTheDocument();
    });

    it('should have a password input', () => {
        render(<SignUp />);
        const passwordInput = screen.getByLabelText('password');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
    });
  });
});
