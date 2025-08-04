import type { ReactNode } from "react";
import "../styles/primitives.css";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}
