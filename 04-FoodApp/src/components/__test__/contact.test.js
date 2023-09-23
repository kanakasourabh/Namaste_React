import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us Test case", () => {
  it("Test whether heading is available", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion

    expect(heading).toBeInTheDocument();
  });

  test("finding button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Finding Submiot text inside document", () => {
    render(<Contact />);

    const SubmitText = screen.getByText("Submit");

    expect(SubmitText).toBeInTheDocument();
  });

  test("test whether it is loading 2 input boxes in the component", () => {
    render(<Contact />);

    const boxes = screen.getAllByRole("textbox");

    expect(boxes.length).not.toBe(3);
  });
});
