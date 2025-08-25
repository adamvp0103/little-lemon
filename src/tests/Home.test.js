import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("Home page title is rendered", () => {
  render(<Home />);
  const title = screen.getByText("Little Lemon");
  expect(title).toBeInTheDocument();
});
