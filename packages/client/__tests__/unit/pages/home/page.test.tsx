import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// TODO: tsconfig paths config
import { Page } from "../../../../src/pages/home/page";

describe("Home Page", () => {
  it("should render and display PAGE(HOME)", () => {
    const { baseElement } = render(<Page />);
    // should render
    expect(baseElement).toBeTruthy();
    // display PAGE(HOME)
    expect(baseElement.querySelector("h1")?.innerHTML).toBe("PAGE(HOME)");
  });
});
