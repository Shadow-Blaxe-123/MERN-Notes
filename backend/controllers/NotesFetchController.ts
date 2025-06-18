import client from "../server.js";

async function fetchNotes() {
  return await client.query('SELECT * FROM "NotesTable"');
}

export default fetchNotes;
