import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import Card from "../components/Card";

interface Week {
  week: number;
  title: string;
  readings: string[];
  homework: string;
  videos: string[];
}

export default function WeekDetail() {
  const { weekNum } = useParams<{ weekNum: string }>();
  const [week, setWeek] = useState<Week | null>(null);

  useEffect(() => {
    if (!weekNum) return;
    fetch(`/api/week/${weekNum}`)
      .then((r) => r.json())
      .then((data) => setWeek(data));
  }, [weekNum]);

  if (!week) return <Container>Loading...</Container>;

  return (
    <Container>
      <Card>
        <h2>
          Week {week.week}: {week.title}
        </h2>
        <h3>Readings & Resources</h3>
        <ul>
          {week.readings.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <h3>Homework</h3>
        <p>{week.homework}</p>
        {week.videos.length > 0 && (
          <>
            <h3>Progress Videos</h3>
            {week.videos.map((v, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <iframe
                  style={{ width: "100%", aspectRatio: "16 / 9" }}
                  src={v.replace("watch?v=", "embed/")}
                  title={`Week ${week.week} video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </>
        )}
        <Link to="/syllabus">← Back to overview</Link>
      </Card>
    </Container>
  );
}
