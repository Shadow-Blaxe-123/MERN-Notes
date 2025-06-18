import express from "express";
import deleteNotes from "../controllers/NotesDeleteController.js";

const NotesDeleterouter = express.Router();

NotesDeleterouter.delete("/", (req, res) => {
  try {
    const id = req.body.id; // assuming you have an id in the request body
    const deletedNote = deleteNotes(id);
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

export default NotesDeleterouter;
