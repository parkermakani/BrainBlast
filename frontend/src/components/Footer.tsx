import "../styles/primitives.css";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        © {new Date().getFullYear()} PMBATA LLC
      </Container>
    </footer>
  );
}
