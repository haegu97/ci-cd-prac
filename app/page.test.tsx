import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
  it("renders the page", () => {
    render(<Page />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Page />);
    expect(screen.getByText("Deploy now")).toBeInTheDocument();
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Page />);
    expect(screen.getByText("Learn")).toBeInTheDocument();
    expect(screen.getByText("Examples")).toBeInTheDocument();
    expect(screen.getByText(/Go to nextjs.org/)).toBeInTheDocument();
  });
});
