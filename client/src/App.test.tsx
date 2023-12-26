import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    const { getByText } = render(<App />);
    const messageElement = getByText("Vite + React");

    expect(document.body.contains(messageElement)).toBe(true);
  });
});
