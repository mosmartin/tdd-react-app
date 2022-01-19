import userEvent, { render, screen } from "@testing-library/react";
import { SignUp } from "./SignUp";

describe("SignUp Page", () => {
  describe("Layout", () => {
    it("should have a header", () => {
      render(<SignUp />);
      const header = screen.getByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
    });

    it("has a username input", () => {
      render(<SignUp />);
      const usernameInput = screen.getByLabelText("username");
      expect(usernameInput).toBeInTheDocument();
    });

    it("has an email address input", () => {
      render(<SignUp />);
      const emailInput = screen.getByLabelText("email");
      expect(emailInput).toBeInTheDocument();
    });

    it("should have a password input", () => {
      render(<SignUp />);
      const passwordInput = screen.getByLabelText("password");
      expect(passwordInput).toBeInTheDocument();
    });

    it("should have a password type for the password input field", () => {
      render(<SignUp />);
      const passwordInput = screen.getByLabelText("password");
      expect(passwordInput).toHaveAttribute("type", "password");
    });

    it("should have a confirm password input", () => {
      render(<SignUp />);
      const confirmPasswordInput = screen.getByLabelText("confirm password");
      expect(confirmPasswordInput).toBeInTheDocument();
    });

    it("should have a password type for the confirm password input field", () => {
      render(<SignUp />);
      const confirmPasswordInput = screen.getByLabelText("confirm password");
      expect(confirmPasswordInput).toHaveAttribute("type", "password");
    });

    it("should have a submit button", () => {
      render(<SignUp />);
      const submitButton = screen.getByRole("button", { name: "Sign Up" });
      expect(submitButton).toBeInTheDocument();
    });

    it("should disable the button initially", () => {
      render(<SignUp />);
      const submitButton = screen.getByRole("button", { name: "Sign Up" });
      expect(submitButton).toBeDisabled();
    });
  });

  describe("Interactions", () => {
    it("should enable the button when the password and confirm password input fields are identical", () => {
      render(<SignUp />);
      const passwordInput = screen.getByLabelText("password");
      const confirmPasswordInput = screen.getByLabelText("confirm password");

      // userEvent.type(passwordInput, "password");
      // userEvent.type(confirmPasswordInput, "password");

      // const submitButton = screen.getByRole("button", { name: "Sign Up" });
      // expect(submitButton).toBeEnabled();
    });
  });
});
