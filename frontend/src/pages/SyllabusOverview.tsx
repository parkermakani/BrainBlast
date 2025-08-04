import { useEffect, useState } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import { Link } from "react-router-dom";

interface Week {
  week: number;
  title: string;
}

export default function SyllabusOverview() {
  const [weeks, setWeeks] = useState<Week[]>([]);

  useEffect(() => {
    fetch("/syllabus")
      .then((r) => r.json())
      .then((data) => setWeeks(data));
  }, []);

  return (
    <Container>
      <h2>Syllabus Overview</h2>
      {weeks.map((w) => (
        <Card key={w.week}>
          <h3>
            Week {w.week}: {w.title}
          </h3>
          <Link to={`/week/${w.week}`}>View details →</Link>
        </Card>
      ))}
    </Container>
  );
}
