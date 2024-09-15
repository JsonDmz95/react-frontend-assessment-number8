import "@testing-library/jest-dom";

import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );
  });

  test("Should render a header", () => {
    expect(screen.queryAllByTestId("header")).toBeDefined();
  });

  test("Should render a logo as link to the homepage", () => {
    const logo = screen.getByText(/number/i);
    expect(logo).toBeDefined();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  test("Should render a navigation item to All Properties", () => {
    expect(screen.getByText(/all properties/i)).toBeInTheDocument();
  });

  test("Should render a navigation item to Favorites", () => {
    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
  });
});
