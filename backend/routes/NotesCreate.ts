import express from "express";
import createNotes from "../controllers/NotesCreateController.js";

const NotesCreaterouter = express.Router();

NotesCreaterouter.post("/", async (req, res) => {
  try {
    const response = await createNotes(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create note" });
  }
});

export default NotesCreaterouter;
