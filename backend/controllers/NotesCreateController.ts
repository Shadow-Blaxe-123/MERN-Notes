import { Request } from "express";
import client from "../server.js";

async function createNotes(req: Request) {
  const { title, content } = req.body;

  const query = `INSERT INTO "NotesTable" ("Title", "Content") VALUES ($1, $2) RETURNING *`;
  const values = [title, content];

  const result = await client.query(query, values);
  return result.rows[0]; // return the inserted note if you want
}

export default createNotes;
