import type { DetailedHTMLProps, HTMLAttributes } from "react";

// This is a test component to see how eslint configs work as we procede
// FIXME: see eslint typescript/indent rule (STATUS: off, WANT: on)
type EslintComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
export const EslintComponent = ({}: EslintComponentProps) => {
  return <h1>Hello</h1>;
};
