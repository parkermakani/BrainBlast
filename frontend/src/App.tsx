import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";
import SyllabusOverview from "./pages/SyllabusOverview";
import WeekDetail from "./pages/WeekDetail";

function Home() {
  return (
    <Container>
      <Card>
        <h1>This is me Parker</h1>
        <p>I am going to be a quantum physisist now.</p>
      </Card>
    </Container>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus" element={<SyllabusOverview />} />
          <Route path="/week/:weekNum" element={<WeekDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
