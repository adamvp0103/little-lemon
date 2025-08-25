import { render, screen } from "@testing-library/react";
import ReservationForm from "../components/ReservationForm";

const formatCurrentDate = () => {
  const now = new Date();
  const yearString = now.getFullYear();
  const monthString = String(now.getMonth() + 1).padStart(2, "0");
  const dateString = String(now.getDate()).padStart(2, "0");

  return `${yearString}-${monthString}-${dateString}`;
};

test("Date input has correct attributes", () => {
  render(<ReservationForm />);
  const input = screen.getByLabelText("Date");
  expect(input).toHaveProperty("min", formatCurrentDate());
});

test("Guests input has correct attributes", () => {
  render(<ReservationForm />);
  const input = screen.getByLabelText("Number of Guests");
  expect(input).toHaveProperty("min", 1);
});
