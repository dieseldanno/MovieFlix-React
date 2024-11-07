import { describe, it, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

// Importera MoviesPage component
import MoviesPage from "./MoviesPage";

beforeEach(() => render(<MoviesPage />));

describe("MoviesPage component", () => {
  it("should have a heading with the text Populära filmer", () => {
    screen.getByRole("heading", { name: /filmer$/i });
  });

  it("should display image for each movie", () => {});
});
