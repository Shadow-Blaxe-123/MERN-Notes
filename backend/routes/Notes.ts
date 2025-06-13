import { Router } from "express";

const Notesrouter = Router();

Notesrouter.get("/", (req, res) => {
  res.send("Notes");
});

export default Notesrouter;
