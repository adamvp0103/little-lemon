import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Renders home page title", () => {
  render(<Home />);
  const title = screen.getByText("Little Lemon");
  expect(title).toBeInTheDocument();
});
