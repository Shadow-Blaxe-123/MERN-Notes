import { Request } from "express";
import client from "../server.js";

interface NoteInput {
  title: string;
  content: string;
}

async function createNotes(body: NoteInput) {
  const { title, content } = body;

  const query = `INSERT INTO "NotesTable" ("Title", "Content") VALUES ($1, $2) RETURNING *`;
  const values = [title, content];

  const result = await client.query(query, values);
  return result.rows[0]; // return the inserted note if you want
}

export default createNotes;
