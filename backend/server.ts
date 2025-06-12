import { app } from "./app";
import dotenv from "dotenv";

// Logic
dotenv.config();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
