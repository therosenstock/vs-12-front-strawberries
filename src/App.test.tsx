import { App } from "./App";
import { render, screen } from "@testing-library/react";

describe("Simple working test", () => {
  it("should have a header", async () => {
    render(<App />);
    const element = screen.getAllByTestId("header");
    expect(element).toBeDefined();
  });

  it("should have a footer", async () => {
    render(<App />);
    const element = screen.getAllByTestId("footer");
    expect(element).toBeDefined();
  });
});
