import { beforeEach, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Components to test
import Hompage from "./Hompage";

beforeEach(() => render(<Hompage />));
describe("HomePage component", () => {
  it("should have a heading with the text MovieFlix", () => {
    // render(<Hompage />);
    screen.getByRole("heading", { name: /MovieFlix/i });
  });
});
