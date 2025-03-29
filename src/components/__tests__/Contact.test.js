import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Contact component should load", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("input with the placeholder Your name should be rendered", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("Your name");
  expect(inputName).toBeInTheDocument();
});

test("3 form input items should be rendered", () => {
  render(<Contact />);
  const formInputItems = screen.getAllByRole("textbox");
  expect(formInputItems.length).toBe(3);
});
