import type { ReactNode } from "react";
import "../styles/primitives.css";

interface Props {
  children: ReactNode;
}

export default function Menu({ children }: Props) {
  return <div className="menu">{children}</div>;
}
