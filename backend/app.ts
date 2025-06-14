import express from "express";
import NotesFetchrouter from "./routes/NotesFetch.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api/notes", NotesFetchrouter);

export default app;
