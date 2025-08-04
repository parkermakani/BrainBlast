import type { ReactNode } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
