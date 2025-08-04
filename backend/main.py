from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os, csv, requests
from typing import List, Dict
import logging
from fastapi import HTTPException
from dotenv import load_dotenv

# Load environment variables from ./backend/.env if present
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

app = FastAPI(title="Syllabus API")

# Allow all origins for simplicity during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SYLLABUS_CSV_URL = os.getenv("SYLLABUS_CSV_URL", os.path.join(os.path.dirname(__file__), "syllabus.csv"))

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def _fetch_csv_lines() -> List[str]:
    # Determine source type and attempt to retrieve CSV content
    if SYLLABUS_CSV_URL.startswith("http"):
        logger.info(f"Fetching syllabus CSV from URL: {SYLLABUS_CSV_URL}")
        try:
            resp = requests.get(SYLLABUS_CSV_URL)
            resp.raise_for_status()
            logger.debug("Fetched CSV content:\n%s", resp.text)
        except requests.RequestException as exc:
            logger.error(f"Error fetching CSV from URL: {exc}")
            raise HTTPException(status_code=500, detail=f"Failed to fetch CSV from URL – {exc}") from exc
        return resp.text.splitlines()
    else:
        path = SYLLABUS_CSV_URL
        logger.info(f"Loading syllabus CSV from file: {path}")
        if not os.path.exists(path):
            logger.error("CSV file not found at provided path.")
            raise HTTPException(status_code=500, detail="Syllabus CSV file not found")
        with open(path, newline="", encoding="utf-8") as f:
            content = f.read().splitlines()
        logger.debug("Loaded CSV content from file (%s lines)", len(content))
        return content

def load_syllabus() -> List[Dict]:
    reader = csv.DictReader(_fetch_csv_lines())
    parsed = []
    for row in reader:
        parsed.append({
            "week": int(row.get("week", 0)),
            "title": row.get("title", ""),
            "readings": [r.strip() for r in row.get("readings", "").split(";") if r.strip()],
            "homework": row.get("homework", ""),
            "videos": [v.strip() for v in row.get("videos", "").split(",") if v.strip()],
        })
    return parsed

@app.get("/health")
async def health():
    return {"status": "ok"}

@app.get("/syllabus")
async def get_syllabus():
    return load_syllabus()

@app.get("/week/{week_num}")
async def get_week_detail(week_num: int):
    for row in load_syllabus():
        if row["week"] == week_num:
            return row
    return {"detail": "Week not found"}, 404 