import express from "express";

const NotesDeleterouter = express.Router();

NotesDeleterouter.get("/", (req, res) => {
  res.status(200).send("Notes Delete Route");
});

export default NotesDeleterouter;
