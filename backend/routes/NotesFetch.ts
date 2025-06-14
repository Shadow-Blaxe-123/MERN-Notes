import express from "express";

const NotesFetchrouter = express.Router();

NotesFetchrouter.get("/", (req, res) => {
  res.status(200).send("Notes Fetch Route");
});

export default NotesFetchrouter;
