import { Client } from "pg";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const { db_host, db_user, db_name, db_password, db_port, server_port } =
  process.env;

const client = new Client({
  user: db_user,
  host: db_host,
  database: db_name,
  password: db_password,
  port: Number(db_port),
});

// Connect to PostgreSQL
client
  .connect()
  .then(() => {
    console.log("✅ Connected to the database");

    // Start the Express server only after successful DB connection
    app.listen(Number(server_port), () => {
      console.log("🚀 Server is running on port " + server_port);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to the database:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n🛑 Shutting down...");
  await client.end();
  console.log("📦 Database connection closed.");
  process.exit(0);
});

export default client; // optional, for reusing `client` elsewhere
