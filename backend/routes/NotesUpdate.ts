import express from "express";

const NotesUpdaterouter = express.Router();

NotesUpdaterouter.get("/", (req, res) => {
  res.status(200).send("Notes Update Route");
});

export default NotesUpdaterouter;
