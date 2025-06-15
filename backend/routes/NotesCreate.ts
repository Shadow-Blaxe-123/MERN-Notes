import express from "express";

const NotesCreaterouter = express.Router();

NotesCreaterouter.get("/", (req, res) => {
  res.status(200).send("Notes Create Route");
});

export default NotesCreaterouter;
