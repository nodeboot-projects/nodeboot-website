/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import clsx from "clsx";

import styles from "./_home.module.scss";

export const Page = () => {
  return (
    <section className={clsx(styles.homePage)}>
      <h1>PAGE(HOME)</h1>
    </section>
  );
};

// Inline test
if (import.meta.vitest) {
  const { render } = await import("@testing-library/react");
  const { describe, expect, it } = import.meta.vitest;

  describe("Home Page", () => {
    it("should render and display PAGE(HOME)", () => {
      const { baseElement } = render(<Page />);
      // should render
      expect(baseElement).toBeTruthy();
      // display PAGE(HOME)
      expect(baseElement.querySelector("h1")?.innerHTML).toBe("PAGE(HOME)");
    });
  });
}
