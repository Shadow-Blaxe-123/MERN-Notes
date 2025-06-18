import express from "express";
import fetchNotes from "../controllers/NotesFetchController.js";

const NotesFetchrouter = express.Router();

NotesFetchrouter.get("/", async (req, res) => {
  try {
    const notes = await fetchNotes();
    res.status(200).json(notes); // Send notes as JSON with status 200
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

export default NotesFetchrouter;
