import express, { Request, Response } from "express";
import NotesFetchrouter from "./routes/NotesFetch.js";
import rateLimit from "express-rate-limit";
import NotesUpdaterouter from "./routes/NotesUpdate.js";
import NotesDeleterouter from "./routes/NotesDelete.js";
import NotesCreaterouter from "./routes/NotesCreate.js";

const app = express();
const apiLimiter = rateLimit({
  max: 5,
  windowMs: 60 * 1000,
  statusCode: 429,
  message: "Too many requests, please try again later.",
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

app.use("/api", apiLimiter);
app.use("/api/notes", NotesFetchrouter);
app.use("/api/notes/update", NotesUpdaterouter);
app.use("/api/notes/delete", NotesDeleterouter);
app.use("/api/notes/create", NotesCreaterouter);

export default app;
