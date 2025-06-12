// Imports
import express from "express";

// Logic
export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
