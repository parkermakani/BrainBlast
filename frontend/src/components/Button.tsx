import type { ButtonHTMLAttributes } from "react";
import "../styles/primitives.css";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="button" {...props} />;
}
