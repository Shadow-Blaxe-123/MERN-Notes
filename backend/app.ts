// Imports
import express from "express";
import Notesrouter from "./routes/Notes";

// Logic
export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/notes", Notesrouter);
