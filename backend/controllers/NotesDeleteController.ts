import client from "../server.js";

async function deleteNotes(id: number) {
  const query = `DELETE FROM "NotesTable" WHERE "id" = $1 RETURNING *`;
  const values = [id];
  const result = await client.query(query, values);
  return result.rows[0]; // return the deleted note if you want
}

export default deleteNotes;
